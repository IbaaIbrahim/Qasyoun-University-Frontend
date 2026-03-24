import { Metadata } from "next";
import CourseFilterProvider from "@/components/provider/course-filter-provider";
import { all_courses } from "@/data/course-data";
import BannerArea from "@/components/banner/banner-area";
import CourseFilterBanner from "../course-with-filter/_components/course-filter-banner";
import CourseOpenFilterArea from "../course-open-filter/_components/course-open-filter-area";


export const metadata: Metadata = {
    title: "Course Column 2 - Acadia",
}

export default function CourseColumn2Page() {
    return (
        <CourseFilterProvider initialCourses={all_courses}>

            {/* course banner area start */}
            <CourseFilterBanner spacing="tp-course-filter-space"/>
            {/* course banner area end */}

            {/* course filter area */}
            <CourseOpenFilterArea/>
            {/* course filter area */}

            {/* banner area start */}
            <BannerArea/>
            {/* banner area end */}

        </CourseFilterProvider>
    )
}
