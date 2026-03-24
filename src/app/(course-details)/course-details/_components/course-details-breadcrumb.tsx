import Link from "next/link";
import Image from "next/image";
import { HomeSvg } from "@/components/svg";
import { ICourseDT } from "@/types/course-d-t";
import { removeTagInText } from "@/utils";
import author_img from "@/assets/img/course/course-5-teacher-1.png";

type IProps = {
   course: ICourseDT
}
export default function CourseDetailsBreadcrumb({ course }: IProps) {
   return (
      <section className="tp-breadcrumb__area pt-25 pb-55 p-relative z-index-1 fix">
         <div className="tp-breadcrumb__bg" style={{ backgroundImage: "url(/assets/img/breadcrumb/breadcrumb-bg-2.jpg)" }}></div>
         <div className="container">
            <div className="row align-items-center">
               <div className="col-sm-12">
                  <div className="tp-breadcrumb__content">
                     <div className="tp-breadcrumb__list course-details mb-70">
                        <span><Link href="/"><HomeSvg/></Link></span>
                        <span>Courses  /  Design  /  {removeTagInText(course.title)}</span>
                     </div>

                     <div className="tp-course-details-2-header">
                        <span className="tp-course-details-2-category">{course.category}</span>
                        <h3 className="tp-course-details-2-title">Bigener Adobe Illustrator for <br /> Graphic Design</h3>
                        <div className="tp-course-details-2-meta-wrapper d-flex align-items-center flex-wrap">
                           <div className="tp-course-details-2-meta ">
                              <div className="tp-course-details-2-author d-flex align-items-center">
                                 <div className="tp-course-details-2-author-avater">
                                    <Image src={course.author_img ? course.author_img : author_img} alt="Salim Rana" width={50} height={50} />
                                 </div>
                                 <div className="tp-course-details-2-author-content">
                                    <span className="tp-course-details-2-author-designation">Teacher</span>
                                    <h3 className="tp-course-details-2-meta-title"><a href="#">Maria Fisce</a></h3>
                                 </div>
                              </div>
                           </div>
                           <div className="tp-course-details-2-meta">
                              <span className="tp-course-details-2-meta-subtitle">Category</span>
                              <h3 className="tp-course-details-2-meta-title">Data Science</h3>
                           </div>
                           <div className="tp-course-details-2-meta">
                              <span className="tp-course-details-2-meta-subtitle">Last updated</span>
                              <h3 className="tp-course-details-2-meta-title">15 July, 2024</h3>
                           </div>
                           <div className="tp-course-details-2-meta text-end">
                              <div className="tp-course-details-2-meta-rating-wrapper">
                                 <div className="tp-course-rating-icon">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                 </div>
                                 <span className="tp-course-details-2-meta-subtitle">Review</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}
