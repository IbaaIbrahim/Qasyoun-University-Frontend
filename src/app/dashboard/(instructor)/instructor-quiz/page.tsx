import { Metadata } from "next";
import DashboardBanner from "@/components/dashboard/dashboard-banner";
import DashboardContentWrapper from "@/components/dashboard/dashboard-content-wrapper";
import InstructorQuizArea from "@/components/dashboard/instructor/instructor-quiz-area";

export const metadata: Metadata = {
   title: "Instructor Quiz - Acadia",
}

export default function InstructorQuizPage() {
   return (
      <main className="tp-dashboard-body-bg">

         {/* dashboard banner area start */}
         <DashboardBanner />
         {/* dashboard banner area end */}

         {/* dashboard content area start */}
         <DashboardContentWrapper>
            <InstructorQuizArea/>
         </DashboardContentWrapper>
         {/* dashboard content area end */}

      </main>
   )
}
