import { Metadata } from "next";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import CampusChooseArea from "@/components/campus/campus-choose-area";
import CounterThree from "@/components/counter/counter-three";
import ProcessThree from "@/components/process/process-three";
import FinancialAidArea from "./_components/financial-aid-area";

export const metadata: Metadata = {
  title: "University Financial - Acadia",
};

export default function UniversityFinancialPage() {
  return (
    <main>
      {/* breadcrumb area start */}
      <BreadcrumbTwo
        title="Financial Aid"
        subtitle="Financial Aid"
        admission={true}
      />
      {/* breadcrumb area end */}

      {/* campus area start */}
      <CampusChooseArea/>
      {/* campus area end */}

      {/* counter area start */}
      <CounterThree/>
      {/* counter area end */}

      {/* process area start */}
      <ProcessThree/>
      {/* process area end */}

      {/* financial aid area start */}
      <FinancialAidArea/>
      {/* financial aid area end */}
    </main>
  );
}
