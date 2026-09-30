import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import StudentRegistrationArea from "@/components/student-registration/student-registration-area";
import { getBreadcrumbPageContent } from "@/lib/services/breadcrumb-page.service";
import { listFacultiesForPublic } from "@/lib/services/faculty.service";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "StudentRegistration" });
  return {
    title: t("pageTitle"),
    description: t("pageSubtitle"),
  };
}

export default async function StudentRegistrationPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "StudentRegistration" });

  const [breadcrumbContent, faculties] = await Promise.all([
    getBreadcrumbPageContent(locale),
    listFacultiesForPublic({ take: 50 }),
  ]);

  const plainFaculties = faculties.map((f) => ({
    id: f.id,
    name: f.name,
    name_AR: f.nameAr || f.name,
  }));

  // Fallback faculties if API returns empty
  const finalFaculties =
    plainFaculties.length > 0
      ? plainFaculties
      : [
          { id: 1, name: "Faculty of Pharmacy", name_AR: "كلية الصيدلة" },
          { id: 5, name: "Faculty of Dentistry", name_AR: "كلية طب الأسنان" },
          {
            id: 12,
            name: "Faculty of Information and Communications Engineering",
            name_AR: "كلية الهندسة المعلوماتية والاتصالات",
          },
          {
            id: 13,
            name: "Faculty of Architecture",
            name_AR: "كلية الهندسة المعمارية",
          },
          {
            id: 14,
            name: "Faculty of Management and Economics",
            name_AR: "كلية الإدارة والاقتصاد",
          },
          { id: 15, name: "Faculty of Arts", name_AR: "كلية الآداب" },
          {
            id: 23,
            name: "Dental Prosthetics Institute",
            name_AR: "المعهد التقاني للتعويضات السنية",
          },
        ];

  return (
    <main>
      <BreadcrumbTwo
        title={t("breadcrumbTitle")}
        subtitle={t("breadcrumbSubtitle")}
        bgImg={breadcrumbContent?.contactUsBreadcrumbImage || undefined}
      />
      <StudentRegistrationArea faculties={finalFaculties} />
    </main>
  );
}
