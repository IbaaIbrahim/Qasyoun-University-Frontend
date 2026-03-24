import InProgressCourses from "./dashboard-progress-area";
import DashboardCoursesArea from "./dashboard-courses-area";
import DashboardContentWrapper from "@/components/dashboard/dashboard-content-wrapper";
import InstructorDashboardFacts from "@/components/dashboard/instructor/instructor-dashboard-fact-area";

export default function DashboardArea() {
    return (
        <DashboardContentWrapper>

            {/* dashboard fact area start */}
            <InstructorDashboardFacts />
            {/* dashboard fact area end */}

            {/* in progress courses */}
            <InProgressCourses />
            {/* in progress courses */}

            {/* dashboard courses area start */}
            <DashboardCoursesArea />
            {/* dashboard courses area end */}

        </DashboardContentWrapper>
    )
}
