import CourseItem from "@/components/course/single/course-item";
import { online_courses_data } from "@/data/course-data";

export default function MyCourses() {
    return (
        <section className="course-area pt-80 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-profile-wrapper">
                            <h4>My Popular Courses</h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {online_courses_data.slice(0, 3).map((item) => (
                        <div key={item.id} className="col-lg-4 col-md-6">
                            <CourseItem course={item} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
