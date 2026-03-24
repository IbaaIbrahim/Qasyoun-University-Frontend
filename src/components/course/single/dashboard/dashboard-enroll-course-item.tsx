import Image from "next/image";
import { ICourseDT } from "@/types/course-d-t";
import { LessonsSvg, UserSvgTwo } from "@/components/svg";
import { removeTagInText } from "@/utils";
import Link from "next/link";

type IProps = {
  course: ICourseDT;
};

export default function DashboardEnrollCourseItem({ course }: IProps) {
  const { id,thumbnail, title, total_rating, lessons, students, progress } = course;
  const progressValue = progress ?? 0;
  return (
    <div className="tp-dashboard-course mb-25">
      <div className="tp-dashboard-course-thumb">
        <Link href={`/course-details/${id}`}>
          <Image src={thumbnail} alt="thumbnail" width={262} height={160} />
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
              <LessonsSvg />
            </span>
            {" "}{lessons} Lessons
          </span>
          <span>
            <span>
              <UserSvgTwo />
            </span>
            {" "}{students} Students
          </span>
        </div>
        <div className="tp-dashboard-progress">
          <div className="tp-dashboard-progress-info d-flex align-items-center justify-content-between">
            <span>{Math.round((progressValue / 100) * lessons)} / {lessons}</span>
            <span>{progressValue}% Complete</span>
          </div>
          <div className="progress" role="progressbar" aria-label="Progress Example" aria-valuenow={progressValue} aria-valuemin={0} aria-valuemax={100}>
            <div className="progress-bar" style={{ width: `${progressValue}%` }}>
            </div>
          </div>
        </div>
        <div className="tp-dashboard-course-btn">
          <Link className="tpd-btn-border w-100" href="/dashboard/instructor-certificate">
            Download Certificate
          </Link>
        </div>
      </div>
    </div>
  );
}
