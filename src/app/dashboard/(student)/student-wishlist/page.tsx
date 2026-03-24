import { Metadata } from "next";
import DashboardBanner from "@/components/dashboard/dashboard-banner";
import DashboardContentWrapper from "@/components/dashboard/dashboard-content-wrapper";
import InstructorWishlistArea from "@/components/dashboard/instructor/instructor-wishlist-area";

export const metadata: Metadata = {
    title: "Student Wishlist - Acadia",
}

export default function StudentWishlistPage() {
    return (
        <main className="tp-dashboard-body-bg">

            {/* dashboard banner area start */}
            <DashboardBanner studentBanner={true} />
            {/* dashboard banner area end */}

            {/* dashboard content area start */}
            <DashboardContentWrapper studentSidebar={true}>

                {/* dashboard fact area start */}
                <InstructorWishlistArea/>
                {/* dashboard fact area end */}

            </DashboardContentWrapper>
            {/* dashboard content area end */}

        </main>
    )
}
