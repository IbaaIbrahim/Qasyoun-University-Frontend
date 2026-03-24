import { Metadata } from "next";
import DashboardBanner from "@/components/dashboard/dashboard-banner";
import DashboardContentWrapper from "@/components/dashboard/dashboard-content-wrapper";
import InstructorEnrollCourseArea from "@/components/dashboard/instructor/instructor-enroll-course-area";

export const metadata:Metadata = {
    title: "Instructor Enroll Course - Acadia",
}

export default function InstructorEnrollCoursePage() {
  return (
    <main className="tp-dashboard-body-bg">
        
        {/* dashboard banner area start */}
        <DashboardBanner/>
        {/* dashboard banner area end */}

        {/* dashboard content area start */}
        <DashboardContentWrapper>
            <InstructorEnrollCourseArea/>
        </DashboardContentWrapper>
        {/* dashboard content area end */}

    </main>
  )
}
