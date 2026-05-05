"use client"
import Image from "next/image";
import Gallery from "@/lib/classes/faculty/gallery";

type IProps = {
   spacing?: string;
   mainText?: string;
   gallery?: Gallery[];
};

export default function AboutTwo({ spacing = 'pt-115 pb-90', mainText, gallery }: IProps) {
   // const { playVideo } = useVideoModal();



   const thumbs = [
      { id: 1, col_lg: 3, img: gallery?.[0]?.image ?? "", delay: .5 },
      { id: 2, col_lg: 4, img: gallery?.[1]?.image ?? "", delay: .7 },
      { id: 3, col_lg: 3, img: gallery?.[2]?.image ?? "", delay: .9 },
      { id: 4, col_lg: 2, img: gallery?.[3]?.image ?? "", delay: 1 },
   ]

   console.log(gallery);


   return (
      <section className={`about-area ${spacing} grey-bg`}>
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="tp-about-4-wrapper mb-75 wow fadeInUp" data-wow-delay=".3s">
                     <h2 className="tp-about-4-head">{mainText ?? ""}</h2>
                     {/* <div className="tp-about-4-btn wow fadeInUp" data-wow-delay=".5s">
                        <Link className="tp-btn-3" href="/">Why Choose QPU</Link>
                        <div className="tp-about-4-video">
                           <button className="popup-video" onClick={() => playVideo("LlCwHnp3kL4")}>
                              <span>
                                 <VideoPlayerSvg />
                              </span>
                           </button>
                           <span>Play Video</span>
                        </div>
                     </div> */}
                  </div>
               </div>
            </div>
            <div className="row align-items-center">
               {thumbs.filter(t => !!t.img).map((thumb) => (
                  <div key={thumb.id} className={`col-lg-${thumb.col_lg} col-sm-6`}>
                     <div className={`tp-about-4-thumb-${thumb.id} mb-30 wow fadeInUp`} data-wow-delay={`${thumb.delay}s`}>
                        <Image src={thumb.img} alt="thumb-img" width={500} height={500} style={{ height: 'auto' }} unoptimized />
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}
