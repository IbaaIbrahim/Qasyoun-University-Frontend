import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import VacanciesFormTabs from "@/components/vacancies/vacancies-form-tabs";
import { getBreadcrumbPageContent } from "@/lib/services/breadcrumb-page.service";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Careers - Qasyoun Private University`,
  };
}

export default async function VacanciesPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations("Vacancies");
  const breadcrumbContent = await getBreadcrumbPageContent(locale);

  return (
    <main>
      <BreadcrumbTwo
        title={t("breadcrumbTitle")}
        subtitle={t("breadcrumbSubtitle")}
        bgImg={breadcrumbContent?.vacanciesBreadcrumbImage}
      />

      <section className="tp-job-area pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="tp-section-title-wrapper text-center mb-50">
                <h2 className="tp-section-title">{t("title")}</h2>
              </div>
              <VacanciesFormTabs />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

