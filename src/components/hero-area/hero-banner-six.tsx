"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import thumb_1 from "@/assets/img/shop/shop-thumb-1.png";
import thumb_2 from "@/assets/img/shop/shop-thumb-2.png";
import thumb_3 from "@/assets/img/shop/shop-thumb-3.png";
import { RightSmArrow } from "../svg";

const sliderData = [
  {
    id: 1,
    imgSrc: thumb_1,
    title: "Unleash your Imagination with Books",
    subtitle: "Sale Up To 25% Off",
  },
  {
    id: 2,
    imgSrc: thumb_2,
    title: "50% off hundreds of Books",
    subtitle: "Sale Up To 25% Off",
  },
  {
    id: 3,
    imgSrc: thumb_3,
    title: "Meet Your Next Favorite Book",
    subtitle: "Sale Up To 25% Off",
  },
];

const slider_option: SwiperOptions = {
  slidesPerView: 1,
  spaceBetween: 30,

  pagination: {
    el: ".tp-shop-banner-dot",
    clickable: true,
  },
};

export default function HeroBannerSix() {
  return (
    <section className="tp-shop-banner-ptb p-relative pt-110 pb-140">
      <div
        className="tp-shop-banner-bg"
        style={{ backgroundImage: `url(/assets/img/shop/shop-thumb-bg.png)` }}
      ></div>
      <div className="tp-shop-banner-space p-relative fix">
        <Swiper
          {...slider_option}
          modules={[Pagination]}
          className="tp-shop-banner-active"
        >
          {sliderData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="tp-shop-banner-thumb">
                      <Image
                        src={item.imgSrc}
                        alt="shop-banner-img"
                        style={{ height: "auto" }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="tp-shop-banner-content">
                      <span>{item.subtitle}</span>
                      <h3 className="tp-shop-banner-title">{item.title}</h3>
                      <div className="tp-shop-banner-btn">
                        <Link href="/shop-grid">
                          Shop Now{" "}
                          <span>
                            <RightSmArrow/>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="tp-shop-banner-dot"></div>
    </section>
  );
}
