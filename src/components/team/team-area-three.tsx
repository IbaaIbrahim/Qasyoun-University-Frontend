"use client";
import Image from "next/image";
import shape from "@/assets/img/team/about-team/team-shape.png";
import type { TeacherMemberCard } from "@/lib/classes/teacher";
import { Link } from "@/i18n/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import type { SwiperOptions } from "swiper/types";

type Props = {
  members: TeacherMemberCard[];
  facultySlug: string;
};

const baseSliderOptions: Omit<SwiperOptions, "loop"> = {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".tp-team-dot",
    clickable: true,
  },
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
  if (members.length === 0) return null;

  const slider_options: SwiperOptions = {
    ...baseSliderOptions,
    loop: members.length > 4,
  };

  return (
    <section id="team" className="tp-about-team-area grey-bg p-relative pt-120 pb-90">
      <div className="tp-about-team-shape">
        <Image src={shape} alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Swiper
              {...slider_options}
              modules={[Pagination]}
              className="swiper tp-team-active wow fadeInUp"
              data-wow-delay=".3s"
            >
              {members.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="tp-about-team-item p-relative pb-30 h-100 mb-30">
                    <div className="tp-about-team-thumb h-100">
                      <Image
                        src={item.imageSrc}
                        alt={item.name}
                        width={282}
                        height={440}
                        style={{ height: "100%" }}
                        unoptimized
                      />
                    </div>
                    <div className="tp-about-team-content">
                      <h4 className="tp-about-team-title">
                        <Link href={`/faculties/${facultySlug}/staff/${item.id}`}>
                          {item.name}
                        </Link>
                      </h4>
                      {item.title ? <p>{item.title}</p> : null}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="col-12">
            <div className="tp-team-dot tp-program-dot text-center mt-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

