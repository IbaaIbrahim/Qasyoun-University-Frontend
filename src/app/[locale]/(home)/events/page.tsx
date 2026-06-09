import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { readContentAsJsonByFilter } from "@/lib/services/content.service";
import { ReferenceTypes } from "@/lib/constants/content-sections";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import { Link } from "@/i18n/navigation";
import { RightArrowThree } from "@/components/svg";
import HoverImgItem from "@/components/event/hover-img-item";
import { getBreadcrumbPageContent } from "@/lib/services/breadcrumb-page.service";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("eventsTitle") || "Events - Qasyoun Private University",
  };
}

export default async function EventsListPage({ params }: Props) {
  const { locale } = await params;
  const tNav = await getTranslations({ locale, namespace: "Nav" });

  const meta = await readContentAsJsonByFilter({ referenceType: ReferenceTypes.home.value }, locale);
  const events = meta
    .filter((content) => content.section === ReferenceTypes.home.sections.upcoming_events.value)
    .map((content) => content.toEvent())
    .reverse();

  const breadcrumbContent = await getBreadcrumbPageContent(locale);

  return (
    <main>
      <BreadcrumbTwo
        title={tNav("events")}
        subtitle={tNav("events")}
        bgImg={breadcrumbContent?.eventsBreadcrumbImage || undefined}
      />

      <section className="event-area grey-bg pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="tp-event-wrap wow fadeInUp" data-wow-delay=".3s">
                {events.length > 0 ? (
                  events.map((item) => {
                    const dateObj = item.date ? new Date(item.date) : new Date();
                    const day = dateObj.getDate().toString().padStart(2, "0");
                    const month = dateObj.toLocaleString(locale === 'ar' ? 'ar-EG' : 'en-US', { month: "short" });
                    const year = dateObj.getFullYear();

                    return (
                      <div key={item.id} className="tp-event-item" style={{ background: '#fff', padding: '30px', borderRadius: '12px', marginBottom: '20px', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.03)' }}>
                        <div className="row align-items-center">
                          <div className="col-md-2">
                            <div className="tp-event-list">
                              <h4 className="tp-event-list-count" style={{ color: '#42023e' }}>{day}</h4>
                              <span style={{ fontWeight: '600', color: '#6c757d' }}>
                                {month}, {year}
                              </span>
                            </div>
                          </div>
                          <div className="col-md-9">
                            <div className="tp-event-content">
                              <h3 className="tp-event-title" style={{ fontSize: '22px' }}>
                                <HoverImgItem
                                  img={item.mainImage || ""}
                                  title={item.title || ""}
                                  href={`/events/${item.slug}`}
                                />
                              </h3>
                              <div className="tp-event-info" style={{ marginTop: '10px' }}>
                                <span style={{ marginRight: '20px' }}>
                                  <i className="fa-sharp fa-light fa-clock" style={{ color: '#42023e', marginRight: '5px' }}></i>
                                  {item.startTime} - {item.endTime}
                                </span>
                                <span>
                                  <i className="fa-sharp fa-light fa-location-dot" style={{ color: '#42023e', marginRight: '5px' }}></i>
                                  {item.location}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-1 text-md-end">
                            <div className="tp-event-arrow">
                              <Link href={`/events/${item.slug}`}>
                                <span style={{ background: 'rgba(66, 2, 62, 0.05)', color: '#42023e', width: '45px', height: '45px', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }}>
                                  <RightArrowThree />
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="text-center py-5">
                    <p style={{ color: '#6c757d', fontSize: '18px' }}>No events found.</p>
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
