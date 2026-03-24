import { Metadata } from "next";
import DashboardBanner from "@/components/dashboard/dashboard-banner";
import DashboardContentWrapper from "@/components/dashboard/dashboard-content-wrapper";
import StudentMyQuizArea from "@/components/dashboard/student/student-my-quiz-area";

export const metadata: Metadata = {
    title: "Student Quiz - Acadia",
}

export default function StudentMyQuizPage() {
    return (
        <main className="tp-dashboard-body-bg">

            {/* dashboard banner area start */}
            <DashboardBanner studentBanner={true} />
            {/* dashboard banner area end */}

            {/* dashboard content area start */}
            <DashboardContentWrapper studentSidebar={true}>

                {/* dashboard fact area start */}
                <StudentMyQuizArea/>
                {/* dashboard fact area end */}

            </DashboardContentWrapper>
            {/* dashboard content area end */}

        </main>
    )
}
