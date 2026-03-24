import { Metadata } from "next";
import DashboardBanner from "@/components/dashboard/dashboard-banner";
import DashboardContentWrapper from "@/components/dashboard/dashboard-content-wrapper";
import InstructorCertificateArea from "@/components/dashboard/instructor/instructor-certificate-area";

export const metadata: Metadata = {
   title: "Instructor Certificate - Acadia",
}

export default function InstructorCertificatePage() {
   return (
      <main className="tp-dashboard-body-bg">

         {/* dashboard banner area start */}
         <DashboardBanner />
         {/* dashboard banner area end */}

         {/* dashboard content area start */}
         <DashboardContentWrapper>
            <InstructorCertificateArea/>
         </DashboardContentWrapper>
         {/* dashboard content area end */}

      </main>
   )
}
