import { Metadata } from "next";
import DashboardBanner from "@/components/dashboard/dashboard-banner";
import DashboardContentWrapper from "@/components/dashboard/dashboard-content-wrapper";
import InstructorSettingProfileMainArea from "@/components/dashboard/instructor/setting-profile/instructor-setting-profile-main";

export const metadata:Metadata = {
    title: "Student Profile Setting - Acadia",
}

export default function StudentSettingProfilePage() {
  return (
    <main className="tp-dashboard-body-bg">
        
        {/* dashboard banner area start */}
        <DashboardBanner studentBanner={true}/>
        {/* dashboard banner area end */}

        {/* dashboard content area start */}
        <DashboardContentWrapper studentSidebar={true}>
            <InstructorSettingProfileMainArea studentProfile={true}/>
        </DashboardContentWrapper>
        {/* dashboard content area end */}

    </main>
  )
}
