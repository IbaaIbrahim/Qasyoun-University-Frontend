import CourseDetailsBreadcrumb from "../_components/course-details-breadcrumb";
import RelatedCourses from "@/components/course/details/related-courses";
import CourseDetailsArea from "../_components/course-details-area";
import { PageParamsProps } from "@/types/custom-d-t";
import { all_courses } from "@/data/course-data";
import { removeTagInText } from "@/utils";

export async function generateMetadata(props: PageParamsProps) {
    const resolvedParams = await props.params;
    const { id } = resolvedParams;
    const course = all_courses.find((item) => item.id == id);
    return {
        title: course?.title ? `${removeTagInText(course.title)} - Acadia` : "Course Details - Acadia",
    };
}

export default async function CourseDetailsPage(props: PageParamsProps) {
    const resolvedParams = await props.params;
    const { id } = resolvedParams;
    const course = all_courses.find((item) => item.id == id);
    
    return (
        course ? (
            <main>

                {/* breadcrumb area start */}
                <CourseDetailsBreadcrumb course={course} />
                {/* breadcrumb area end */}

                {/* course details area */}
                <CourseDetailsArea course={course} />
                {/* course details area */}

                {/* related course start */}
                <RelatedCourses/>
                {/* related course end */}

            </main>
        ) : (
            <div className="text-center mt-100 mb-80">
                <h3>No Course found with id: {id}</h3>
            </div>
        )
    )
}
