import { Metadata } from "next";
import CourseFilterProvider from "@/components/provider/course-filter-provider";
import { all_courses } from "@/data/course-data";
import BannerArea from "@/components/banner/banner-area";
import CourseBannerArea from "../course-with-tab/_components/course-banner-area";
import TabCoursesArea from "../course-with-tab/_components/tab-courses-area";


export const metadata: Metadata = {
    title: "Course With Tab List - Acadia",
}

export default function CourseWithTabListPage() {
    return (
        <CourseFilterProvider initialCourses={all_courses}>

            {/* course banner area start */}
            <CourseBannerArea listActive={true}/>
            {/* course banner area end */}

            {/* course filter area */}
            <TabCoursesArea listActive={true}/>
            {/* course filter area */}

            {/* banner area start */}
            <BannerArea/>
            {/* banner area end */}

        </CourseFilterProvider>
    )
}
