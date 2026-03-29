import Image from "next/image";
import Link from "next/link";
import shape_line from "@/assets/img/unlerline/program-1-svg-1.svg";
import { RightSmArrowThree } from "@/components/svg";
import { listFacultiesForPublic } from "@/lib/services/faculty.service";
import FacultySlider from "./faculty-slider";

export default async function FacultyArea() {
  const faculties = await listFacultiesForPublic();

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
                    University{" "}
                    <Image
                      className="tp-underline-shape-2 wow bounceIn"
                      data-wow-duration="1.5s"
                      data-wow-delay=".4s"
                      src={shape_line}
                      alt=""
                    />
                  </span>{" "}
                  Faculties
                </h3>
                <p>
                  Explore our faculties and academic units at Qasyoun Private
                  University.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <FacultySlider
              faculties={faculties.map((f) => f.toPlain())}
            />
          </div>
          <div className="col-12">
            <div className="tp-program-dot text-center" />
          </div>
          <div className="col-12">
            <div className="tp-program-all text-center">
              <p>
                More content and programs will be linked here as we migrate from{" "}
                <a
                  href="https://qpu.edu.sy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  qpu.edu.sy
                </a>
                .
                <Link href="/faculties">
                  View all faculties{" "}
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
