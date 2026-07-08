import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getAllExhibitions } from "@/lib/services/exhibition.service";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import Exhibition from "@/lib/classes/exhibition";
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
    title: t("exhibitionsTitle") || "Exhibitions - Qasyoun Private University",
  };
}

export default async function ExhibitionsListPage({ params }: Props) {
  const { locale } = await params;
  const exhibitionsItems = await getAllExhibitions(locale);
  const t = await getTranslations({ locale, namespace: "ExhibitionsBanner" });
  const tNav = await getTranslations({ locale, namespace: "Nav" });
  const breadcrumbContent = await getBreadcrumbPageContent(locale);

  return (
    <main>
      <BreadcrumbTwo
        title={tNav("exhibitions")}
        subtitle={tNav("exhibitions")}
        bgImg={breadcrumbContent?.exhibitionsAndConferencesBreadcrumbImage}
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
    <div className={`tp-news-list-item${exhibition.imageUrl ? " has-image" : " no-image"}`}>
      <div className="tp-news-list-date-box">
        <span className="year">{year}</span>
        <span className="day">{day}</span>
        <span className="month">{month}</span>
      </div>

      <div className="tp-news-list-content">
        <h3 className="tp-news-list-title">
          <Link href={exhibition.href || "#"}>{exhibition.title}</Link>
        </h3>
        <p className="tp-news-list-excerpt text-truncate-2">
          {/* Strip HTML if description is rich text */}
          {exhibition.description ? exhibition.description.replace(/<[^>]*>?/gm, '').slice(0, 150) + '...' : ''}
        </p>
        <div className="tp-news-list-btn">
          <Link href={exhibition.href || "#"} className="tp-btn-inner">
            {readMoreLabel}
          </Link>
        </div>
      </div>

      {exhibition.imageUrl && (
        <div className="tp-news-list-thumb">
          <Link href={exhibition.href || "#"}>
            <Image
              src={exhibition.imageUrl}
              alt={exhibition.title || ""}
              fill
              unoptimized
            />
          </Link>
        </div>
      )}
    </div>
  );
}
