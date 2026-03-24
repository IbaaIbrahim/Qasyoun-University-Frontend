import { Metadata } from "next";
import ApplicationForm from "@/components/form/application-form";

export const metadata: Metadata = {
  title: "University Application Form - Acadia",
};

export default function UniversityApplicationFormPage() {
  return (
    <main>
      {/* application area start */}
      <section className="tp-application-area grey-bg pt-150 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="tp-application-heading wow fadeInUp"
                data-wow-delay=".3s"
              >
                <p className="tp-application-subtitle">
                  Ready to find out what sets us apart?
                </p>
                <h3 className="tp-application-title">Start your Application</h3>
              </div>
              <div
                className="tp-application-from-box wow fadeInUp"
                data-wow-delay=".5s"
              >
                {/* form area start */}
                <ApplicationForm />
                {/* form area end */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* application area end */}
    </main>
  );
}
