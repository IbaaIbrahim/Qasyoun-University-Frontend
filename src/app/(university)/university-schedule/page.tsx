import { Metadata } from "next";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import ScheduleForm from "@/components/form/schedule-form";
import PlanArea from "@/components/plan/plan-area";

export const metadata: Metadata = {
  title: "University Schedule - Acadia",
};

export default function UniversitySchedulePage() {
  return (
    <main>
      {/* breadcrumb area start */}
      <BreadcrumbTwo
        title="Schedule a Tour"
        subtitle="Schedule a Tour"
        admission={true}
      />
      {/* breadcrumb area end */}

      {/* schedule area start */}
      <div className="tp-schedule-area grey-bg pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-schedule-wrapper">
                <div className="tp-schedule-from-box">
                  {/* form start */}
                  <ScheduleForm />
                  {/* form end */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* schedule area end */}

      {/* plan area start */}
      <PlanArea />
      {/* plan area end */}
    </main>
  );
}
