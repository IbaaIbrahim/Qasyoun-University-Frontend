import { Metadata } from "next";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import FaqArea from "@/components/faq/faq-area";


export const metadata: Metadata = {
    title: "FAQ - Acadia",
};

export default function FaqPage() {
    return (
        <main>

            {/* breadcrumb area start */}
            <BreadcrumbOne
                title="Faq Page"
                subtitle="Faq Page"
                color="color"
                pages={true}
            />
            {/* breadcrumb area end */}


            {/* faq area start */}
            <FaqArea/>
            {/* faq area end */}
        </main>
    );
}
