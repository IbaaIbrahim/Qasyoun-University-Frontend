import CounterItem from "./counter-item";

const counterData = [
  {
    endValue: 10,
    label: "Students Enrolled",
    suffix: "k",
  },
  {
    endValue: 3,
    label: "Enrollment Forms",
    suffix: "k",
  },
  {
    endValue: 240,
    label: "Online Instructors",
    suffix: "",
    duration: 1,
  },
  {
    endValue: 110,
    label: "Countries",
    suffix: "",
  },
];

export default function CounterSix() {
  return (
    <section
      className="tp-instructor-counter-area p-relative tp-instructor-bg fix"
      data-background="assets/img/instructor/instructor-bg.jpg"
      style={{
        backgroundImage: "url(/assets/img/instructor/instructor-bg.jpg)",
      }}
    >
      <div className="container">
        <div className="row">
          {counterData.map((item, index) => (
            <div key={index} className="col-lg-3 col-sm-6">
              <div className="tp-instructor-counter-item text-center">
                <h3 className="tp-counter-count mb-10">
                  <CounterItem min={0} max={item.endValue} />
                  {item.suffix}
                </h3>
                <p>{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
