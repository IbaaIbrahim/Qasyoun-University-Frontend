import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import CmsStaticPage from "@/components/static-page/cms-static-page";
import { loadStaticPageContent } from "@/lib/services/static-page.service";
import {
  getNavKeyForSection,
  getSectionConfig,
} from "@/lib/static-pages/config";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

async function getPageTitle(locale: string, slug: string) {
  const cfg = getSectionConfig("about", slug);
  const tMeta = await getTranslations({ locale, namespace: "Metadata" });

  if (!cfg) return { title: tMeta("notFoundTitle"), fullTitle: tMeta("notFoundTitle") };
  const navKey = getNavKeyForSection("about", cfg.sectionValue);
  const tNav = await getTranslations({ locale, namespace: "Nav" });

  const label = navKey ? tNav(navKey as never) : slug.replace(/-/g, " ");
  return {
    fullTitle: tMeta("staticPageTitle", { page: label }),
    title: label
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const { fullTitle } = await getPageTitle(locale, slug);
  return { title: fullTitle };
}

export default async function AboutStaticPage({ params }: Props) {
  const { locale, slug } = await params;

  if (!getSectionConfig("about", slug)) {
    notFound();
  }

  const { title } = await getPageTitle(locale, slug);
  const data = await loadStaticPageContent("about", slug, locale);
  return (
    <CmsStaticPage
      folder="about"
      slug={slug}
      locale={locale}
      cmsTitle={title} // or use it wherever you need
      meta={data.meta}
    />
  );
}