"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { useLocale } from "next-intl";
import { Pagination } from "swiper/modules";
import type { SwiperOptions } from "swiper/types";
import tag_svg from "@/assets/img/icon/program-tag-1.svg";
import { type FacultyDto, facultyDetailPath } from "@/lib/classes/faculty";

const slider_options: SwiperOptions = {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".tp-program-dot",
    clickable: true,
  },
  breakpoints: {
    "1200": { slidesPerView: 3 },
    "992": { slidesPerView: 3 },
    "768": { slidesPerView: 2 },
    "576": { slidesPerView: 1 },
    "0": { slidesPerView: 1 },
  },
};

type Props = {
  faculties: FacultyDto[];
};

export default function FacultySlider({ faculties }: Props) {
  const locale = useLocale();
  if (faculties.length === 0) {
    return (
      <p className="text-center text-muted py-5">
        No faculties are available yet.
      </p>
    );
  }

  const slides = faculties.slice(0, 12);

  return (
    <Swiper
      {...slider_options}
      modules={[Pagination]}
      className="swiper tp-program-active wow fadeInUp"
      data-wow-delay=".6s"
    >
      {slides.map((item) => {
        const href = facultyDetailPath(item.slug);
        const name = (locale === "ar" && item.name_AR) ? item.name_AR : item.name;
        return (
          <SwiperSlide
            key={item.id}
            className="tp-program-item grey-bg mb-50"
          >
            <div className="tp-program-thumb fix">
              <Link href={href}>
                <Image
                  src="/assets/img/program/program-thumb-1.jpg"
                  alt={name}
                  width={350}
                  height={198}
                  style={{ height: "auto" }}
                />
              </Link>
            </div>
            <div className="tp-program-content">
              <h3 className="tp-program-title">
                <Link href={href}>{name}</Link>
              </h3>
              <div className="tp-program-tag">
                <p>
                  {/* <span>
                    <Image src={tag_svg} alt="" />
                  </span>
                  Faculty */}
                </p>
              </div>
            </div>
            <div className="tp-program-btn">
              <Link href={href}>Learn more</Link>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
