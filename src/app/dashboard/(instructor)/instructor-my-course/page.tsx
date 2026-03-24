import { Metadata } from "next";
import DashboardBanner from "@/components/dashboard/dashboard-banner";
import DashboardContentWrapper from "@/components/dashboard/dashboard-content-wrapper";
import InstructorMyCourseArea from "@/components/dashboard/instructor/instructor-my-course-area";

export const metadata:Metadata = {
    title: "Instructor My Course - Acadia",
}

export default function InstructorMyCoursePage() {
  return (
    <main className="tp-dashboard-body-bg">
        
        {/* dashboard banner area start */}
        <DashboardBanner/>
        {/* dashboard banner area end */}

        {/* dashboard content area start */}
        <DashboardContentWrapper>
           <InstructorMyCourseArea/>
        </DashboardContentWrapper>
        {/* dashboard content area end */}

    </main>
  )
}
