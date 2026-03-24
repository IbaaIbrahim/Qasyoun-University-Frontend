import Link from "next/link";
import { gym_course_data } from "@/data/course-data";
import CourseItemTwo from "./single/course-item-2";

export default function GymCourses() {
  return (
    <section className="course-area pb-90">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="tp-section text-center mb-105">
              <h5 className="tp-section-5-subtitle mb-10">
                WANNA TRANSFORM YOUR LIFE?
              </h5>
              <h3 className="tp-section-5-title">Latest GYM Courses</h3>
            </div>
          </div>
        </div>
        <div className="tp-course-5-position wow fadeInUp" data-wow-delay=".3s">
          <div className="row tp-gx-60">
            {gym_course_data.map((course) => (
              <div key={course.id} className="col-lg-4 col-md-6">
                <CourseItemTwo course={course} />
              </div>
            ))}
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div
              className="tp-course-5-btn text-center wow fadeInUp"
              data-wow-delay=".5s"
            >
              <Link className="tp-btn-4" href="/course-with-filter">
                View all courses
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
