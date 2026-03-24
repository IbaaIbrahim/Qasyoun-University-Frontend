import React from "react";
import { UpArrow } from "../svg";
import Link from "next/link";

export default function HeroAreaFive() {
  return (
    <section
      className="tp-hero-area tp-hero-4-bg"
      style={{ backgroundImage: `url(/assets/img/hero/hero-4/hero-bg-1.jpg)` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <div className="tp-hero-4-wrapper">
              <span
                className="tp-hero-subtitle wow fadeInUp"
                data-wow-delay=".3s"
              >
                Welcome to Acadia School!
              </span>
              <h2
                className="tp-hero-4-title p-relative wow fadeInUp"
                data-wow-delay=".5s"
              >
                School of endless possibilities.
              </h2>
              <div
                className="tp-hero-4-info d-flex align-items-center flex-wrap wow fadeInUp"
                data-wow-delay=".7s"
              >
                <div className="tp-hero-4-btn">
                  <Link className="tp-btn-circle" href="/university-program">
                    <span>
                      <UpArrow />
                    </span>
                    Enroll Now
                  </Link>
                </div>
                <div className="tp-hero-4-info-list">
                  <ul>
                    <li>Global thinkers.</li>
                    <li>Engaged leaders.</li>
                    <li>
                      Investing in <br /> knowledge.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
