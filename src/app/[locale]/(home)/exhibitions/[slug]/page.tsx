import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import Image from "next/image";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import { getExhibitionBySlug } from "@/lib/services/exhibition.service";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const tMeta = await getTranslations({ locale, namespace: "Metadata" });
  const exhibition = await getExhibitionBySlug(slug, locale);
  if (!exhibition) {
    return { title: tMeta("exhibitionsNotFoundTitle") };
  }
  return {
    title: exhibition.title || tMeta("exhibitionsDetailTitle"),
  };
}

export default async function ExhibitionDetailPage({ params }: Props) {
  const { slug, locale } = await params;
  const exhibition = await getExhibitionBySlug(slug, locale);

  if (!exhibition) notFound();

  const t = await getTranslations({ locale, namespace: "Exhibitions" });

  const dateObj = exhibition.date ? new Date(exhibition.date) : null;
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
        title={exhibition.title || ""}
        subtitle={t("exhibitionsDetails")}
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
                  {exhibition.imageUrl && (
                    <div className="tp-blog-details-thumb mb-50">
                      <Image
                        src={exhibition.imageUrl}
                        alt={exhibition.title || ""}
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
                    dangerouslySetInnerHTML={{ __html: exhibition.description || "" }}
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
