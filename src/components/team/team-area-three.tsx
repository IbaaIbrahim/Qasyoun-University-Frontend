"use client";

import { useState } from "react";
import Image from "next/image";
import type { TeacherMemberCard } from "@/lib/classes/teacher";
import { Link } from "@/i18n/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import type { SwiperOptions } from "swiper/types";
import { useLocale } from "next-intl";
import { NextArrow, PrevArrow, RightArrow } from "../svg";

type Props = {
  members: TeacherMemberCard[];
  facultySlug: string;
};

const baseSliderOptions: Omit<SwiperOptions, "loop"> = {
  slidesPerView: 4,
  spaceBetween: 24,
  breakpoints: {
    "1200": {
      slidesPerView: 4,
    },
    "992": {
      slidesPerView: 3,
    },
    "768": {
      slidesPerView: 2,
    },
    "576": {
      slidesPerView: 2,
    },
    "0": {
      slidesPerView: 1,
    },
  },
};

export default function TeamAreaThree({ members, facultySlug }: Props) {
  const locale = useLocale();
  const isAr = locale === "ar";

  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);

  if (members.length === 0) return null;

  const sliderOptions: SwiperOptions = {
    ...baseSliderOptions,
    loop: members.length > 4,
    navigation: {
      prevEl,
      nextEl,
    },
    pagination: {
      el: ".qpu-staff-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
  };

  return (
    <section id="team" className="qpu-staff-section grey-bg py-5 p-relative">
      <div className="container">
        <div className="row align-items-center mb-4">
          <div className="col-md-8 col-12">
            <div className="tp-section-wrapper">
              <span className="tp-section-subtitle text-uppercase fw-bold mb-1 d-block" style={{ color: "#42023e" }}>
                {isAr ? "الكادر الأكاديمي" : "Academic Staff"}
              </span>
              <h3 className="tp-section-title font-bold h2 mb-0">
                {isAr ? "أعضاء الهيئة التدريسية" : "Faculty Staff & Leadership"}
              </h3>
            </div>
          </div>
          {members.length > 4 ? (
            <div className="col-md-4 col-12 d-none d-md-flex justify-content-end gap-2">
              <button
                ref={setPrevEl}
                type="button"
                className="btn rounded-circle d-flex align-items-center justify-content-center p-0"
                style={{ width: 42, height: 42, color: "#42023e", borderColor: "#42023e", backgroundColor: "transparent" }}
                aria-label="Previous"
              >
                <PrevArrow />
              </button>
              <button
                ref={setNextEl}
                type="button"
                className="btn rounded-circle d-flex align-items-center justify-content-center p-0"
                style={{ width: 42, height: 42, color: "#42023e", borderColor: "#42023e", backgroundColor: "transparent" }}
                aria-label="Next"
              >
                <NextArrow />
              </button>
            </div>
          ) : null}
        </div>

        <div className="row">
          <div className="col-12">
            <Swiper
              {...sliderOptions}
              key={locale}
              dir={isAr ? "rtl" : "ltr"}
              modules={[Autoplay, Navigation, Pagination]}
              className="swiper qpu-staff-swiper py-2"
            >
              {members.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="qpu-staff-card card h-100 border-0 rounded-4 shadow-sm overflow-hidden bg-white d-flex flex-column transition-all">
                    {/* Image Header */}
                    <div
                      className="qpu-staff-thumb p-relative text-center bg-light overflow-hidden d-flex align-items-center justify-content-center"
                      style={{ height: 260, position: "relative" }}
                    >
                      <Image
                        src={item.imageSrc}
                        alt={item.name}
                        width={280}
                        height={260}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          objectPosition: "center",
                          transition: "transform 0.4s ease",
                        }}
                        className="qpu-staff-img"
                        unoptimized
                      />
                    </div>

                    {/* Content Body */}
                    <div className="card-body p-4 text-center d-flex flex-column flex-grow-1 justify-content-between">
                      <div>
                        <h4 className="card-title h5 font-bold mb-2 text-dark">
                          <Link
                            href={`/faculties/${facultySlug}/staff/${item.id}`}
                            className="text-decoration-none text-reset hover-primary"
                          >
                            {item.name}
                          </Link>
                        </h4>
                        {item.title ? (
                          <span
                            className="badge rounded-pill px-3 py-2 font-normal mb-3 d-inline-block text-wrap"
                            style={{
                              fontSize: "0.85rem",
                              lineHeight: 1.4,
                              backgroundColor: "rgba(66, 2, 62, 0.08)",
                              color: "#42023e",
                              border: "1px solid rgba(66, 2, 62, 0.2)",
                            }}
                          >
                            {item.title}
                          </span>
                        ) : null}
                      </div>

                      <div className="pt-2 mt-auto border-top border-light">
                        <Link
                          href={`/faculties/${facultySlug}/staff/${item.id}`}
                          className="btn btn-sm btn-link text-decoration-none fw-semibold p-0 d-inline-flex align-items-center gap-1"
                          style={{ color: "#42023e" }}
                        >
                          <span>{isAr ? "عرض السيرة الذاتية" : "View Profile"}</span>
                          <RightArrow />
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="col-12 mt-3">
            <div className="qpu-staff-pagination text-center"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

