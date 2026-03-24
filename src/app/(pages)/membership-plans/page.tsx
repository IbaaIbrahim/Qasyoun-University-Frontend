import { Metadata } from "next";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import MembershipArea from "./_components/membership-area";
import BannerArea from "@/components/banner/banner-area";


export const metadata: Metadata = {
    title: "Membership Plans - Acadia",
};

export default function MembershipPlansPage() {
    return (
        <main>

            {/* breadcrumb area start */}
            <BreadcrumbOne
                title="Membership plans"
                subtitle="Membership plans"
                color="color"
                pages={true}
            />
            {/* breadcrumb area end */}


            {/* membership area start */}
            <MembershipArea />
            {/* membership area end */}

            {/* banner area start */}
            <BannerArea/>
            {/* banner area end */}
        </main>
    );
}
