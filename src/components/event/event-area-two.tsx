import Image from "next/image";
import { kids_event_data } from "@/data/event-data";
import location_svg from "@/assets/img/icon/location.svg";
import Link from "next/link";

export default function EventAreaTwo() {
  return (
    <section className="event-area pt-90 pb-70">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="tp-section-2 text-center mb-50">
              <h2 className="tp-section-2-title">Upcoming Event Schedule</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {kids_event_data.map((item, i) => (
            <div key={item.id} className="col-lg-4 col-md-6">
              <div
                className="tp-event-3-item mb-30 wow fadeInUp"
                data-wow-delay={`.${i + 1}s`}
              >
                <div className="tp-event-3-thumb">
                  <Link href={`/event-details/${item.id}`}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={322}
                      height={229}
                      style={{ height: "auto" }}
                    />
                  </Link>
                  <div className="tp-event-3-date">
                    <span>{item.date.day}</span>
                    <p>{item.date.month}</p>
                  </div>
                </div>
                <div className="tp-event-3-content">
                  <h3 className="tp-event-3-title">
                    <Link href={`/event-details/${item.id}`}>{item.title}</Link>
                  </h3>
                  <span>
                    <Image src={location_svg} alt="location" /> {item.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
