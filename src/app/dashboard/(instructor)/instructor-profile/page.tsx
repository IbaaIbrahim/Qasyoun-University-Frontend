import { Metadata } from "next";
import DashboardBanner from "@/components/dashboard/dashboard-banner";
import DashboardContentWrapper from "@/components/dashboard/dashboard-content-wrapper";
import InstructorProfileArea from "@/components/dashboard/instructor/instructor-profile-area";

export const metadata:Metadata = {
    title: "Instructor Profile - Acadia",
}

export default function InstructorProfilePage() {
  return (
    <main className="tp-dashboard-body-bg">
        
        {/* dashboard banner area start */}
        <DashboardBanner/>
        {/* dashboard banner area end */}

        {/* dashboard content area start */}
        <DashboardContentWrapper>
            <InstructorProfileArea/>
        </DashboardContentWrapper>
        {/* dashboard content area end */}

    </main>
  )
}
