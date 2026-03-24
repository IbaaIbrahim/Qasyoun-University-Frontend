import CounterItem from "./counter-item";

const counterData = [
  {
    id: 1,
    count: 98,
    description: "Student Nationalities",
  },
  {
    id: 2,
    count: 72,
    description: "International Students",
    isPercentage: true,
  },
  {
    id: 3,
    count: 35,
    description: "Different Majors",
  },
];

export default function CounterFive() {
  return (
    <section className="tp-campus-counter-area grey-bg pb-120">
      <div
        className="tp-campus-counter-bg"
        style={{
          backgroundImage: "url(/assets/img/campus/campus/counter-bg.jpg)",
        }}
      >
        <div className="container">
          <div className="row">
            {counterData.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6">
                <div
                  className={`tp-campus-counter-item ${
                    item.id !== 3 ? "counter-border" : ""
                  } text-center`}
                >
                  <h3 className="tp-counter-count mb-10">
                    <CounterItem min={0} max={item.count} />
                    {item.isPercentage && "%"}
                  </h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
