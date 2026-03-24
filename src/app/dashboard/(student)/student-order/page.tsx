import { Metadata } from "next";
import DashboardBanner from "@/components/dashboard/dashboard-banner";
import DashboardContentWrapper from "@/components/dashboard/dashboard-content-wrapper";
import StudentOrderArea from "@/components/dashboard/student/student-order-area";

export const metadata: Metadata = {
    title: "Student Order - Acadia",
}

export default function StudentOrderPage() {
    return (
        <main className="tp-dashboard-body-bg">

            {/* dashboard banner area start */}
            <DashboardBanner studentBanner={true} />
            {/* dashboard banner area end */}

            {/* dashboard content area start */}
            <DashboardContentWrapper studentSidebar={true}>

                {/* dashboard fact area start */}
                <StudentOrderArea/>
                {/* dashboard fact area end */}

            </DashboardContentWrapper>
            {/* dashboard content area end */}

        </main>
    )
}
