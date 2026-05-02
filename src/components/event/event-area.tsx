import Link from "next/link";
import Image from "next/image";
import { RightArrow, RightArrowThree } from "../svg";
import shape_line from "@/assets/img/unlerline/event-1-svg-1.svg";
import HoverImgItem from "./hover-img-item";
import IEvent from "@/lib/classes/home/event";
import { useTranslations, useLocale } from "next-intl";

export default function EventArea({ events }: { events: IEvent[] }) {
  const t = useTranslations("Events");
  const locale = useLocale();

  return (
    <section className="event-area grey-bg pt-85 pb-110">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-xl-5 col-md-8">
            <div
              className="tp-event-section mb-60 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="tp-section">
                <h3 className="tp-section-2-title">
                  {t("title")}{" "}
                  <span>
                    {t("accent")}{" "}
                    <Image
                      className="tp-underline-shape-3 wow bounceIn"
                      data-wow-duration="1.5s"
                      data-wow-delay=".4s"
                      src={shape_line}
                      alt="shape-line"
                    />
                  </span>
                </h3>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-md-4">
            <div className="tp-event-btn text-md-end mb-70">
              <Link className="tp-btn" href={`/${locale}/events`}>
                {t("seeMore")}
                <span>
                  <RightArrow />
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="tp-event-wrap wow fadeInUp" data-wow-delay=".3s">
          {events.map((item) => {
            // Safely parse date from IEvent (string)
            const dateObj = item.date ? new Date(item.date) : new Date();
            const day = dateObj.getDate().toString().padStart(2, "0");
            const month = dateObj.toLocaleString(locale, { month: "short" });
            const year = dateObj.getFullYear();

            return (
              <div key={item.id} className="tp-event-item">
                <div className="row align-items-center">
                  <div className="col-md-2">
                    <div className="tp-event-list">
                      <h4 className="tp-event-list-count">{day}</h4>
                      <span>
                        {month}, {year}
                      </span>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="tp-event-content">
                      <h3 className="tp-event-title">
                        <HoverImgItem
                          img={item.mainImage || ""}
                          title={item.title || ""}
                        />
                      </h3>
                      <div className="tp-event-info">
                        <span>
                          <i className="fa-sharp fa-light fa-clock"></i>
                          {item.startTime} - {item.endTime}
                        </span>
                        <span>
                          <i className="fa-sharp fa-light fa-location-dot"></i>
                          {item.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-1">
                    <div className="tp-event-arrow text-lg-end">
                      <Link href={`/${locale}/events/${item.slug}`}>
                        <span>
                          <RightArrowThree />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
