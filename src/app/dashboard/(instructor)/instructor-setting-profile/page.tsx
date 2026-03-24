import { Metadata } from "next";
import DashboardBanner from "@/components/dashboard/dashboard-banner";
import DashboardContentWrapper from "@/components/dashboard/dashboard-content-wrapper";
import InstructorSettingProfileMainArea from "@/components/dashboard/instructor/setting-profile/instructor-setting-profile-main";

export const metadata:Metadata = {
    title: "Instructor Profile Setting - Acadia",
}

export default function InstructorSettingProfilePage() {
  return (
    <main className="tp-dashboard-body-bg">
        
        {/* dashboard banner area start */}
        <DashboardBanner/>
        {/* dashboard banner area end */}

        {/* dashboard content area start */}
        <DashboardContentWrapper>
            <InstructorSettingProfileMainArea/>
        </DashboardContentWrapper>
        {/* dashboard content area end */}

    </main>
  )
}
