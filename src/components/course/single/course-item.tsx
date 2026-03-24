import React from "react";
import Image from "next/image";
import { LessonsSvg, UserSvgTwo } from "../../svg";
import { ICourseDT } from "@/types/course-d-t";
import Link from "next/link";
import CoursePrice from "../course-price";

type IProps = {
  course: ICourseDT;
  removeTag?: boolean;
};

export default function CourseItem({ course, removeTag }: IProps) {
  const {
    id,
    thumbnail,
    author_name,
    author_img,
    title,
    discount,
    lessons,
    students,
    avg_rating,
    total_rating,
    category,
    price,
  } = course || {};
  return (
    <div className="tp-course-item p-relative fix mb-30">
      <div className="tp-course-teacher mb-15">
        <span>
          {author_img && (
            <Image src={author_img} alt={author_name} width={30} height={30} />
          )}
          {author_name}
        </span>
        {discount && discount > 0 ? (
          <span className="discount">-{discount}% </span>
        ) : null}
      </div>
      <div className="tp-course-thumb">
        <Link href={`/course-details/${id}`}>
          <Image
            className="course-lightblue"
            src={thumbnail}
            alt={title}
            width={352}
            height={200}
          />
        </Link>
      </div>
      <div className="tp-course-content">
        <div className="tp-course-tag mb-10">
          <span>{category}</span>
        </div>
        <div className="tp-course-meta">
          <span>
            <span><LessonsSvg /></span>
            {" "}{lessons} Lessons
          </span>
          <span>
            <span><UserSvgTwo /></span>
            {" "}{students} Student
          </span>
        </div>
        <h4 className="tp-course-title">
          <Link href={`/course-details/${id}`}
            dangerouslySetInnerHTML={{ __html: removeTag ? title.replace(/(<([^>]+)>)/gi, "") : title }}
          ></Link>
        </h4>
        <div className="tp-course-rating d-flex align-items-end justify-content-between">
          <div className="tp-course-rating-star">
            <p>
              {avg_rating}
              <span> /{total_rating}</span>
            </p>
            <div className="tp-course-rating-icon">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>
          <div className="tp-course-pricing home-2">
            <CoursePrice discount={discount} price={price} />
          </div>
        </div>
      </div>
      <div className="tp-course-btn home-2">
        <Link href={`/course-details/${id}`}>Preview this Course</Link>
      </div>
    </div>
  );
}
