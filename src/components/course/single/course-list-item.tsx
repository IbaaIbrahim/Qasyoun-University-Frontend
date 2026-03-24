import Image from "next/image";
import Link from "next/link";
import { LessonsSvg, UserSvgTwo } from "@/components/svg";
import { discountPrice } from "@/utils";
import { formatPrice } from "@/lib/format-price";
import { ICourseDT } from "@/types/course-d-t";

// prop type 
type IProps = {
   course: ICourseDT
}

export default function CourseListItem({ course }: IProps) {
   const { id,discount, price, lessons, students, thumbnail, author_name, author_img, title, total_rating } = course || {};
   return (
      <div className="tp-course-4-item d-flex wow fadeInUp">
         <div className="tp-course-4-thumb">
            <Image src={thumbnail} alt={title} width={220} height={293} style={{ height: 'auto' }} />
         </div>
         <div className="tp-course-4-content">
            <div className="tp-course-4-rating">
               <a href="#"><i className="fa-solid fa-star"></i></a>
               <a href="#"><i className="fa-solid fa-star"></i></a>
               <a href="#"><i className="fa-solid fa-star"></i></a>
               <a href="#"><i className="fa-solid fa-star"></i></a>
               <a href="#"><i className="fa-solid fa-star"></i></a>
               <span>({total_rating} reviews)</span>
            </div>
            <h4 className="tp-course-4-title">
               <Link href={`/course-details/${id}`}>{title}</Link>
            </h4>
            <div className="tp-course-4-info d-flex align-items-center">
               <div className="tp-course-4-info-item">
                  <span>
                     <span>
                        <LessonsSvg />
                     </span>
                     {" "}{lessons} Lessons
                  </span>
               </div>
               <div className="tp-course-4-info-item">
                  <span>
                     <span>
                        <UserSvgTwo />
                     </span>
                     {" "}{students} Student
                  </span>
               </div>
            </div>
            <p>Spken english dolor sit amet consecterur</p>
            <div className="tp-course-4-avatar d-flex align-items-center justify-content-between">
               <div className="tp-course-4-avatar-info d-flex align-items-center">
                  {author_img && <div className="tp-course-4-avatar-thumb">
                     <Image src={author_img} alt={author_name} width={30} height={30} />
                  </div>}
                  <div className="tp-course-4-avatar-text">
                     <span>By</span>
                     <a href="#">{" "}{author_name}</a>
                  </div>
               </div>
               <div className="tp-course-4-ammount">
                  <span>{discount === 0 || price === 0
                     ? "Free"
                     : discount
                        ? formatPrice(discountPrice(price, discount))
                        : formatPrice(price)}</span>
               </div>
            </div>
         </div>
      </div>
   )
}
