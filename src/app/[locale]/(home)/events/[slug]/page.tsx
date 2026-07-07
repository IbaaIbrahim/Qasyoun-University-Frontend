import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import Image from "next/image";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import { getEventBySlug } from "@/lib/services/event.service";
import { getBreadcrumbPageContent } from "@/lib/services/breadcrumb-page.service";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const tMeta = await getTranslations({ locale, namespace: "Metadata" });
  const event = await getEventBySlug(slug, locale);
  if (!event) {
    return { title: tMeta("eventNotFoundTitle") };
  }
  return {
    title: event.title || tMeta("eventDetailTitle"),
  };
}

export default async function EventDetailPage({ params }: Props) {
  const { slug, locale } = await params;
  const event = await getEventBySlug(slug, locale);

  if (!event) notFound();

  const t = await getTranslations({ locale, namespace: "EventDetail" });
  const tNav = await getTranslations({ locale, namespace: "Nav" });
  const breadcrumbContent = await getBreadcrumbPageContent(locale);

  const dateObj = event.date ? new Date(event.date) : null;
  const formattedDate = dateObj
    ? dateObj.toLocaleDateString(locale === "ar" ? "ar-EG" : "en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  const isRtl = locale === "ar";

  return (
    <main>
      <BreadcrumbTwo
        title={event.title || ""}
        subtitle={tNav("events")}
        bgImg={breadcrumbContent?.eventsBreadcrumbImage || undefined}
      />

      <section className="tp-blog-details-area pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="tp-blog-details-wrapper">
                <div className="tp-blog-details-content">

                  {/* Meta row: date, time, location */}
                  <div
                    className="tp-blog-meta mb-30"
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "20px",
                      color: "#6c757d",
                      fontSize: "15px",
                      alignItems: "center",
                    }}
                  >
                    {formattedDate && (
                      <span>
                        <i
                          className="fa-sharp fa-light fa-calendar-days"
                          style={{
                            color: "#42023e",
                            marginRight: isRtl ? "0" : "8px",
                            marginLeft: isRtl ? "8px" : "0",
                          }}
                        />
                        {formattedDate}
                      </span>
                    )}

                    {(event.startTime || event.endTime) && (
                      <span>
                        <i
                          className="fa-sharp fa-light fa-clock"
                          style={{
                            color: "#42023e",
                            marginRight: isRtl ? "0" : "8px",
                            marginLeft: isRtl ? "8px" : "0",
                          }}
                        />
                        {event.startTime}
                        {event.startTime && event.endTime && " – "}
                        {event.endTime}
                      </span>
                    )}

                    {event.location && (
                      <span>
                        <i
                          className="fa-sharp fa-light fa-location-dot"
                          style={{
                            color: "#42023e",
                            marginRight: isRtl ? "0" : "8px",
                            marginLeft: isRtl ? "8px" : "0",
                          }}
                        />
                        {event.location}
                      </span>
                    )}
                  </div>

                  {/* Hero image */}
                  {event.mainImage && (
                    <div className="tp-blog-details-thumb mb-50">
                      <Image
                        src={event.mainImage}
                        alt={event.title || ""}
                        width={1200}
                        height={600}
                        className="w-100"
                        style={{
                          borderRadius: "15px",
                          height: "auto",
                          maxHeight: "600px",
                          objectFit: "cover",
                        }}
                        unoptimized
                      />
                    </div>
                  )}

                  {/* Title */}
                  <h2 className="tp-blog-details-title mb-20" style={{ color: "#42023e" }}>
                    {event.title}
                  </h2>

                  {/* No additional description field exists in the current CMS section schema.
                      If a description key is added later, render it here. */}

                  {/* Empty state */}
                  {!event.title && !event.mainImage && !formattedDate && (
                    <p style={{ color: "#6c757d" }}>{t("empty")}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
