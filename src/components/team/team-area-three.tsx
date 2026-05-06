import Image from "next/image";
import shape from "@/assets/img/team/about-team/team-shape.png";
import type { TeacherMemberCard } from "@/lib/classes/teacher";
import { Link } from "@/i18n/navigation";

type Props = {
  members: TeacherMemberCard[];
  facultySlug: string;
};

export default function TeamAreaThree({ members, facultySlug }: Props) {
  if (members.length === 0) return null;

  return (
    <section id="team" className="tp-about-team-area grey-bg p-relative pt-120 pb-90">
      <div className="tp-about-team-shape">
        <Image src={shape} alt="" />
      </div>
      <div className="container">
        <div className="row">
          {[
            ...members,
          ].map((item, i) => {
            return (
              <div key={item.id} className="col-lg-3 col-sm-6">
                <div
                  className="tp-about-team-item p-relative pb-30 wow fadeInUp h-100"
                  data-wow-delay={`.${i + 1}s`}
                >
                  <div className="tp-about-team-thumb h-100">
                    <Image
                      src={item.imageSrc}
                      alt={item.name}
                      width={282}
                      height={440}
                      style={{ height: "100%" }}
                      unoptimized
                    />
                  </div>
                  <div className="tp-about-team-content">
                    <h4 className="tp-about-team-title">
                      <Link href={`/faculties/${facultySlug}/staff/${item.id}`}>
                        {item.name}
                      </Link>
                    </h4>
                    {item.title ? <p>{item.title}</p> : null}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
