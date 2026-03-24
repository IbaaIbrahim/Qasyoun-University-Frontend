import Link from "next/link";
import { HomeSvg } from "@/components/svg";
import Timer from "@/components/timer";
import { IEventDT } from "@/types/event-d-t";

type IProps = {
  event:IEventDT
}

export default function EventBreadcrumb({event}:IProps) {
  return (
    <section
      className="tp-event-details-breadcrumb-bg pb-110 p-relative z-index-1 fix"
      data-background="assets/img/event/event/event-details-bg.jpg"
      style={{ backgroundImage: "url(/assets/img/event/event/event-details-bg.jpg)" }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12">
            <div className="tp-breadcrumb__list tp-event-details-breadcrumb-list pb-120">
              <span>
                <Link href="/">
                  <HomeSvg />
                </Link>
              </span>
              <span>Event</span>
              <span>{event.title}</span>
            </div>
            <div className="tp-event-details-breadcrumb-content">
              <span className="tp-event-details-breadcrumb-subtitle">
                Lectures
              </span>
              <h4 className="tp-event-details-breadcrumb-title">
                Global Education <br />
                Fall Meeting for Everyone.
              </h4>
              <div className="tp-event-details-countdown">
                <div className="tp-event-details-countdown-inner">
                  <Timer expiryTimestamp={new Date("april 30 2025 20:20:22")} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
