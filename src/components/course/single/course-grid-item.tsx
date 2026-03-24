import Link from "next/link";
import Image from "next/image";
import { LessonsSvg, UserSvgTwo } from "@/components/svg";
import { ICourseDT } from "@/types/course-d-t";
import CoursePrice from "../course-price";
import { removeTagInText } from "@/utils";

type IProps = {
   course: ICourseDT;
};
export default function CourseGridItem({ course }: IProps) {
   const { author_name, avg_rating, total_rating, lessons, students, thumbnail, category, price, author_img, title, discount } = course || {};
   return (
      <div className="tp-course-grid-item d-flex mb-30">
         <div className="tp-course-grid-thumb">
            <Link href={`/course-details/${course.id}`}>
               <Image src={thumbnail} alt={removeTagInText(title)} width={230} height={320} />
            </Link>
         </div>
         <div className="tp-course-grid-content">
            <div className="tp-course-filter-tag mb-10">
               <span className="tag-span">{category}</span>
               {discount && discount > 0 ? (
                  <span className="discount">-{discount}% </span>
               ) : null}
            </div>
            <div className="tp-course-meta">
               <span>
                  <span>
                     <LessonsSvg />
                  </span>
                  {lessons} Lessons
               </span>
               <span>
                  <span>
                     <UserSvgTwo />
                  </span>
                  {students} Student
               </span>
            </div>
            <h4 className="tp-course-grid-title">
               <Link href={`/course-details/${course.id}`}>
                  {removeTagInText(title)}
               </Link>
            </h4>
            <div className="tp-course-teacher tp-course-grid-teacher">
               <span>
                  {author_img && (
                     <Image src={author_img} alt={author_name} width={30} height={30} />
                  )}
                  {author_name}
               </span>
            </div>
            <div className="tp-course-rating d-flex align-items-end justify-content-between">
               <div className="tp-course-rating-star">
                  <p>{avg_rating}<span> /{total_rating}</span></p>
                  <div className="tp-course-rating-icon">
                     <i className="fa-solid fa-star"></i>
                     <i className="fa-solid fa-star"></i>
                     <i className="fa-solid fa-star"></i>
                     <i className="fa-solid fa-star"></i>
                     <i className="fa-solid fa-star"></i>
                  </div>
               </div>
               <div className="tp-course-pricing">
                  <CoursePrice discount={discount} price={price} />
               </div>
            </div>
         </div>
      </div>
   )
}
