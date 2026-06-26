import { notFound } from "next/navigation";
import { getFacultyBySlug } from "@/lib/services/faculty.service";
import HeroAreaOne from "@/components/hero-area/hero-area-one";
import { readContentAsJsonByFilter } from "@/lib/services/content.service";
import { ReferenceTypes } from "@/lib/constants";
import { getTranslations } from "next-intl/server";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export default async function FacultyPlanPage({ params }: Props) {
  const { slug, locale } = await params;
  const faculty = await getFacultyBySlug(slug);

  if (!faculty) notFound();

  const [meta, tPlan, tStudyPlan] = await Promise.all([
    readContentAsJsonByFilter({ referenceId: slug, referenceType: ReferenceTypes.faculty.value }, locale),
    getTranslations({ locale, namespace: "Nav" }),
    getTranslations({ locale, namespace: "StudyPlan" }),
  ]);

  const sliderContents = meta.filter((item) => item.section === ReferenceTypes.faculty.sections.hero_slider.value);
  const slides = sliderContents.map((item) => {
    const slider = item.toSlider();
    slider.title = tPlan("faculty_plan");
    slider.subTitle = faculty.getName(locale);
    return slider;
  });

  const planContents = meta.filter((item) => item.section === ReferenceTypes.faculty.sections.study_plan.value);
  const plan = planContents.map((item) => item.toStudyPlan())?.[0];

  return (
    <main>
      {slides.length > 0 && (
        <HeroAreaOne slides={slides.filter((slide) => slide.bgImg)} />
      )}
      
      <section id="plan" className="faculty-plan-area pt-90 pb-90 bg-light-soft">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center mb-50">
                <h2 className="title mb-0" style={{ color: "#42023e" }}>
                  {tPlan("faculty_plan")}
                </h2>
                <div className="tp-section-bottom-line mx-auto mt-2" style={{ backgroundColor: "#42023e", width: "80px", height: "4px", borderRadius: "2px" }}></div>
              </div>

              {plan ? (
                <div className="plan-card bg-white shadow-sm p-4 p-md-5 text-center" style={{ borderRadius: "20px" }}>
                  {plan.text ? (
                    <div 
                      className="plan-description text-muted mb-4 px-md-3" 
                      style={{ fontSize: "1.15rem", lineHeight: "1.8" }}
                      dangerouslySetInnerHTML={{ __html: plan.text }}
                    />
                  ) : (
                    <p className="plan-description text-muted mb-4 px-md-3" style={{ fontSize: "1.15rem", lineHeight: "1.8" }}>
                      {tStudyPlan("viewPlanNotice", { name: faculty.getName(locale) })}
                    </p>
                  )}

                  {plan.file ? (
                    <div className="mt-40">
                      <a 
                        href={plan.file} 
                        download
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-lg btn-primary rounded-pill px-5 py-3 d-inline-flex align-items-center gap-3 transition-all"
                        style={{ backgroundColor: "#42023e", borderColor: "#42023e", fontSize: "1.1rem", fontWeight: "bold" }}
                      >
                        <i className="fa-solid fa-file-pdf fs-4"></i>
                        <span>{tPlan("faculty_plan")}</span>
                      </a>
                    </div>
                  ) : (
                    <div className="alert alert-warning border-0 rounded-pill d-inline-block px-4 mt-3" role="alert">
                      {tStudyPlan("noPlanFile")}
                    </div>
                  )}
                </div>
              ) : (
                <div className="bg-white shadow-sm p-5 text-center text-muted" style={{ borderRadius: "20px" }}>
                  <i className="fa-solid fa-file-pdf mb-3 d-block" style={{ fontSize: "3rem", opacity: 0.2 }}></i>
                  {tStudyPlan("noPlan")}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
