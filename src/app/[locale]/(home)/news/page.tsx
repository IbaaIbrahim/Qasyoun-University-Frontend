import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getAllNews } from "@/lib/services/news.service";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import News from "@/lib/classes/news";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import { getBreadcrumbPageContent } from "@/lib/services/breadcrumb-page.service";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("newsTitle") || "News - Qasyoun Private University",
  };
}

export default async function NewsListPage({ params }: Props) {
  const { locale } = await params;
  const newsItems = await getAllNews(locale);
  const t = await getTranslations({ locale, namespace: "NewsBanner" });
  const tNav = await getTranslations({ locale, namespace: "Nav" });
  const breadcrumbContent = await getBreadcrumbPageContent(locale);

  return (
    <main>
      <BreadcrumbTwo
        title={tNav("news")}
        subtitle={tNav("news")}
        bgImg={breadcrumbContent?.newsBreadcrumbImage || undefined}
      />

      <section className="tp-news-list-area pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="tp-news-list-wrapper">
                {newsItems.length > 0 ? (
                  newsItems.map((news) => (
                    <NewsItem key={news.id} news={news} readMoreLabel={t("readMore")} locale={locale} />
                  ))
                ) : (
                  <div className="text-center">
                    <p>{t("empty")}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function NewsItem({ news, readMoreLabel, locale }: { news: News, readMoreLabel: string, locale: string }) {
  const date = news.date ? new Date(news.date) : new Date();
  const year = date.getFullYear();
  const day = date.getDate().toString().padStart(2, '0');
  const month = date.toLocaleString(locale === 'ar' ? 'ar-EG' : 'en-US', { month: 'short' }).toUpperCase();

  return (
    <div className="tp-news-list-item">
      <div className="tp-news-list-date-box">
        <span className="year">{year}</span>
        <span className="day">{day}</span>
        <span className="month">{month}</span>
      </div>

      <div className="tp-news-list-content">
        <h3 className="tp-news-list-title">
          <Link href={news.href || "#"}>{news.title}</Link>
        </h3>
        <p className="tp-news-list-excerpt text-truncate-2">
          {/* Strip HTML if description is rich text */}
          {news.description ? news.description.replace(/<[^>]*>?/gm, '').slice(0, 150) + '...' : ''}
        </p>
        <div className="tp-news-list-btn">
          <Link href={news.href || "#"} className="tp-btn-inner">
            {readMoreLabel}
          </Link>
        </div>
      </div>

      {news.imageUrl && (
        <div className="tp-news-list-thumb">
          <Link href={news.href || "#"}>
            <Image
              src={news.imageUrl}
              alt={news.title || ""}
              fill
              unoptimized
            />
          </Link>
        </div>
      )}
    </div>
  );
}
