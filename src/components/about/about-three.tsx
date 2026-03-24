'use client';
import Image from "next/image";
import { useState } from "react";
import Slider from "react-slick";
import star_img from "@/assets/img/our-mission/star.png";
import shape from "@/assets/img/our-mission/thumb-2-shape.jpg";

// years
const about_years = [1996, 2005, 2012, 2000, 2023];

// slider data 
const slider_data = [
  {
    id: 1,
    image: "/assets/img/our-mission/thumb-2.jpg",
    title: "15 New <br/> Courses Added",
    description:
      "Etiam quis sapien in orci feugiat suscipit quis eget risus. Morbi in dapibus magna, et congue tortor. Students loved the system, but the teachers struggled to manage the paperwork and manual tracking.",
  },
  {
    id: 2,
    image: "/assets/img/our-mission/thumb-3.jpg",
    title: "8 New <br/> Courses Added",
    description:
      "Etiam quis sapien in orci feugiat suscipit quis eget risus. Morbi in dapibus magna, et congue tortor. Students loved the system, but the teachers struggled to manage the paperwork and manual tracking.",
  },
  {
    id: 3,
    image: "/assets/img/our-mission/thumb-4.jpg",
    title: "10 New <br/> Courses Added",
    description:
      "Etiam quis sapien in orci feugiat suscipit quis eget risus. Morbi in dapibus magna, et congue tortor. Students loved the system, but the teachers struggled to manage the paperwork and manual tracking.",
  },
  {
    id: 4,
    image: "/assets/img/our-mission/thumb-3.jpg",
    title: "8 New <br/> Courses Added",
    description:
      "Etiam quis sapien in orci feugiat suscipit quis eget risus. Morbi in dapibus magna, et congue tortor. Students loved the system, but the teachers struggled to manage the paperwork and manual tracking.",
  },
  {
    id: 5,
    image: "/assets/img/our-mission/thumb-2.jpg",
    title: "15 New <br/> Courses Added",
    description:
      "Etiam quis sapien in orci feugiat suscipit quis eget risus. Morbi in dapibus magna, et congue tortor. Students loved the system, but the teachers struggled to manage the paperwork and manual tracking.",
  },
];

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

export default function AboutThree() {
  const [slider1, setSlider1] = useState<Slider | null>(null);
  const [slider2, setSlider2] = useState<Slider | null>(null);
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
          {about_years.map((item) => (
            <div key={item}>
              <h3 className="tp-about-year-nav-title">{item}</h3>
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
              {slider_data.map((item) => (
                <div key={item.id} className="tp-about-year-inner">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="tp-about-year-thumb">
                        <Image src={item.image} alt="year-img" width={408} height={300} />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="tp-about-year-content">
                        <h4
                          className="tp-about-year-content-title"
                          dangerouslySetInnerHTML={{ __html: item.title }}
                        ></h4>
                        <p>{item.description}</p>
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
