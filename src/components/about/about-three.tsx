'use client';
import Image from "next/image";
import { useState } from "react";
import Slider from "react-slick";
import star_img from "@/assets/img/our-mission/star.png";
import shape from "@/assets/img/our-mission/thumb-2-shape.jpg";
import Timeline from "@/lib/classes/faculty/timeline";

// nav options
const slider_nav_options = {
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  centerMode: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
};
// main slider options
const slider_options = {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
};

export default function AboutThree({ timelines }: { timelines: Timeline[] }) {
  const [slider1, setSlider1] = useState<Slider | null>(null);
  const [slider2, setSlider2] = useState<Slider | null>(null);

  if (!timelines || timelines.length === 0) return null;

  return (
    <section className="tp-about-year-area tp-about-year-bg p-relative pt-200 pb-95">
      <div className="tp-about-year-shape">
        <div className="shape-1">
          <Image src={star_img} alt="star" />
        </div>
        <div className="shape-2">
          <Image src={shape} alt="shape" />
        </div>
      </div>
      <div className="tp-about-year-plr tp-about-year-nav">
        <Slider
          {...slider_nav_options}
          asNavFor={slider2 as Slider}
          ref={(slider) => setSlider1(slider)}
          className="slider slider-nav"
        >
          {timelines.map((item) => (
            <div key={item.id}>
              <h3 className="tp-about-year-nav-title">{item.date?.split('-')[0]}</h3>
            </div>
          ))}
        </Slider>
      </div>
      <div className="tp-about-year-box">
        <div className="container">
          <div className="row align-items-center">
            <Slider
              {...slider_options}
              asNavFor={slider1 as Slider}
              ref={(slider) => setSlider2(slider)}
              className="slider slider-for"
            >
              {timelines.map((item) => (
                <div key={item.id} className="tp-about-year-inner">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="tp-about-year-thumb">
                        {item.image && (
                          <Image src={item.image} alt="year-img" width={408} height={300} unoptimized />
                        )}
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="tp-about-year-content">
                        <h4 className="tp-about-year-content-title" >{item.title}</h4>
                        <div
                          className="tp-about-year-content-title"
                          dangerouslySetInnerHTML={{ __html: item.description ?? "" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
