import Link from "next/link";
import Image from "next/image";
import book from '@/assets/img/hero/hero-3/banner-3-book.png';
import heading_shape from '@/assets/img/hero/hero-3/hero-3-heading-shape.png';
import banner_thumb from '@/assets/img/hero/hero-3/banner-3-thumb-1.png';
import a_letter from '@/assets/img/hero/hero-3/a-letter.png';
import b_letter from '@/assets/img/hero/hero-3/b-letter.png';
import c_letter from '@/assets/img/hero/hero-3/c-letter.png';
import btn_shape from '@/assets/img/hero/hero-3/apply-btn-shape.png';
import banner_shape_1 from '@/assets/img/hero/hero-3/banner-3-shape-1.png';
import banner_shape_2 from '@/assets/img/hero/hero-3/banner-3-shape-2.png';
import banner_shape_3 from '@/assets/img/hero/hero-3/banner-3-shape-3.png';

export default function HeroAreaThree() {
   return (
      <section className="tp-hero-area tp-hero-3-bg" style={{ backgroundImage: `url(/assets/img/bg/banner-3-bg-1.png)` }}>
         <div className="tp-hero-3-shape-4">
            <Image src={banner_shape_3} alt="banner-shape" />
         </div>
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-8">
                  <div className="tp-hero-3-content p-relative mb-45 wow fadeInUp" data-wow-delay=".3s">
                     <h2 className="tp-hero-3-title">Explore live
                        <span><Image src={book} alt="book" /></span>
                        Creative Classes.</h2>
                     <div className="tp-hero-3-content-shape">
                        <Image src={heading_shape} alt="heading-shape" />
                     </div>
                  </div>
               </div>
               <div className="col-lg-4">
                  <div className="tp-hero-3-thumb mb-45 wow fadeInUp" data-wow-delay=".3s">
                     <Image src={banner_thumb} alt="banner-thumb" style={{ height: 'auto' }} />
                     <div className="tp-hero-3-shape">
                        <div className="tp-hero-3-shape-1">
                           <Image src={a_letter} alt="a-letter" />
                        </div>
                        <div className="tp-hero-3-shape-2">
                           <Image src={b_letter} alt="b-letter" />
                        </div>
                        <div className="tp-hero-3-shape-3">
                           <Image src={c_letter} alt="c-letter" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row align-items-end">
               <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-6">
                  <div className="tp-hero-3-apply-btn wow fadeInUp" data-wow-delay=".4s">
                     <Link href="/contact">
                        <span><Image src={btn_shape} alt="btn-shape" /></span> <br />
                        Apply Now
                     </Link>
                  </div>
               </div>
               <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                  <div className="tp-hero-3-thumb-2 wow fadeInUp" data-wow-delay=".5s">
                     <Image src={banner_shape_1} alt="banner-shape" />
                  </div>
               </div>
               <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
                  <div className="tp-hero-3-thumb-3 mb-30 wow fadeInUp" data-wow-delay=".6s">
                     <Image src={banner_shape_2} alt="banner-shape" />
                  </div>
               </div>
               <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6">
                  <div className="tp-hero-3-text wow fadeInUp" data-wow-delay=".7s">
                     <p>A progressive early childhood program located in the historic settlement house at 27 <br /> Barrow Street.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}
