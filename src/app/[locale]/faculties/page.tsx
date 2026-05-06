import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import FacultyCard from "@/components/reusable/faculty-card";
import { listFacultiesForPublic } from "@/lib/services/faculty.service";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("facultiesTitle"),
  };
}

export default async function FacultiesIndexPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Faculties" });
  const faculties = await listFacultiesForPublic();

  return (
    <main>
      <BreadcrumbTwo title={t("breadcrumbTitle")} subtitle={t("breadcrumbTitle")} />
      <section className="pt-60 pb-90">
        <div className="container">
          <div className="row g-4">
            {faculties.map((f) => (
              <div key={f.id} className="col-md-6 col-lg-4">
                <FacultyCard faculty={f} />
              </div>
            ))}
          </div>
          {faculties.length === 0 && (
            <p className="text-center text-muted">{t("empty")}</p>
          )}
        </div>
      </section>
    </main>
  );
}
