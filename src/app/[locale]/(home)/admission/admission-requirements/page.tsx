import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import { getBreadcrumbPageContent } from "@/lib/services/breadcrumb-page.service";
import { listStudyYears } from "@/lib/services/study-year.service";
import { readContentAsJsonByFilter } from "@/lib/services/content.service";
import AdmissionRequirementsArea, {
  YearAdmissionData,
  StudentCategoryData,
} from "@/components/admission/admission-requirements-area";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ locale: string }>;
};

async function getPageTitle(locale: string) {
  const tMeta = await getTranslations({ locale, namespace: "Metadata" });
  const tNav = await getTranslations({ locale, namespace: "Nav" });
  const label = tNav("admissionRequirements");
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
  "syrian_students_admission_requirements",
  "syrian_students_foreign_certificates_admission_requirements",
  "foreign_and_arab_students_admission_requirements",
  "similar_transfer_prioritization_admission_requirements",
];

export default async function AdmissionRequirementsPage({ params }: Props) {
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

  // Fetch admission requirements data for all sorted years
  const yearsData: YearAdmissionData[] = await Promise.all(
    sortedYears.map(async (year) => {
      const contentList = await readContentAsJsonByFilter(
        { referenceType: "admission_requirements", referenceId: String(year.id) },
        locale
      );

      const categories: Record<string, StudentCategoryData> = {};

      SECTIONS_KEYS.forEach((secKey) => {
        const contentJson = contentList.find((c) => c.section === secKey);
        let tableData: Record<string, string>[] = [];
        let fileUrl = "";

        if (contentJson && contentJson.contentMetasJson) {
          const prefix = secKey.replace(/_admission_requirements$/, "");
          const tableKey = `${prefix}_table`;
          const fileKey = `${prefix}_file`;

          const rawTable = contentJson.contentMetasJson[tableKey];
          if (typeof rawTable === "string" && rawTable.trim().length > 0) {
            try {
              tableData = JSON.parse(rawTable);
            } catch (e) {
              console.error("Failed to parse table JSON:", e);
            }
          } else if (Array.isArray(rawTable)) {
            tableData = rawTable;
          }

          fileUrl = contentJson.contentMetasJson[fileKey] || "";
        }

        categories[secKey] = {
          section: secKey,
          table: tableData,
          file: fileUrl,
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
      <AdmissionRequirementsArea yearsData={yearsData} locale={locale} />
    </main>
  );
}
