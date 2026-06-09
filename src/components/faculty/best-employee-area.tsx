"use client"
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ShapeLine } from "../svg";

import { BestEmployeeDto } from "@/lib/api/best-employee.api";

type Props = {
  employees: BestEmployeeDto[]; // Plain objects
  locale: string;
};

export default function BestEmployeeArea({ employees, locale }: Props) {
  const t = useTranslations("Faculties");
  
  if (!employees || employees.length === 0) return null;

  return (
    <section className="best-employee-area pt-120 pb-120 grey-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="tp-section-3-wrapper text-center mb-60">
              <span className="tp-section-3-subtitle">{t("bestEmployeeSubtitle")}</span>
              <h2 className="tp-section-3-title">
                {t("bestEmployeeTitle")} <span><ShapeLine/></span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {employees.map((employee, index) => {
            const description = locale === 'ar' ? employee.description_AR : employee.description;
            const teacher = employee.teacher;
            const teacherName = (locale === 'ar' ? (teacher?.name_AR || teacher?.name) : teacher?.name) || "";
            const teacherPosition = (locale === 'ar' ? (teacher?.position_AR || teacher?.position) : teacher?.position) || "";
            const teacherImage = teacher?.picture?.url || "/assets/img/team/about-team/about-team-1.jpg";

            return (
              <div key={employee.id} className="col-lg-10 mb-30">
                <div className="tp-about-wrapper p-relative wow fadeInUp bg-white p-5 rounded-4 shadow-sm border-start border-4 border-primary" data-wow-delay={`.${index + 3}s`}>
                  <div className="row align-items-center">
                    <div className="col-lg-4">
                      <div className="best-employee-thumb text-center">
                         <Image 
                            src={teacherImage} 
                            alt={teacherName} 
                            width={300} 
                            height={400} 
                            className="rounded-4 shadow-lg"
                            style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                            unoptimized
                         />
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="best-employee-content ps-lg-4 mt-4 mt-lg-0 text-center text-lg-start">
                        <h3 className="tp-section-title mb-10">{teacherName}</h3>
                        <h5 className="tp-section-subtitle mb-20" style={{ color: '#42023e' }}>{teacherPosition}</h5>
                        <p className="lead fst-italic text-muted" style={{ fontSize: '1.2rem' }}>&quot;{description}&quot;</p>
                      </div>
                    </div>
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
