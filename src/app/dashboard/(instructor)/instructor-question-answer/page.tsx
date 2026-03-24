import { Metadata } from "next";
import DashboardBanner from "@/components/dashboard/dashboard-banner";
import DashboardContentWrapper from "@/components/dashboard/dashboard-content-wrapper";
import InstructorQuestionAnswerArea from "@/components/dashboard/instructor/instructor-q-a-area";

export const metadata:Metadata = {
    title: "Instructor Question Answer - Acadia",
}

export default function InstructorQuestionAnswerPage() {
  return (
    <main className="tp-dashboard-body-bg">
        
        {/* dashboard banner area start */}
        <DashboardBanner/>
        {/* dashboard banner area end */}

        {/* dashboard content area start */}
        <DashboardContentWrapper>
            <InstructorQuestionAnswerArea/>
        </DashboardContentWrapper>
        {/* dashboard content area end */}

    </main>
  )
}
