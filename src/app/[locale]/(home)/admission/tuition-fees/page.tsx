import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import { getBreadcrumbPageContent } from "@/lib/services/breadcrumb-page.service";
import { listStudyYears } from "@/lib/services/study-year.service";
import { readContentAsJsonByFilter } from "@/lib/services/content.service";
import TuitionFeesArea, {
  YearTuitionData,
  TuitionCategoryData,
} from "@/components/admission/tuition-fees-area";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ locale: string }>;
};

async function getPageTitle(locale: string) {
  const tMeta = await getTranslations({ locale, namespace: "Metadata" });
  const tNav = await getTranslations({ locale, namespace: "Nav" });
  const label = tNav("tuitionFees");
  return {
    fullTitle: tMeta("staticPageTitle", { page: label }),
    title: label,
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const { fullTitle } = await getPageTitle(locale);
  return { title: fullTitle };
}

const SECTIONS_KEYS = [
  "syrian_students_tuition_fees",
  "syrian_students_foreign_certificates_tuition_fees",
  "foreign_and_arab_students_tuition_fees",
  "general_tuition_fees",
];

export default async function TuitionFeesPage({ params }: Props) {
  const { locale } = await params;
  const { title } = await getPageTitle(locale);

  // Fetch breadcrumb settings
  const breadcrumbContent = await getBreadcrumbPageContent(locale);
  const bgImg = breadcrumbContent?.admissionBreadcrumbImage;
  const tNav = await getTranslations({ locale, namespace: "Nav" });
  const subtitle = tNav("admissionNav");

  // Fetch active study years
  const studyYears = await listStudyYears();

  // Sort: current year first, then displayOrder ascending, then id descending
  const sortedYears = [...studyYears].sort((a, b) => {
    if (a.isCurrent && !b.isCurrent) return -1;
    if (!a.isCurrent && b.isCurrent) return 1;
    return a.displayOrder - b.displayOrder || b.id - a.id;
  });

  // Fetch tuition fees data for all sorted years
  const yearsData: YearTuitionData[] = await Promise.all(
    sortedYears.map(async (year) => {
      const contentList = await readContentAsJsonByFilter(
        { referenceType: "tuition_fees", referenceId: String(year.id) },
        locale
      );

      const categories: Record<string, TuitionCategoryData> = {};

      SECTIONS_KEYS.forEach((secKey) => {
        const contentJson = contentList.find((c) => c.section === secKey);
        let tableData: Record<string, string>[] = [];
        let columns: { key: string; label: string }[] | undefined = undefined;
        let fileUrl = "";
        let notes = "";

        if (contentJson && contentJson.contentMetasJson) {
          const tableKey = `${secKey}_table`;
          const fileKey = `${secKey}_file`;

          const rawTable = contentJson.contentMetasJson[tableKey];
          if (typeof rawTable === "string" && rawTable.trim().length > 0) {
            try {
              const parsed = JSON.parse(rawTable);
              if (
                parsed &&
                typeof parsed === "object" &&
                !Array.isArray(parsed) &&
                Array.isArray(parsed.rows)
              ) {
                tableData = parsed.rows;
                if (Array.isArray(parsed.columns) && parsed.columns.length > 0) {
                  columns = parsed.columns;
                }
              } else if (Array.isArray(parsed)) {
                tableData = parsed;
              }
            } catch (e) {
              console.error("Failed to parse table JSON:", e);
            }
          } else if (Array.isArray(rawTable)) {
            tableData = rawTable;
          }

          fileUrl = contentJson.contentMetasJson[fileKey] || "";
          notes = contentJson.contentMetasJson.notes || "";
        }

        categories[secKey] = {
          section: secKey,
          title: contentJson?.title || undefined,
          table: tableData,
          columns,
          file: fileUrl,
          notes,
        };
      });

      return {
        yearId: year.id,
        yearName: year.getName(locale),
        isCurrent: year.isCurrent,
        categories,
      };
    })
  );

  return (
    <main>
      <BreadcrumbTwo title={title} subtitle={subtitle} bgImg={bgImg} />
      <TuitionFeesArea yearsData={yearsData} locale={locale} />
    </main>
  );
}
