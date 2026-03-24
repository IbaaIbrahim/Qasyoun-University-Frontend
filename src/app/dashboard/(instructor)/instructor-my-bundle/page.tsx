import { Metadata } from "next";
import DashboardBanner from "@/components/dashboard/dashboard-banner";
import DashboardContentWrapper from "@/components/dashboard/dashboard-content-wrapper";
import InstructorMyCourseArea from "@/components/dashboard/instructor/instructor-my-course-area";

export const metadata:Metadata = {
    title: "Instructor My Bundle - Acadia",
}

export default function InstructorMyBundlePage() {
  return (
    <main className="tp-dashboard-body-bg">
        
        {/* dashboard banner area start */}
        <DashboardBanner/>
        {/* dashboard banner area end */}

        {/* dashboard content area start */}
        <DashboardContentWrapper>
           <InstructorMyCourseArea bundleCourse={true}/>
        </DashboardContentWrapper>
        {/* dashboard content area end */}

    </main>
  )
}
