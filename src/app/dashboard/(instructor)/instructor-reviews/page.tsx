import { Metadata } from "next";
import DashboardBanner from "@/components/dashboard/dashboard-banner";
import DashboardContentWrapper from "@/components/dashboard/dashboard-content-wrapper";
import InstructorReviewArea from "@/components/dashboard/instructor/instructor-review-area";

export const metadata:Metadata = {
    title: "Instructor Reviews - Acadia",
}

export default function InstructorReviewsPage() {
  return (
    <main className="tp-dashboard-body-bg">
        
        {/* dashboard banner area start */}
        <DashboardBanner/>
        {/* dashboard banner area end */}

        {/* dashboard content area start */}
        <DashboardContentWrapper>
            <InstructorReviewArea/>
        </DashboardContentWrapper>
        {/* dashboard content area end */}

    </main>
  )
}
