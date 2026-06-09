import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import CmsSiteSectionPage from "@/components/static-page/cms-site-section-page";
import { loadSitePagesSection } from "@/lib/services/static-page.service";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const tMeta = await getTranslations({ locale, namespace: "Metadata" });
  const tNav = await getTranslations({ locale, namespace: "Nav" });
  return {
    title: tMeta("staticPageTitle", {
      page: tNav("universityDirectorates"),
    }),
  };
}

export default async function DirectoratesPage({ params }: Props) {
  const { locale } = await params;
  const data = await loadSitePagesSection("directorates", locale);

  return (
    <CmsSiteSectionPage
      locale={locale}
      cmsTitle={data.cmsTitle}
      meta={data.meta}
      pageNavKey="universityDirectorates"
    />
  );
}
