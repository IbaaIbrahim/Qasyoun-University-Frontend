import { Metadata } from "next";
import DashboardBanner from "@/components/dashboard/dashboard-banner";
import DashboardContentWrapper from "@/components/dashboard/dashboard-content-wrapper";
import InstructorAnalyticsArea from "@/components/dashboard/instructor/analytics/instructor-analytics-area";

export const metadata: Metadata = {
    title: "Instructor Analytics Overview - Acadia",
}

export default function InstructorAnalyticsOverviewPage() {
    return (
        <main className="tp-dashboard-body-bg">

            {/* dashboard banner area start */}
            <DashboardBanner />
            {/* dashboard banner area end */}

            {/* dashboard content area start */}
            <DashboardContentWrapper>

                <InstructorAnalyticsArea />

            </DashboardContentWrapper>
            {/* dashboard content area end */}

        </main>
    )
}
