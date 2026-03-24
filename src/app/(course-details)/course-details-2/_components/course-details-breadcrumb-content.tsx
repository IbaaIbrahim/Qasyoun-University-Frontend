import Link from 'next/link';
import Image from 'next/image';
import { HomeSvg, StarTwo } from '@/components/svg';
import { ICourseDT } from '@/types/course-d-t';
import { removeTagInText } from '@/utils';
import author_img from "@/assets/img/course/course-5-teacher-1.png";


type IProps = {
   course: ICourseDT;
}

export default function CourseDetailsBreadcrumbContent({ course }: IProps) {
   return (
      <div className="tp-breadcrumb__content">
         <div className="tp-breadcrumb__list inner-after">
            <span className="white"><Link href="/"><HomeSvg /></Link></span>
            <span className="white">Course Grid</span>
         </div>
         <div className="tp-course-details-2-header">
            <h3 className="tp-course-details-3-title">{removeTagInText(course.title)}</h3>
            <div className="tp-course-details-3-meta-wrapper d-flex align-items-center flex-wrap">
               <div className="tp-course-details-2-meta ">
                  <div className="tp-course-details-2-author d-flex align-items-center">
                     <div className="tp-course-details-2-author-avater">
                     <Image src={course.author_img ? course.author_img : author_img} alt="Salim Rana" width={50} height={50} />
                     </div>
                     <div className="tp-course-details-2-author-content">
                        <span className="tp-course-details-2-author-designation">Teacher</span>
                        <h3 className="tp-course-details-2-meta-title"><a href="#">{course.author_name}</a></h3>
                     </div>
                  </div>
               </div>
               <div className="tp-course-details-2-meta">
                  <span className="tp-course-details-2-meta-subtitle">Category</span>
                  <h3 className="tp-course-details-2-meta-title">{course.category}</h3>
               </div>
               <div className="tp-course-details-2-meta">
                  <span className="tp-course-details-2-meta-subtitle">Last updated</span>
                  <h3 className="tp-course-details-2-meta-title">15 July, 2024</h3>
               </div>
               <div className="tp-course-details-2-meta text-end">
                  <div className="tp-course-details-2-meta-rating-wrapper">
                     <div className="tp-course-rating-icon">
                        <span><StarTwo /></span>
                        <span><StarTwo /></span>
                        <span><StarTwo /></span>
                        <span><StarTwo /></span>
                        <span><StarTwo /></span>
                     </div>
                     <span className="tp-course-details-2-meta-subtitle">Review</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
