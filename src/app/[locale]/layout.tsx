import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import {
  Crimson_Pro,
  Jost,
  Noto_Sans_Arabic,
  Outfit,
} from "next/font/google";
import "swiper/css/bundle";
import "../globals.scss";
import { routing } from "@/i18n/routing";
import { isRtlLocale } from "@/lib/i18n/locale";
import { VideoProvider } from "@/provider/VideoProvider";

const outfitBody = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--tp-ff-body",
});
const outfitHeading = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--tp-ff-heading",
});
const outfitP = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--tp-ff-p",
});
const jostPrimary = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--tp-ff-primary",
});
const crimsonSecondary = Crimson_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--tp-ff-secondary",
});
const notoArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--tp-ff-arabic",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: LayoutProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("siteTitle"),
    description: t("siteDescription"),
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  if (!(routing.locales as readonly string[]).includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const dir = isRtlLocale(locale) ? "rtl" : "ltr";

  const fontVars = [
    outfitBody.variable,
    outfitHeading.variable,
    outfitP.variable,
    jostPrimary.variable,
    crimsonSecondary.variable,
    locale === "ar" ? notoArabic.variable : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body className={fontVars}>
        <NextIntlClientProvider messages={messages}>
          <VideoProvider>{children}</VideoProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
