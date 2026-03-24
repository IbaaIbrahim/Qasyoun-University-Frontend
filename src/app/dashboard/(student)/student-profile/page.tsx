import { Metadata } from "next";
import DashboardBanner from "@/components/dashboard/dashboard-banner";
import DashboardContentWrapper from "@/components/dashboard/dashboard-content-wrapper";
import InstructorProfileArea from "@/components/dashboard/instructor/instructor-profile-area";

export const metadata: Metadata = {
    title: "Student Profile - Acadia",
}

export default function StudentDashboardProfilePage() {
    return (
        <main className="tp-dashboard-body-bg">

            {/* dashboard banner area start */}
            <DashboardBanner studentBanner={true} />
            {/* dashboard banner area end */}

            {/* dashboard content area start */}
            <DashboardContentWrapper studentSidebar={true}>

                {/* dashboard fact area start */}
                <InstructorProfileArea />
                {/* dashboard fact area end */}

            </DashboardContentWrapper>
            {/* dashboard content area end */}

        </main>
    )
}
