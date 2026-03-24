import { Metadata } from "next";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import BecomeInstructorArea from "./_components/become-instructor-area";
import CounterSix from "@/components/counter/counter-six";
import InstructorApplyArea from "./_components/instructor-apply-area";

export const metadata: Metadata = {
    title: "Become Instructor - Acadia",
};

export default function BecomeInstructorPage() {
    return (
        <main>

            {/* breadcrumb area start */}
            <BreadcrumbOne
                title="Become an Instructor"
                subtitle="Become an Instructor"
                color="color"
                pages={true}
            />
            {/* breadcrumb area end */}

            {/* become instructor area start */}
            <BecomeInstructorArea />
            {/* become instructor area end */}


            {/* counter area start */}
            <CounterSix />
            {/* counter area end */}


            {/* instructor apply area start */}
            <InstructorApplyArea/>
            {/* instructor apply area end */}


        </main>
    );
}
