import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getAllExhibitions } from "@/lib/services/exhibition.service";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import Exhibition from "@/lib/classes/exhibition";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("exhibitionsTitle") || "Exhibitions - Qasyoun Private University",
  };
}

export default async function ExhibitionsListPage({ params }: Props) {
  const { locale } = await params;
  const exhibitionsItems = await getAllExhibitions(locale);
  const t = await getTranslations({ locale, namespace: "ExhibitionsBanner" });
  const tNav = await getTranslations({ locale, namespace: "Nav" });

  return (
    <main>
      <BreadcrumbTwo
        title={tNav("exhibitions")}
        subtitle={tNav("exhibitions")}
      />

      <section className="tp-news-list-area pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="tp-news-list-wrapper">
                {exhibitionsItems.length > 0 ? (
                  exhibitionsItems.map((exhibition) => (
                    <ExhibitionItem key={exhibition.id} exhibition={exhibition} readMoreLabel={t("readMore")} locale={locale} />
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

function ExhibitionItem({ exhibition, readMoreLabel, locale }: { exhibition: Exhibition, readMoreLabel: string, locale: string }) {
  const date = exhibition.date ? new Date(exhibition.date) : new Date();
  const year = date.getFullYear();
  const day = date.getDate().toString().padStart(2, '0');
  const month = date.toLocaleString(locale === 'ar' ? 'ar-EG' : 'en-US', { month: 'short' }).toUpperCase();

  return (
    <div className="tp-news-list-item d-flex align-items-center mb-40 p-relative" style={{ background: '#f8f9fa', borderRadius: '15px', overflow: 'hidden', padding: '20px' }}>
      <div className="tp-news-list-date-box flex-shrink-0 mr-30 text-center" style={{ minWidth: '80px' }}>
        <div style={{ fontSize: '14px', color: '#6c757d' }}>{year}</div>
        <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#42023e' }}>{day}</div>
        <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#6c757d' }}>{month}</div>
      </div>

      <div className="tp-news-list-content flex-grow-1 min-w-0 mr-30">
        <h3 className="tp-news-list-title mb-10" style={{ fontSize: '20px' }}>
          <Link href={exhibition.href || "#"}>{exhibition.title}</Link>
        </h3>
        <p className="tp-news-list-excerpt mb-20 text-truncate-2" style={{ color: '#6c757d', fontSize: '15px' }}>
          {/* Strip HTML if description is rich text */}
          {exhibition.description ? exhibition.description.replace(/<[^>]*>?/gm, '').slice(0, 150) + '...' : ''}
        </p>
        <div className="tp-news-list-btn">
          <Link href={exhibition.href || "#"} className="tp-btn-inner" style={{ background: '#42023e', color: '#fff', padding: '8px 20px', borderRadius: '5px', fontSize: '14px', display: 'inline-block' }}>
            {readMoreLabel}
          </Link>
        </div>
      </div>

      {exhibition.imageUrl && (
        <div className="tp-news-list-thumb flex-shrink-0" style={{ width: '200px', height: '150px', position: 'relative' }}>
          <Link href={exhibition.href || "#"}>
            <Image
              src={exhibition.imageUrl}
              alt={exhibition.title || ""}
              fill
              style={{ objectFit: 'cover', borderRadius: '10px' }}
              unoptimized
            />
          </Link>
        </div>
      )}
    </div>
  );
}
