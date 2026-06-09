import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import ContactArea from "@/components/contact/contact-area";
import ContactInfoArea from "@/components/contact/contact-info-area";
import { getBreadcrumbPageContent } from "@/lib/services/breadcrumb-page.service";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("contactTitle"),
  };
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations("Contact");
  const breadcrumbContent = await getBreadcrumbPageContent(locale);

  return (
    <main>
      <BreadcrumbTwo
        title={t("breadcrumbTitle")}
        subtitle={t("breadcrumbSubtitle")}
        bgImg={breadcrumbContent?.contactUsBreadcrumbImage || undefined}
      />
      <ContactInfoArea />
      <ContactArea />
    </main>
  );
}
