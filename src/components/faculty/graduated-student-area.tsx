"use client"
import { useTranslations } from "next-intl";
import { ShapeLine } from "../svg";

import { GraduatedStudentDto } from "@/lib/api/graduated-student.api";

type Props = {
  students: GraduatedStudentDto[]; // Plain objects
  locale: string;
};

export default function GraduatedStudentArea({ students, locale }: Props) {
  const t = useTranslations("Faculties");
  
  if (!students || students.length === 0) return null;

  return (
    <section className="graduated-students-area pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="tp-section-3-wrapper text-center mb-60">
              <span className="tp-section-3-subtitle">{t("graduatedStudentsSubtitle")}</span>
              <h2 className="tp-section-3-title">
                {t("graduatedStudentsTitle")} <span><ShapeLine/></span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {students.map((student, index) => {
            const fullName = locale === 'ar' ? student.fullName_AR : student.fullName;
            return (
              <div key={student.id} className="col-xl-3 col-lg-4 col-md-6 mb-30">
                <div className="graduated-student-card p-4 rounded-4 shadow-sm h-100 text-center wow fadeInUp bg-white border-top border-4" 
                     style={{ borderColor: '#42023e' }}
                     data-wow-delay={`.${index + 1}s`}>
                   <div className="student-avatar mb-3 mx-auto d-flex align-items-center justify-content-center rounded-circle bg-light" style={{ width: 80, height: 80 }}>
                      <i className="fa-solid fa-graduation-cap fs-2" style={{ color: '#42023e' }}></i>
                   </div>
                   <h4 className="student-name mb-2" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{fullName}</h4>
                   <div className="student-info text-muted small mb-3">
                      <div>{t("studentNumber")}: {student.studentNumber}</div>
                   </div>
                   <div className="student-average py-2 px-3 rounded-pill text-white d-inline-block fw-bold" style={{ backgroundColor: '#42023e' }}>
                      {t("average")}: {student.average}%
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
