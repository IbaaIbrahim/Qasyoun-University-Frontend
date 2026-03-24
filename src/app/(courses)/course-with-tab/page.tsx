import { Metadata } from "next";
import CourseFilterProvider from "@/components/provider/course-filter-provider";
import { all_courses } from "@/data/course-data";
import BannerArea from "@/components/banner/banner-area";
import CourseBannerArea from "./_components/course-banner-area";
import TabCoursesArea from "./_components/tab-courses-area";


export const metadata: Metadata = {
    title: "Course With Tab - Acadia",
}

export default function CourseWithTabPage() {
    return (
        <CourseFilterProvider initialCourses={all_courses}>

            {/* course banner area start */}
            <CourseBannerArea/>
            {/* course banner area end */}

            {/* course filter area */}
            <TabCoursesArea/>
            {/* course filter area */}

            {/* banner area start */}
            <BannerArea/>
            {/* banner area end */}

        </CourseFilterProvider>
    )
}
