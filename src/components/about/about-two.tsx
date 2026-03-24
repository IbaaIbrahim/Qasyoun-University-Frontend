"use client"
import Image from "next/image";
import { VideoPlayerSvg } from "../svg";
import ab_img_1 from "@/assets/img/about/4/about-thumb-1.jpg";
import ab_img_2 from "@/assets/img/about/4/about-thumb-2.jpg";
import ab_img_3 from "@/assets/img/about/4/about-thumb-3.jpg";
import ab_img_4 from "@/assets/img/about/4/about-thumb-4.jpg";
import { useVideoModal } from "@/provider/VideoProvider";
import Link from "next/link";

const thumbs = [
   { id: 1, col_lg: 3, img: ab_img_1, delay: .5 },
   { id: 2, col_lg: 4, img: ab_img_2, delay: .7 },
   { id: 3, col_lg: 3, img: ab_img_3, delay: .9 },
   { id: 4, col_lg: 2, img: ab_img_4, delay: 1 },
]

type IProps = {
   spacing?: string;
};

export default function AboutTwo({ spacing = 'pt-115 pb-90' }: IProps) {
   const { playVideo } = useVideoModal();

   return (
      <section className={`about-area ${spacing} grey-bg`}>
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="tp-about-4-wrapper mb-75 wow fadeInUp" data-wow-delay=".3s">
                     <h2 className="tp-about-4-head">Our goal is to develop and meet the needs of each child so that he or she becomes a well-rounded tomorrow individual.</h2>
                     <div className="tp-about-4-btn wow fadeInUp" data-wow-delay=".5s">
                        <Link className="tp-btn-3" href="/university-about">Why Choose Acadia</Link>
                        <div className="tp-about-4-video">
                           <button className="popup-video" onClick={() => playVideo("LlCwHnp3kL4")}>
                              <span>
                                 <VideoPlayerSvg />
                              </span>
                           </button>
                           <span>Play Video</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row align-items-center">
               {thumbs.map((thumb) => (
                  <div key={thumb.id} className={`col-lg-${thumb.col_lg} col-sm-6`}>
                     <div className={`tp-about-4-thumb-${thumb.id} mb-30 wow fadeInUp`} data-wow-delay={`${thumb.delay}s`}>
                        <Image src={thumb.img} alt="thumb-img" style={{ height: 'auto' }} />
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}
