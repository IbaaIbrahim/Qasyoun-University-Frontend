import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import CmsCouncilDecisionsPage from "@/components/static-page/cms-council-decisions-page";
import { loadSitePagesSectionItems } from "@/lib/services/static-page.service";

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
      page: tNav("higherEducationDecisions"),
    }),
  };
}

export default async function DecisionsPage({ params }: Props) {
  const { locale } = await params;
  const items = await loadSitePagesSectionItems(
    "higher_education_decisions",
    locale,
  );

  return <CmsCouncilDecisionsPage locale={locale} items={items} />;
}
