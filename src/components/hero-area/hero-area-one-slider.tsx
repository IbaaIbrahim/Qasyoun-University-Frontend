"use client";

import { EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperOptions } from "swiper/types";
import type { HomeHeroSlide } from "@/lib/services/home-hero.service";
import { NextArrow, PrevArrow } from "../svg";

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
  slides: HomeHeroSlide[];
};

export default function HeroAreaOneSlider({ slides }: Props) {
  const swiperOptions: SwiperOptions = {
    ...sliderOptions,
    loop: slides.length > 1,
  };

  console.log("slides", slides);

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
                    <div className="tp-hero-wrapper" />
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
