import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import JobRequestForm from "@/components/form/job-request-form";
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
                <span className="tp-section-subtitle">{t("breadcrumbSubtitle")}</span>
                <h2 className="tp-section-title">{t("title")}</h2>
              </div>
              <div className="tp-job-form-wrapper p-relative" style={{ background: '#f8f8f8', padding: '50px', borderRadius: '20px' }}>
                <JobRequestForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
