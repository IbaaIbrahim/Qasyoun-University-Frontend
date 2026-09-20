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
import LocaleSync from "@/components/i18n/locale-sync";
import { UniversityJsonLd, WebSiteJsonLd } from "@/components/seo/json-ld";
import AnalyticsTracker from "@/lib/analytics/analytics-tracker";

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
  const isAr = locale === "ar";
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://qpu.edu.sy";
  const canonicalUrl = locale === "ar" ? baseUrl : `${baseUrl}/en`;

  return {
    metadataBase: new URL(baseUrl),
    title: {
      template: `%s | ${isAr ? "جامعة قاسيون الخاصة" : "QPU"}`,
      default: t("siteTitle"),
    },
    description: t("siteDescription"),
    keywords: [
      "جامعة قاسيون الخاصة",
      "Qasyoun Private University",
      "QPU",
      "جامعات خاصة في سوريا",
      "كلية الصيدلة",
      "كلية طب الأسنان",
      "كلية الهندسة",
      "مفاضلة الجامعات الخاصة",
      "أقساط جامعة قاسيون",
      "Damascus University",
      "Higher Education Syria",
    ],
    authors: [{ name: "Qasyoun Private University", url: baseUrl }],
    creator: "Qasyoun Private University",
    publisher: "Qasyoun Private University",
    alternates: {
      canonical: canonicalUrl,
      languages: {
        ar: baseUrl,
        en: `${baseUrl}/en`,
        "x-default": baseUrl,
      },
    },
    openGraph: {
      title: t("siteTitle"),
      description: t("siteDescription"),
      url: canonicalUrl,
      siteName: isAr
        ? "جامعة قاسيون الخاصة للعلوم والتكنولوجيا"
        : "Qasyoun Private University for Science & Technology",
      images: [
        {
          url: `${baseUrl}/assets/img/logo/qpu-og-banner.jpg`,
          width: 1200,
          height: 630,
          alt: t("siteTitle"),
        },
      ],
      locale: isAr ? "ar_SY" : "en_US",
      alternateLocale: isAr ? ["en_US"] : ["ar_SY"],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("siteTitle"),
      description: t("siteDescription"),
      images: [`${baseUrl}/assets/img/logo/qpu-og-banner.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/favicon.ico",
    },
    verification: {
      google: "Nxwehe0W99G6R6O6tesn6avcjdq093QWH0LjMrcKeB0",
    },
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
        <UniversityJsonLd locale={locale} />
        <WebSiteJsonLd locale={locale} />
        <AnalyticsTracker />
        <NextIntlClientProvider messages={messages}>
          <LocaleSync />
          <VideoProvider>{children}</VideoProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
