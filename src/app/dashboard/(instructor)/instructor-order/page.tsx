import { Metadata } from "next";
import DashboardBanner from "@/components/dashboard/dashboard-banner";
import DashboardContentWrapper from "@/components/dashboard/dashboard-content-wrapper";
import InstructorOrderArea from "@/components/dashboard/instructor/instructor-order-area";

export const metadata: Metadata = {
    title: "Instructor Order - Acadia",
}

export default function InstructorOrderPage() {
    return (
        <main className="tp-dashboard-body-bg">

            {/* dashboard banner area start */}
            <DashboardBanner />
            {/* dashboard banner area end */}

            {/* dashboard content area start */}
            <DashboardContentWrapper>
                <InstructorOrderArea />
            </DashboardContentWrapper>
            {/* dashboard content area end */}

        </main>
    )
}
