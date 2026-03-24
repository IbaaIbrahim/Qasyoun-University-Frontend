import Image from "next/image";
import full_width_bg from '@/assets/img/blog/deatils/blog-full-width-bg.jpg';

export default function FullWidthImg() {
  return (
    <div className="tp-blog-full-width-img">
         <div className="container-fluid p-0 ">
            <div className="row g-0">
               <div className="col-lg-12">
                  <div className="tp-blog-full-width-thumb">
                     <Image src={full_width_bg} alt="full-width-img" style={{height:'auto'}}/>
                  </div>
               </div>
            </div>
         </div>
      </div>
  )
}
