import { Metadata } from "next";
import RequestInfoForm from "@/components/form/request-info-form";

export const metadata: Metadata = {
  title: "University Request Info - Acadia",
};

export default function UniversityRequestInfoPage() {
  return (
    <main>
      {/* application area start */}
      <section className="tp-application-area grey-bg pt-150 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="tp-application-heading request wow fadeInUp"
                data-wow-delay=".3s"
              >
                <h3 className="tp-application-title">Request Information</h3>
              </div>
              <div
                className="tp-application-from-box wow fadeInUp"
                data-wow-delay=".5s"
              >
                <RequestInfoForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* application area end */}
    </main>
  );
}
