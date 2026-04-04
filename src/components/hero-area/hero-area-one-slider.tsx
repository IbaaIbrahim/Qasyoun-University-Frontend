"use client";

import { EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperOptions } from "swiper/types";
import { NextArrow, PrevArrow, RightArrow } from "../svg";
import Link from "next/link";
import Slider from "@/lib/classes/slider";

const sliderOptions: SwiperOptions = {
  slidesPerView: 1,
  effect: "fade",
  navigation: {
    nextEl: ".tp-hero-next",
    prevEl: ".tp-hero-prev",
  },
  autoplay: {
    delay: 3500,
  },
  pagination: {
    el: ".tp-program-dot",
    clickable: true,
  },
};

type Props = {
  slides: Slider[];
};

export default function HeroAreaOneSlider({ slides }: Props) {
  const swiperOptions: SwiperOptions = {
    ...sliderOptions,
    loop: slides.length > 1,
  };

  return (
    <section className="tp-hero-area p-relative">
      <Swiper
        {...swiperOptions}
        modules={[EffectFade, Navigation]}
        className="swiper tp-slider-active"
      >
        {slides.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="tp-hero-item">
              <div className="container">
                <div className="row">
                  <div className="col-xxl-9 col-lg-11">
                    <div className="tp-hero-wrapper">
                      <span className="tp-hero-subtitle">
                        {
                          item.subTitle ? item.subTitle : <span style={{ height: "15vh", display: "block" }}>&nbsp;</span>
                        }
                      </span>
                      <h2 className="tp-hero-title">
                        {
                          item.title ? item.title : <span style={{ height: "15vh", display: "block" }}>&nbsp;</span>
                        }
                      </h2>
                      <div className="tp-hero-btn">
                        {
                          item.btnText ? (
                            <Link className="tp-btn" href={item.btnLink || "/"}>
                              {item.btnText}
                              <span>
                                <RightArrow />
                              </span>
                            </Link>
                          ) : (
                            <span style={{ height: 50, display: "block" }}>&nbsp;</span>
                          )
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tp-hero-bg" style={{ backgroundImage: `url(${item.bgImg})` }} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {slides.length > 1 ? (
        <>
          <button
            type="button"
            className="tp-hero-prev tp-hero-nav-btn pointer"
            aria-label="Previous slide"
          >
            <span className="tp-hero-nav-btn-inner">
              <PrevArrow />
            </span>
          </button>
          <button
            type="button"
            className="tp-hero-next tp-hero-nav-btn pointer"
            aria-label="Next slide"
          >
            <span className="tp-hero-nav-btn-inner">
              <NextArrow />
            </span>
          </button>
        </>
      ) : null}
    </section>
  );
}
