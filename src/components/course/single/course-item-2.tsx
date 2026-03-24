import Link from "next/link";
import Image from "next/image";
import { LessonsSvg, UserSvgTwo } from "@/components/svg";
import { formatPrice } from "@/lib/format-price";
import { ICourseDT } from "@/types/course-d-t";
import { discountPrice } from "@/utils";

type IProps = {
  course: ICourseDT;
};

export default function CourseItemTwo({ course }: IProps) {
  const {
    id,
    author_name,
    author_img,
    title,
    lessons,
    students,
    thumbnail,
    discount,
    price,
  } = course || {};
  return (
    <div className="tp-course-5-item mb-60">
      <div className="tp-course-5-hover"></div>
      <div className="tp-course-5-thumb">
        <Image src={thumbnail} alt={title} width={360} height={250} />
        <div className="tp-course-5-price">
          <span>
            {discount === 0
              ? "Free"
              : discount
              ? formatPrice(discountPrice(price, discount))
              : formatPrice(price)}
          </span>
        </div>
      </div>
      <div className="tp-course-5-content">
        <div className="tp-course-5-avatar d-flex align-items-center">
          <span>
            {author_img && (
              <Image
                src={author_img}
                alt={author_name}
                width={30}
                height={30}
              />
            )}
          </span>
          <h5 className="tp-course-5-avatar-title">
            <a href="#">{author_name}</a>
          </h5>
        </div>
        <h4 className="tp-course-5-title">
          <Link href={`/course-details/${id}`}>{title}</Link>
        </h4>
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
      </div>
    </div>
  );
}
