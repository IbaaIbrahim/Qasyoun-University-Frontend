import { Metadata } from "next";
import DashboardBanner from "@/components/dashboard/dashboard-banner";
import DashboardContentWrapper from "@/components/dashboard/dashboard-content-wrapper";
import InstructorWishlistArea from "@/components/dashboard/instructor/instructor-wishlist-area";

export const metadata:Metadata = {
    title: "Instructor Wishlist - Acadia",
}

export default function InstructorWishlistPage() {
  return (
    <main className="tp-dashboard-body-bg">
        
        {/* dashboard banner area start */}
        <DashboardBanner/>
        {/* dashboard banner area end */}

        {/* dashboard content area start */}
        <DashboardContentWrapper>
            <InstructorWishlistArea/>
        </DashboardContentWrapper>
        {/* dashboard content area end */}

    </main>
  )
}
