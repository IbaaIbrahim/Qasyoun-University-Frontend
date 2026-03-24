import Image from "next/image";
import { Location } from "../svg";
import shape_1 from "@/assets/img/campus/campuses-shape-1.jpg";
import shape_2 from "@/assets/img/campus/campuses-shape-2.jpg";
import Link from "next/link";

// nav items
const navItems = [
  {
    id: "home-tab",
    target: "#home",
    label: "Gorki Campus",
    ariaControls: "home",
    selected: true,
  },
  {
    id: "profile-tab",
    target: "#profile",
    label: "Skolkovo Campus",
    ariaControls: "profile",
    selected: false,
  },
  {
    id: "contact-tab",
    target: "#contact",
    label: "Saint Petersburg Campus",
    ariaControls: "contact",
    selected: false,
  },
  {
    id: "Moscow-tab",
    target: "#Moscow",
    label: "Moscow Campus",
    ariaControls: "Moscow",
    selected: false,
  },
  {
    id: "Campus-tab",
    target: "#Campus",
    label: "Tashkent Campus",
    ariaControls: "Campus",
    selected: false,
  },
];
// tab content data
const tabContentData = [
  {
    id: "home",
    label: "home-tab",
    imgSrc: "/assets/img/campus/campuses-thumb.jpg",
    location: "197345, Russia, Saint-Petersburg, Mebelnaya, 11A",
    isActive: true,
  },
  {
    id: "profile",
    label: "profile-tab",
    imgSrc: "/assets/img/campus/campuses-thumb.jpg",
    location: "197345, Russia, Saint-Petersburg, Mebelnaya, 11A",
    isActive: false,
  },
  {
    id: "contact",
    label: "contact-tab",
    imgSrc: "/assets/img/campus/campuses-thumb.jpg",
    location: "197345, Russia, Saint-Petersburg, Mebelnaya, 11A",
    isActive: false,
  },
  {
    id: "Moscow",
    label: "Moscow-tab",
    imgSrc: "/assets/img/campus/campuses-thumb.jpg",
    location: "197345, Russia, Saint-Petersburg, Mebelnaya, 11A",
    isActive: false,
  },
  {
    id: "Campus",
    label: "Campus-tab",
    imgSrc: "/assets/img/campus/campuses-thumb.jpg",
    location: "197345, Russia, Saint-Petersburg, Mebelnaya, 11A",
    isActive: false,
  },
];

export default function AboutCampus() {
  return (
    <section className="tp-about-campus-area grey-bg p-relative pb-120">
      <div className="tp-about-campus-shape">
        <div className="shape-1">
          <Image src={shape_1} alt="shape" />
        </div>
        <div className="shape-2">
          <Image src={shape_2} alt="shape" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div
              className="tp-about-campus-tab wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="tp-about-campus-heading">
                <h4 className="tp-about-campus-title">Campuses</h4>
                <p>
                  Acadia University has five campuses, which are located in the
                  most exclusive areas of Moscow, Saint Petersburg and Tashkent.
                </p>
              </div>
              <ul
                className="nav nav-tabs justify-content-center"
                id="myTab"
                role="tablist"
              >
                {navItems.map((item) => (
                  <li className="nav-item" role="presentation" key={item.id}>
                    <button
                      className={`nav-link ${item.selected ? "active" : ""}`}
                      id={item.id}
                      data-bs-toggle="tab"
                      data-bs-target={item.target}
                      type="button"
                      role="tab"
                      aria-controls={item.ariaControls}
                      aria-selected={item.selected ? "true" : "false"}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-8">
            <div
              className="tab-content wow fadeInUp"
              data-wow-delay=".5s"
              id="myTabContent"
            >
              {tabContentData.map((tab) => (
                <div
                  key={tab.id}
                  className={`tab-pane fade ${
                    tab.isActive ? "show active" : ""
                  }`}
                  id={tab.id}
                  role="tabpanel"
                  aria-labelledby={tab.label}
                >
                  <div className="tp-about-campus-box p-relative">
                    <div className="tp-about-campus-thumb">
                      <Image
                        src={tab.imgSrc}
                        alt={tab.label}
                        width={718}
                        height={482}
                        style={{ height: "auto" }}
                      />
                    </div>
                    <div className="tp-about-campus-content d-flex justify-content-between">
                      <div className="tp-about-campus-location">
                        <span>
                          <Location />
                        </span>
                        <a href="#">{tab.location}</a>
                      </div>
                      <div className="tp-about-campus-btn">
                        <Link className="tp-btn" href="/university-campus">
                          Find out More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
