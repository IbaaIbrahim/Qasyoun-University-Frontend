import Image from "next/image";
import icon_1 from '@/assets/img/icon/funfact/funfact-2-icon-1.svg';
import icon_2 from '@/assets/img/icon/funfact/funfact-2-icon-2.svg';
import icon_3 from '@/assets/img/icon/funfact/funfact-2-icon-3.svg';
import icon_4 from '@/assets/img/icon/funfact/funfact-2-icon-4.svg';

// Fun fact data array
const funFacts = [
  {
    id: 1,
    icon: icon_1,
    title: "Flexible classes",
    description: "You pick schedule.",
  },
  {
    id: 2,
    icon: icon_2,
    title: "Offline mode",
    description: "Download classes.",
  },
  {
    id: 3,
    icon: icon_3,
    title: "10k online courses",
    description: "Explore fresh topics.",
  },
  {
    id: 4,
    icon: icon_4,
    title: "Educator help",
    description: "Always get answers.",
  },
];

export default function MissionFeatureArea() {
  return (
    <section className="tp-mission-feature-area grey-bg pb-120">
      <div className="tp-mission-feature-bg" style={{ backgroundImage: "url(/assets/img/campus/campus/counter-bg.jpg)" }}>
        <div className="container">
          <div className="row">
            {funFacts.map((fact, index) => (
              <div key={fact.id} className="col-lg-3 col-sm-6">
                <div className={`tp-funfact-item ${index === 1 ? 'tp-funfact-item-2' : ''} ${index === 2 ? 'tp-funfact-item-3' : ''} d-flex align-items-center ${index === 3 ? 'justify-content-lg-end' : ''}`}>
                  <div className="tp-funfact-icon">
                    <span>
                      <Image src={fact.icon} alt="icon" />
                    </span>
                  </div>
                  <div className="tp-funfact-content">
                    <h4 className="tp-funfact-title">{fact.title}</h4>
                    <span>{fact.description}</span>
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
