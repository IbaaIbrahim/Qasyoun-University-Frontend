import { Metadata } from "next";
import DashboardBanner from "@/components/dashboard/dashboard-banner";
import DashboardContentWrapper from "@/components/dashboard/dashboard-content-wrapper";
import InstructorReviewArea from "@/components/dashboard/instructor/instructor-review-area";

export const metadata: Metadata = {
    title: "Student Reviews - Acadia",
}

export default function StudentReviewsPage() {
    return (
        <main className="tp-dashboard-body-bg">

            {/* dashboard banner area start */}
            <DashboardBanner studentBanner={true} />
            {/* dashboard banner area end */}

            {/* dashboard content area start */}
            <DashboardContentWrapper studentSidebar={true}>

                {/* dashboard fact area start */}
                <InstructorReviewArea/>
                {/* dashboard fact area end */}

            </DashboardContentWrapper>
            {/* dashboard content area end */}

        </main>
    )
}
