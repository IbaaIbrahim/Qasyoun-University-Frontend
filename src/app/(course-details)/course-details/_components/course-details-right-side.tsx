"use client"
import { CertificateSvg, DeadLineSvg, DurationSvg, LanguageSvg, LectureSvg, PlayTwoSvg, ShareSvg, SkillLevelSvg } from "@/components/svg";
import CoursePrice from "../../../../components/course/course-price";
import course_img from '@/assets/img/course/details/course.jpg';
import { useVideoModal } from "@/provider/VideoProvider";
import { ICourseDT } from "@/types/course-d-t";
import Image from "next/image";
import Link from "next/link";

type IProps = {
   course: ICourseDT;
};

export default function CourseDetailsRightSide({ course }: IProps) {
   const { playVideo } = useVideoModal();
   const { discount, price } = course || {};

   return (
      <div className="tp-course-details-2-widget">
         <div className="tp-course-details-2-widget-thumb p-relative">
            <Image src={course_img} alt="course-img" />
            <button onClick={() => playVideo("go7QYaQR494")}>
               <span>
                  <PlayTwoSvg/>
               </span>
            </button>
         </div>
         <div className="tp-course-details-2-widget-content">
            <div className="tp-course-details-2-widget-price">
               <CoursePrice discount={discount} price={price} />
            </div>
            <div className="tp-course-details-2-widget-btn">
               <Link className="active" href="/cart">Add to Cart</Link>
               <Link href="/course-with-filter">Buy Course</Link>
               <p>30-Day Money-Back Guarantee</p>
            </div>

            <div className="tp-course-details-2-widget-list">
               <h5>This course includes:</h5>

               <div className="tp-course-details-2-widget-list-item-wrapper">

                  <div className="tp-course-details-2-widget-list-item d-flex align-items-center justify-content-between">
                     <span> <LectureSvg /> Lectures</span>
                     <span>40</span>
                  </div>
                  <div className="tp-course-details-2-widget-list-item d-flex align-items-center justify-content-between">
                     <span> <DurationSvg /> Duration</span>
                     <span>4h 50m</span>
                  </div>
                  <div className="tp-course-details-2-widget-list-item d-flex align-items-center justify-content-between">
                     <span> <SkillLevelSvg /> Skill Level</span>
                     <span>Beginner</span>
                  </div>
                  <div className="tp-course-details-2-widget-list-item d-flex align-items-center justify-content-between">
                     <span> <LanguageSvg /> Language</span>
                     <span>{course.language}</span>
                  </div>
                  <div className="tp-course-details-2-widget-list-item d-flex align-items-center justify-content-between">
                     <span> <DeadLineSvg /> Deadline</span>
                     <span>30 Nov 2024</span>
                  </div>
                  <div className="tp-course-details-2-widget-list-item d-flex align-items-center justify-content-between">
                     <span> <CertificateSvg /> Certificate</span>
                     <span>Yes</span>
                  </div>

                  <div className="tp-course-details-2-widget-share d-flex align-items-center justify-content-between">
                     <a className="share" href="#"><span><ShareSvg clr="#5169F1" /></span> Share this course</a>
                     <a className="coupon" href="#">Apply coupon</a>
                  </div>
                  <div className="tp-course-details-2-widget-search p-relative">
                     <form action="#">
                        <input type="text" placeholder="Enter Coupon Code" />
                        <button type="submit">Apply</button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
