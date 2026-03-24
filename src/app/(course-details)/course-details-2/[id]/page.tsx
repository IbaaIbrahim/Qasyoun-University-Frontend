import { all_courses } from "@/data/course-data";
import RelatedCourses from "@/components/course/details/related-courses";
import CourseDetailsArea from "../_components/course-details-area";
import { removeTagInText } from "@/utils";
import { PageParamsProps } from "@/types/custom-d-t";

export async function generateMetadata(props: PageParamsProps) {
    const resolvedParams = await props.params;
    const { id } = resolvedParams;
    const course = all_courses.find((item) => item.id == id);
    return {
        title: course?.title ? `${removeTagInText(course.title)} - Acadia` : "Course Details - Acadia",
    };
}

export default async function CourseDetailsTwoPage(props: PageParamsProps) {
    const resolvedParams = await props.params;
    const { id } = resolvedParams;
    const course = all_courses.find((item) => item.id == id);
    return (
        course ? (
            <main>

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
