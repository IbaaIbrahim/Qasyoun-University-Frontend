import { Metadata } from "next";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import { leadership_data } from "@/data/team-data";
import TeamItem from "@/components/team/single/team-item";

export const metadata: Metadata = {
  title: "Instructor - Acadia",
};

export default function InstructorPage() {
  return (
    <main>
      {/* breadcrumb area start */}
      <BreadcrumbOne
        title="Instructor"
        subtitle="Instructor"
        color="color"
        pages={true}
      />
      {/* breadcrumb area end */}

      {/* instructor area start */}
      <section className="tp-event-inner-area tp-event-inner-p pt-100 pb-50">
        <div className="container">
          <div className="row">
            {leadership_data.map((item, i) => {
              const delay = i > 9 ? "0.1s" : `.${(i + 1) * 0.1}s`;
              return (
                <div
                  key={item.id}
                  className="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp"
                  data-wow-delay={delay}
                >
                  <TeamItem item={item} instructor={true} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* instructor area end */}
    </main>
  );
}
