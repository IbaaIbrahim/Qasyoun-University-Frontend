import Image from "next/image";
import instructor_thumb from '@/assets/img/instructor/instructor-thumb.png';

const tabItems = [
  {
    id: 'home',
    title: 'Become an Instructor',
    ariaControls: 'home',
    ariaSelected: true,
    content: {
      title: 'Become an Instructor',
      subtitle1: 'Plan your course',
      text1: `Neque convallis a cras semper auctor. Libero id faucibus nisl tincidunt egetnvallis a cras <br> semper auctonvallis a cras semper aucto. Neque convallis a cras semper auctor. <br> Liberoe convallis a cras semper atincidunt egetnval`,
      subtitle2: 'How we help you',
      text2: `Neque convallis a cras semper auctor. Libero id faucibus nisl tincidunt egetnvallis a cras semper auctonvallis a cras semper aucto. Neque convallis a cras semper auctor. Liberoe convallis a cras semper atincidunt egeeque convallis a cras semper auctor.`,
    },
    image:instructor_thumb
  },
  {
    id: 'profile',
    title: 'Instructor Rules',
    ariaControls: 'profile',
    ariaSelected: false,
    content: {
      title: 'Instructor Rules',
      subtitle1: 'Plan your course',
      text1: `Neque convallis a cras semper auctor. Libero id faucibus nisl tincidunt egetnvallis a cras <br> semper auctonvallis a cras semper aucto. Neque convallis a cras semper auctor. <br> Liberoe convallis a cras semper atincidunt egetnval`,
      subtitle2: 'How we help you',
      text2: `Neque convallis a cras semper auctor. Libero id faucibus nisl tincidunt egetnvallis a cras semper auctonvallis a cras semper aucto. Neque convallis a cras semper auctor. Liberoe convallis a cras semper atincidunt egeeque convallis a cras semper auctor.`,
    },
    image:instructor_thumb
  },
  {
    id: 'contact',
    title: 'Start with Courses',
    ariaControls: 'contact',
    ariaSelected: false,
    content: {
      title: 'Start with Courses',
      subtitle1: 'Plan your course',
      text1: `Neque convallis a cras semper auctor. Libero id faucibus nisl tincidunt egetnvallis a cras <br> semper auctonvallis a cras semper aucto. Neque convallis a cras semper auctor. <br> Liberoe convallis a cras semper atincidunt egetnval`,
      subtitle2: 'How we help you',
      text2: `Neque convallis a cras semper auctor. Libero id faucibus nisl tincidunt egetnvallis a cras semper auctonvallis a cras semper aucto. Neque convallis a cras semper auctor. Liberoe convallis a cras semper atincidunt egeeque convallis a cras semper auctor.`,
    },
    image:instructor_thumb
  },
];

export default function BecomeInstructorArea() {
  return (
    <section className="tp-instructor-area tp-instructor-p pt-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tp-instructor-title-wrap text-center mb-40 wow fadeInUp" data-wow-delay=".3s">
              <h3 className="tp-instructor-main-title">
                How to <br /> Become an Instructor
              </h3>
            </div>
            <div className="tp-instructor-become-tab pb-80 wow fadeInUp" data-wow-delay=".5s">
              <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                {tabItems.map((tab) => (
                  <li className="nav-item" role="presentation" key={tab.id}>
                    <button
                      className={`nav-link ${tab.ariaSelected ? 'active' : ''}`}
                      id={`${tab.id}-tab`}
                      data-bs-toggle="tab"
                      data-bs-target={`#${tab.id}`}
                      type="button"
                      role="tab"
                      aria-controls={tab.ariaControls}
                      aria-selected={tab.ariaSelected}
                    >
                      {tab.title}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="tab-content" id="myTabContent">
                {tabItems.map((tab) => (
                  <div
                    className={`tab-pane fade ${tab.ariaSelected ? 'show active' : ''}`}
                    id={tab.id}
                    role="tabpanel"
                    aria-labelledby={`${tab.id}-tab`}
                    key={tab.id}
                  >
                    <div className="row">
                      <div className="col-lg-7">
                        <div className="tp-instructor-become-wrap">
                          <h4 className="tp-instructor-become-title">{tab.content.title}</h4>
                          <span className="tp-instructor-become-subtitle">{tab.content.subtitle1}</span>
                          <p dangerouslySetInnerHTML={{ __html: tab.content.text1 }}></p>
                          <span className="tp-instructor-become-subtitle">{tab.content.subtitle2}</span>
                          <p>{tab.content.text2}</p>
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div className="tp-instructor-become-thumb text-start text-xl-end">
                          <Image src={tab.image} alt={tab.title} style={{height:'auto'}} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
