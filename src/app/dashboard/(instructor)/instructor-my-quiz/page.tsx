import { Metadata } from "next";
import DashboardBanner from "@/components/dashboard/dashboard-banner";
import DashboardContentWrapper from "@/components/dashboard/dashboard-content-wrapper";
import InstructorQuizListArea from "@/components/dashboard/instructor/instructor-quiz-list-area";

export const metadata:Metadata = {
    title: "Instructor Quiz Attempts - Acadia",
}

export default function InstructorQuizAttemptsPage() {
  return (
    <main className="tp-dashboard-body-bg">
        
        {/* dashboard banner area start */}
        <DashboardBanner/>
        {/* dashboard banner area end */}

        {/* dashboard content area start */}
        <DashboardContentWrapper>
           <InstructorQuizListArea/>
        </DashboardContentWrapper>
        {/* dashboard content area end */}

    </main>
  )
}
