import Link from "next/link";
import Image from "next/image";
import { LessonsSvg, UserSvgTwo } from "@/components/svg";
import { ICourseDT } from "@/types/course-d-t";
import { removeTagInText } from "@/utils";
import CoursePrice from "../course-price";

type IProps = {
    course: ICourseDT;
    sm_title?: boolean;
    title_cls?: string
};

export default function CourseListItemTwo({ course,sm_title,title_cls}: IProps) {
    const { id,author_name, avg_rating, total_rating, lessons, students, thumbnail, category, price, author_img, title, discount } = course || {};
    return (
        <div className="tp-course-filter-item mb-25 d-flex">
            <div className="tp-course-filter-thumb">
                <Link href={`/course-details/${id}`}>
                    <Image className="course-pink" src={thumbnail} alt={title} width={440} height={310} style={{ objectFit: 'cover' }} />
                </Link>
            </div>
            <div className="tp-course-filter-content">
                <div className="tp-course-filter-tag d-flex align-items-center justify-content-between mb-10">
                    <span className="tag-span">{category}</span>
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
                </div>
                <h4 className={title_cls?title_cls:'tp-course-filter-title'}>
                    <Link href={`/course-details/${id}`}>
                        {sm_title ? removeTagInText(title).slice(0, 28) + "..." : removeTagInText(title)}
                    </Link>
                </h4>
                <div className="tp-course-filter-meta">
                    <span>
                        {author_img && (
                            <Image src={author_img} alt={author_name} width={30} height={30} />
                        )}
                        {author_name}
                    </span>
                    <span>
                        <LessonsSvg />
                        {lessons} Lessons
                    </span>
                    <span>
                        <UserSvgTwo />
                        {students} Student
                    </span>
                </div>
                <div className="tp-course-filter-p">
                    <p>In this course, We will learn how to create websites by structuring and styling your pages with HTML and CSS.</p>
                </div>
                <div className="tp-course-filter-pricing d-flex align-items-center justify-content-between">
                    <div className="price">
                      <CoursePrice discount={discount} price={price} />
                    </div>
                    <div className="tp-course-filter-btn">
                        <Link href={`/course-details/${id}`}>Preview this Course</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
