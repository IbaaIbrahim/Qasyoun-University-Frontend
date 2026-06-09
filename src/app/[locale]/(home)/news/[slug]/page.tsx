import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getNewsBySlug } from "@/lib/services/news.service";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const tMeta = await getTranslations({ locale, namespace: "Metadata" });
  const news = await getNewsBySlug(slug, locale);
  if (!news) {
    return { title: tMeta("newsNotFoundTitle") };
  }
  return {
    title: news.title || tMeta("newsDetailTitle"),
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug, locale } = await params;
  const news = await getNewsBySlug(slug, locale);

  if (!news) notFound();

  const t = await getTranslations({ locale, namespace: "News" });

  const dateObj = news.date ? new Date(news.date) : null;
  const formattedDate = dateObj
    ? dateObj.toLocaleDateString(locale === 'ar' ? 'ar-EG' : 'en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    : null;

  return (
    <main>
      <BreadcrumbTwo
        title={news.title || ""}
        subtitle={t("newsDetails")}
      />
      <section className="tp-blog-details-area pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="tp-blog-details-wrapper">
                <div className="tp-blog-details-content">
                  {formattedDate && (
                    <div className="tp-blog-meta mb-30" style={{ display: 'flex', gap: '15px', color: '#6c757d', fontSize: '15px', alignItems: 'center' }}>
                      <span>
                        <i className="fa-sharp fa-light fa-calendar-days" style={{ color: '#42023e', marginRight: '8px', marginLeft: locale === 'ar' ? '8px' : '0' }}></i>
                        {formattedDate}
                      </span>
                    </div>
                  )}
                  {/* <h2 className="tp-blog-details-title mb-25">{news.title}</h2> */}
                  {news.imageUrl && (
                    <div className="tp-blog-details-thumb mb-50">
                      <Image
                        src={news.imageUrl}
                        alt={news.title || ""}
                        width={1200}
                        height={600}
                        className="w-100"
                        style={{ borderRadius: '15px', height: 'auto', maxHeight: '600px', objectFit: 'cover' }}
                        unoptimized
                      />
                    </div>
                  )}
                  <div
                    className="tp-blog-details-text"
                    dangerouslySetInnerHTML={{ __html: news.description || "" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
