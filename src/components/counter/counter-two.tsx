import Image from "next/image";
import icon_1 from "@/assets/img/icon/counter/counter-4-icon-1.svg";
import icon_2 from "@/assets/img/icon/counter/counter-4-icon-2.svg";
import icon_3 from "@/assets/img/icon/counter/counter-4-icon-3.svg";
import icon_4 from "@/assets/img/icon/counter/counter-4-icon-4.svg";
import CounterItem from "./counter-item";

const counterData = [
  {
    id: 1,
    icon: icon_1,
    countEnd: 10,
    suffix: "k",
    title: "Students enrolled",
  },
  {
    id: 2,
    icon: icon_2,
    countEnd: 7,
    suffix: ":2",
    title: "Student to faculty ratio",
  },
  {
    id: 3,
    icon: icon_3,
    countEnd: 34,
    suffix: "",
    title: "Athletic teams",
  },
  {
    id: 4,
    icon: icon_4,
    countEnd: 41,
    suffix: "%",
    title: "Rate of growth since 2020",
  },
];

export default function CounterTwo() {
  return (
    <section className="counter-area pb-120 grey-bg">
      <div className="container">
        <div className="tp-counter-4-bg wow fadeInUp" data-wow-delay=".3s">
          <div className="row">
            {counterData.map((counter) => (
              <div key={counter.id} className="col-lg-3 col-sm-6">
                <div className="tp-counter-4-item text-center">
                  <div className="tp-counter-4-icon">
                    <span>
                      <Image src={counter.icon} alt="icon" />
                    </span>
                  </div>
                  <div className="tp-counter-4-content">
                    <h3 className="tp-counter-4-count mb-10">
                      <CounterItem min={0} max={counter.countEnd} />
                      {counter.suffix}
                    </h3>
                    <div className="tp-counter-4-border"></div>
                    <p>{counter.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
