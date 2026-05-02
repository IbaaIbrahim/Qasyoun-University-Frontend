"use client";
import Image from "next/image";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";
import { NextArrow, PrevArrow } from "../svg";

import Review from "@/lib/classes/home/review";

const swiper_options: SwiperOptions = {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".tp-testimonial-next",
    prevEl: ".tp-testimonial-prev",
  },
  autoplay: {
    delay: 2000,
  },
};

interface Props {
  reviews: Review[];
}

export default function TestimonialSliderOne({ reviews }: Props) {
  return (
    <>
      <Swiper
        {...swiper_options}
        modules={[Navigation]}
        className="swiper tp-testimonial-active"
      >
        {reviews.map((item) => (
          <SwiperSlide
            key={item.id}
            className="tp-testimonial-item"
          >
            <div className="tp-testimonial-avatar">
              <Image
                src={item.image || "/assets/img/testimonial/testimonial-avatar.png"}
                alt="testimonial-avatar"
                width={60}
                height={60}
              />
            </div>
            <div className="tp-testimonial-content">
              <div dangerouslySetInnerHTML={{ __html: item.text || "" }} />
            </div>
            <div className="tp-testimonial-avatar-info">
              <h4 className="tp-testimonial-avatar-title">{item.author}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="tp-testimonial-arrow text-md-end">
        <div className="tp-testimonial-prev pointer">
          <span>
            <PrevArrow />
          </span>
        </div>
        <div className="tp-testimonial-next pointer">
          <span>
            <NextArrow />
          </span>
        </div>
      </div>
    </>
  );
}
