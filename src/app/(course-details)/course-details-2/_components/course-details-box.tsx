import Image from "next/image";
import { ShareSvg } from "@/components/svg";
import SocialLinks from "@/components/social/social-links";
import { ICourseDT } from "@/types/course-d-t";
import CoursePrice from "@/components/course/course-price";
import Link from "next/link";

type IProps = {
   course: ICourseDT;
}

export default function CourseDetailsBox({ course }: IProps) {
   const { price, discount, thumbnail } = course || {};
   return (
      <div className="tp-course-details-3-widget">
         <div className="tp-course-details-2-widget-thumb p-relative">
            <Image src={thumbnail} alt="course-thumb" width={401} height={271} />
         </div>
         <div className="tp-course-details-3-widget-content">
            <div className="tp-course-details-2-widget-price d-flex justify-content-between align-items-center">
               <div className="price">
                  <CoursePrice price={price} discount={discount}/>
                  {discount && <p>-{discount}% off</p>}
               </div>
               <div className="share p-relative">
                  <div className="tp-postbox-share">
                     <button className="p-relative">
                        <span>
                           <ShareSvg/>
                        </span>
                     </button>

                     <ul className="tp-postbox-share-hover">
                        <li><a href="#"><i className="fab fa-facebook-f"></i> <b>Facebook</b></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i> <b>Twitter</b></a></li>
                        <li><a href="#"><i className="fab fa-youtube"></i> <b>Youtube</b></a></li>
                        <li><a href="#"><i className="fab fa-linkedin"></i> <b>Linkedin</b></a></li>
                     </ul>
                  </div>
               </div>
            </div>
            <div className="tp-course-details-2-widget-btn">
               <Link href="/cart">Add to Cart</Link>
               <Link className="active" href="/course-with-filter">Buy Course</Link>
               <p>Limited offer, cancel anytime.</p>
            </div>
            <div className="tp-course-details-2-instructor-social text-center">
               <SocialLinks/>
            </div>
         </div>
      </div>
   )
}
