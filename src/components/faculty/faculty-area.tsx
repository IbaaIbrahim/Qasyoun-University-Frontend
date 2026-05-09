import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import shape_line from "@/assets/img/unlerline/program-1-svg-1.svg";
import { RightSmArrowThree } from "@/components/svg";
import { listFacultiesForPublic } from "@/lib/services/faculty.service";
import FacultySlider from "./faculty-slider";

const FACULTY_TEASER_LIMIT = 3;

export default async function FacultyArea() {
  const faculties = await listFacultiesForPublic();
  const t = await getTranslations("FacultyArea");
  const teaserFaculties = faculties.slice(0, FACULTY_TEASER_LIMIT);

  return (
    <section className="program-area mb-75">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="tp-program-wrap wow fadeInUp" data-wow-delay=".3s">
              <div className="tp-section text-center mb-55">
                <h3 className="tp-section-title">
                  <span>
                    {" "}
                    {t("titleLead")}{" "}
                    <Image
                      className="tp-underline-shape-2 wow bounceIn"
                      data-wow-duration="1.5s"
                      data-wow-delay=".4s"
                      src={shape_line}
                      alt=""
                    />
                  </span>{" "}
                  {t("titleAccent")}
                </h3>
                <p>{t("description")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <FacultySlider
              faculties={teaserFaculties.map((f) => f.toPlain())}
            />
          </div>
          <div className="col-12">
            <div className="tp-program-dot text-center" />
          </div>
          <div className="col-12">
            <div className="tp-program-all text-center">
              <p>
                <Link href="/faculties">
                  {t("viewAll")}{" "}
                  <span>
                    <RightSmArrowThree />
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
