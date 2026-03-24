import { Metadata } from "next";
import DashboardBanner from "@/components/dashboard/dashboard-banner";
import DashboardContentWrapper from "@/components/dashboard/dashboard-content-wrapper";
import InstructorAssignmentArea from "@/components/dashboard/instructor/instructor-assignment-area";

export const metadata: Metadata = {
   title: "Instructor Assignment - Acadia",
}

export default function InstructorAssignmentPage() {
   return (
      <main className="tp-dashboard-body-bg">

         {/* dashboard banner area start */}
         <DashboardBanner />
         {/* dashboard banner area end */}

         {/* dashboard content area start */}
         <DashboardContentWrapper>
            <InstructorAssignmentArea/>
         </DashboardContentWrapper>
         {/* dashboard content area end */}

      </main>
   )
}
