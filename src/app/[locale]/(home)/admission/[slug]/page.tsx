import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import CmsStaticPage from "@/components/static-page/cms-static-page";
import {
  getNavKeyForSection,
  getSectionConfig,
} from "@/lib/static-pages/config";
import { ReferenceTypes } from "@/lib/constants";
import { readContentAsJsonByFilter } from "@/lib/services/content.service";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

async function getPageTitle(locale: string, slug: string) {
  const cfg = getSectionConfig("admission", slug);
  const tMeta = await getTranslations({ locale, namespace: "Metadata" });
  if (!cfg) {
    return {
      title: tMeta("notFoundTitle"),
      fullTitle: tMeta("notFoundTitle"),
    };
  }
  const navKey = getNavKeyForSection("admission", cfg.sectionValue);
  const tNav = await getTranslations({ locale, namespace: "Nav" });
  const label = navKey ? tNav(navKey as never) : slug.replace(/-/g, " ");
  return {
    fullTitle: tMeta("staticPageTitle", { page: label }),
    title: label,
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const { fullTitle } = await getPageTitle(locale, slug);
  return { title: fullTitle };
}

export default async function AdmissionStaticPage({ params }: Props) {
  const { locale, slug } = await params;
  const cfg = getSectionConfig("admission", slug);
  if (!cfg) {
    notFound();
  }

  const { title } = await getPageTitle(locale, slug);

  const ref = ReferenceTypes[cfg.referenceKey];
  const meta = await readContentAsJsonByFilter(
    { referenceType: ref.value, referenceId: "0" },
    locale,
  );

  const pageData = meta
    .find((c) => c.section === cfg.sectionValue)
    ?.toStaticPage();

  return (
    <CmsStaticPage
      folder="admission"
      slug={slug}
      locale={locale}
      cmsTitle={title}
      pageData={pageData}
    />
  );
}
