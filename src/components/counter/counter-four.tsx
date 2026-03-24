import CounterItem from "./counter-item";

const counterData = [
  { end: 10, label: "Students", suffix: "k", duration: 1 },
  { end: 300, label: "Professors", duration: 1 },
  { end: 48, label: "Programs", duration: 1 },
  { end: 2, label: "Research", suffix: "k", duration: 1 },
];

export default function CounterFour() {
  return (
    <section className="counter-area grey-bg pb-90">
      <div className="container">
        <div
          className="tp-counter-bg wow fadeInUp"
          data-wow-delay=".3s"
          style={{ backgroundImage: "url(/assets/img/bg/counter-bg-2.jpg)" }}
        >
          <div className="row">
            {counterData.map((counter, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="tp-counter-item text-center">
                  <h3 className="tp-counter-count mb-10">
                    <CounterItem min={0} max={counter.end} />
                    {counter.suffix && counter.suffix}
                  </h3>
                  <p>{counter.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
