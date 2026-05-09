"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Pagination } from "swiper/modules";
import type { SwiperOptions } from "swiper/types";
import { type FacultyDto, facultyDetailPath } from "@/lib/classes/faculty";

const baseSliderOptions: Omit<SwiperOptions, "loop"> = {
  slidesPerView: 3,
  spaceBetween: 30,
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
  const t = useTranslations("FacultyCard");
  if (faculties.length === 0) {
    return (
      <p className="text-center text-muted py-5">
        No faculties are available yet.
      </p>
    );
  }

  const slides = faculties;
  const slider_options: SwiperOptions = {
    ...baseSliderOptions,
    loop: slides.length > 3,
  };

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
                  src={item.picture?.url ? (item.picture.url.toLowerCase().startsWith("http") ? item.picture.url : `https://api.v2202503187605326384.powersrv.de${item.picture.url}`) : "/assets/img/program/program-thumb-1.jpg"}
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
                <p />
              </div>
            </div>
            <div className="tp-program-btn">
              <Link href={href}>{t("learnMore")}</Link>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
