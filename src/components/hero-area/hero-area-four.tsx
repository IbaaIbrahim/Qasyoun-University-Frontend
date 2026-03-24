'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Slider from "react-slick";
import shape_line from '@/assets/img/shape/bottom-line/slider-5-line-1.svg';


const testi_slider_opt = {
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
   fade: true,
}

const testi_nav_opt = {
   slidesToShow: 3,
   slidesToScroll: 1,
   dots: false,
   centerMode: false,
   focusOnSelect: true,
   centerPadding: "5px",
   arrows: false,
   responsive: [
      {
         breakpoint: 500,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerPadding: '15px',
         },
      },
   ],
}


const slider_data = [
   {
      id: 1,
      bg_img: '/assets/img/slider/slider-5-bg-1.jpg',
      title: {
         text_1: 'Unlock Your <br/> full potential',
         text_2: 'with',
         text_3: 'Gym Coaching'
      }
   },
   {
      id: 2,
      bg_img: '/assets/img/slider/slider-5-bg-2.jpg',
      title: {
         text_1: 'Everything For Office &',
         text_2: 'School',
         text_3: 'Supplies'
      }
   },
   {
      id: 3,
      bg_img: '/assets/img/slider/slider-5-bg-3.jpg',
      title: {
         text_1: 'Build Education Website',
         text_2: 'Using',
         text_3: 'Acadia'
      }
   },
   {
      id: 4,
      bg_img: '/assets/img/slider/slider-5-bg-2.jpg',
      title: {
         text_1: 'Everything For Office &',
         text_2: 'School',
         text_3: 'Supplies'
      }
   }
];

const nav_data = [
   {
      id: 1,
      img: '/assets/img/slider/slider-5-sm-1.jpg',
   },
   {
      id: 2,
      img: '/assets/img/slider/slider-5-sm-2.jpg',
   },
   {
      id: 3,
      img: '/assets/img/slider/slider-5-sm-3.jpg',
   },
   {
      id: 4,
      img: '/assets/img/slider/slider-5-sm-2.jpg',
   }
]

export default function HeroAreaFour() {
   const [slider1, setSlider1] = useState<Slider | null>(null);
   const [slider2, setSlider2] = useState<Slider | null>(null);
   return (
      <section className="slider-area tp-slider-5-wrap">
         <Slider
            {...testi_slider_opt}
            asNavFor={slider2 as Slider}
            ref={(slider) => setSlider1(slider)}
            className="slider tp-slider-5-active">
            {slider_data.map((item) => (
               <div key={item.id}>
                  <div className="tp-slider-5-bg" style={{backgroundImage:`url(${item.bg_img})`}}>
                     <div className="container">
                        <div className="row">
                           <div className="col-lg-7">
                              <div className="tp-slider-5-content">
                                 <span>Welcome to Acadia</span>
                                 <h2 className="tp-slider-5-title">
                                    <i dangerouslySetInnerHTML={{__html: item.title.text_1}}/> {" "}
                                    <span>
                                       {item.title.text_2}
                                       <Image src={shape_line} alt="slider-line" />
                                    </span>
                                    {item.title.text_3}
                                 </h2>
                                 <div className="tp-slider-5-btn">
                                    <Link className="tp-btn-white" href="/contact">
                                       JOIN OUR GYM
                                    </Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            ))}
         </Slider>


         <Slider
            {...testi_nav_opt}
            asNavFor={slider1 as Slider}
            ref={(slider) => setSlider2(slider)} className="slider tp-slider-5-arrow">
            {nav_data.map((item) => (
               <div key={item.id} className="tp-slider-5-next">
                  <div className="tp-slider-5-thumb-sm">
                     <Image src={item.img} alt="nav-img" width={200} height={130} />
                     <span>{item.id <= 9 ? `0${item.id}` : item.id}</span>
                     <div className="tp-slider-5-next-hover"></div>
                  </div>
               </div>
            ))}
         </Slider>

      </section>
   )
}
