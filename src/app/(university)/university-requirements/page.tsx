import { Metadata } from "next";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import UniversityRequirementArea from "@/components/requirement/university-requirement-area";

export const metadata: Metadata = {
  title: "University Requirements - Acadia",
};

export default function UniversityRequirementsPage() {
  return (
    <main>
      {/* breadcrumb area start */}
      <BreadcrumbTwo
        title="Degree Requirements"
        subtitle="Degree Requirements"
      />
      {/* breadcrumb area end */}

      {/* requirements area start */}
      <UniversityRequirementArea/>
      {/* requirements area end */}
    </main>
  );
}
