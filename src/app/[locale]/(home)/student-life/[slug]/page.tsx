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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const cfg = getSectionConfig("student-life", slug);
  const tMeta = await getTranslations({ locale, namespace: "Metadata" });
  if (!cfg) {
    return { title: tMeta("notFoundTitle") };
  }
  const navKey = getNavKeyForSection("student-life", cfg.sectionValue);
  const tNav = await getTranslations({ locale, namespace: "Nav" });
  const label = navKey
    ? tNav(navKey as never)
    : slug.replace(/-/g, " ");
  return {
    title: tMeta("staticPageTitle", { page: label }),
  };
}

export default async function StudentLifeStaticPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!getSectionConfig("student-life", slug)) {
    notFound();
  }
  const data = await loadStaticPageContent("student-life", slug, locale);

  return (
    <CmsStaticPage
      folder="student-life"
      slug={slug}
      locale={locale}
      cmsTitle={data.cmsTitle}
      meta={data.meta}
    />
  );
}
