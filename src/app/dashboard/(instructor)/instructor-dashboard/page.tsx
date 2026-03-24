import { Metadata } from "next";
import DashboardBanner from "@/components/dashboard/dashboard-banner";
import DashboardArea from "./_components/dashboard-area";

export const metadata:Metadata = {
    title: "Instructor Dashboard - Acadia",
}

export default function InstructorDashboardPage() {
  return (
    <main className="tp-dashboard-body-bg">
        
        {/* dashboard banner area start */}
        <DashboardBanner/>
        {/* dashboard banner area end */}

        {/* dashboard content area start */}
        <DashboardArea/>
        {/* dashboard content area end */}

    </main>
  )
}
