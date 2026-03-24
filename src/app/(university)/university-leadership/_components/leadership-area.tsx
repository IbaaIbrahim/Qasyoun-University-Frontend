
import TeamItem from "@/components/team/single/team-item";
import { leadership_data } from "@/data/team-data";
import LeadershipSearch from "./leadership-search";


export default function LeadershipArea() {
  return (
    <section className="tp-leadership-area grey-bg pt-120 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <LeadershipSearch/>
          </div>
        </div>
        <div className="row">
          {leadership_data.map((item, i) => {
            const delay = i > 9 ? "0.1s" : `.${(i + 1) * 0.1}s`;
            return (
              <div
                key={item.id}
                className="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp"
                data-wow-delay={delay}
              >
                <TeamItem item={item} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
