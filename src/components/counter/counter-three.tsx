import CounterItem from "./counter-item";

const counterData = [
  {
    id: 1,
    endValue: 126,
    title: "Degree & diploma programs <br/> offered",
  },
  {
    id: 2,
    endValue: 82,
    title: "Of undergraduate students <br/> receive financial aid",
    isPercentage: true,
  },
  {
    id: 3,
    endValue: 74,
    title: "Of graduates had two or <br/> more internships as students",
    isPercentage: true,
  },
];

export default function CounterThree() {
  return (
    <section id="down" className="tp-admission-counter-area grey-bg pb-120">
      <div className="container">
        <div className="tp-admission-counter-box wow fadeInUp" data-wow-delay=".3s">
          <div className="row">


            {counterData.map((counter, index) => (
              <div
                key={counter.id}
                className={`col-lg-4 col-md-6 ${counter.id > 1 ? 'pl-' + (counter.id === 2 ? 50 : 80) : ''}`}
              >
                <div className="tp-admission-counter-item">
                  <h3 className="tp-admission-counter-title">
                    <CounterItem min={0} max={counter.endValue} />
                    {counter.isPercentage && '%'}
                  </h3>
                  <p
                    className={`${index !== counterData.length - 1 ? 'after' : ''}`}
                    dangerouslySetInnerHTML={{ __html: counter.title }}
                  ></p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}
