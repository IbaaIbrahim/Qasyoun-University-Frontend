import Image from "next/image";
import { ICourseDT } from "@/types/course-d-t";
import { removeTagInText } from "@/utils";
import CoursePrice from "../../course-price";
import {LessonsSvg, PenSvg, UserSvgTwo } from "@/components/svg";
import Link from "next/link";
import CourseDashboardItemAction from "./course-d-item-action";


type IProps = {
    course: ICourseDT;
};

export default function DashboardCourseItemThree({ course }: IProps) {
    const {id,title, discount, thumbnail, total_rating, lessons, students,price } = course || {};
    return (
        <div className="tp-dashboard-course tp-dashboard-course-2 mb-25">
            <div className="tp-dashboard-course-thumb">
                <Link href={`/course-details/${id}`}>
                    <Image src={thumbnail}alt={removeTagInText(title)} width={262} height={160}/>
                </Link>
            </div>
            <div className="tp-dashboard-course-content">
                <div className="tp-dashboard-rating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <span>({total_rating} Reviews)</span>
                </div>
                <h4 className="tp-dashboard-course-title">
                    <Link href={`/course-details/${id}`}>{removeTagInText(title)}</Link>
                </h4>
                <div className="tp-dashboard-course-meta">
                    <span>
                        <span>
                            <LessonsSvg/>
                        </span>
                        {" "}{lessons} Lessons
                    </span>
                    <span>
                        <span>
                            <UserSvgTwo/>
                        </span>
                        {" "}{students} Student
                    </span>
                </div>
                <div className="tp-dashboard-btn d-flex align-items-center justify-content-between">
                    <div className="tp-course-pricing text-start">
                        <CoursePrice discount={discount} price={price} />
                    </div>
                    <div className="tp-course-action d-flex align-items-center">
                        <div className="tpd-action-inexact-btn">
                            <Link href="/dashboard/create-new-course">
                                <PenSvg/>
                            </Link>
                        </div>
                        <CourseDashboardItemAction courseId={id}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
