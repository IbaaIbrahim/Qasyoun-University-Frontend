import { Metadata } from "next";
import CourseFilterProvider from "@/components/provider/course-filter-provider";
import { all_courses } from "@/data/course-data";
import BannerArea from "@/components/banner/banner-area";
import OpenFilterBannerArea from "./_components/open-filter-banner-area";
import CourseOpenFilterArea from "./_components/course-open-filter-area";


export const metadata: Metadata = {
    title: "Course Open Filter - Acadia",
}

export default function CourseOpenFilterPage() {
    return (
        <CourseFilterProvider initialCourses={all_courses}>

            {/* course banner area start */}
            <OpenFilterBannerArea/>
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
