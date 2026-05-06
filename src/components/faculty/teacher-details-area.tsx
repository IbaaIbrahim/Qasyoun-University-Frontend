"use client";

import React from "react";
import Image from "next/image";
import { Teacher, TeacherDto } from "@/lib/classes/teacher";
import { resolveUploadSrc } from "@/lib/api/client";
import { useTranslations } from "next-intl";

type Props = {
  teacher: TeacherDto;
  locale: string;
};

export default function TeacherDetailsArea({ teacher, locale }: Props) {
  const t = useTranslations("TeacherDetails");
  const isRtl = locale === "ar";

  const fallbackImage = "/assets/img/team/about-team/about-team-1.jpg";
  const avatarSrc = resolveUploadSrc(teacher.picture?.url, fallbackImage);

  const sections = [
    { id: "scientific", title: t("scientificDegree"), content: isRtl ? teacher.scientificDegree_AR : teacher.scientificDegree },
    { id: "academic", title: t("academicDegree"), content: isRtl ? teacher.academicDegree_AR : teacher.academicDegree },
    { id: "certificates", title: t("certificates"), content: isRtl ? teacher.certificates_AR : teacher.certificates },
    { id: "experiences", title: t("experiences"), content: isRtl ? teacher.experiences_AR : teacher.experiences },
  ].filter(s => !!s.content);

  return (
    <section className="teacher-details-area pt-120 pb-120">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-4">
            <div className="teacher-sidebar sticky-top" style={{ top: "100px" }}>
              <div className="teacher-card bg-white p-4 shadow-sm text-center" style={{ borderRadius: "20px" }}>
                <div className="teacher-avatar mb-4 overflow-hidden mx-auto" style={{ width: "200px", height: "200px", borderRadius: "50%" }}>
                  <Image 
                    src={avatarSrc} 
                    alt={Teacher.getName(teacher, locale)} 
                    width={200} 
                    height={200} 
                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                    unoptimized
                  />
                </div>
                <h3 className="fw-bold mb-2" style={{ color: "#42023e" }}>{Teacher.getName(teacher, locale)}</h3>
                <p className="text-muted mb-4">{Teacher.getPosition(teacher, locale)}</p>
                
                <div className="teacher-cv-links d-flex flex-column gap-2">
                  {teacher.cvArabic && (
                    <a 
                      href={resolveUploadSrc(teacher.cvArabic.url, "")} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn w-100 py-3 d-flex align-items-center justify-content-center gap-2"
                      style={{ backgroundColor: "#42023e", color: "#fff", borderRadius: "10px" }}
                    >
                      <i className="fa-solid fa-file-pdf"></i> {t("cvArabic")}
                    </a>
                  )}
                  {teacher.cvEnglish && (
                    <a 
                      href={resolveUploadSrc(teacher.cvEnglish.url, "")} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn w-100 py-3 d-flex align-items-center justify-content-center gap-2"
                      style={{ backgroundColor: "rgba(66, 2, 62, 0.1)", color: "#42023e", borderRadius: "10px" }}
                    >
                      <i className="fa-solid fa-file-pdf"></i> {t("cvEnglish")}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="teacher-main-content">
              {sections.length > 0 ? (
                sections.map((section, idx) => (
                  <div key={section.id} className={`teacher-section mb-5 ${idx !== sections.length - 1 ? "pb-4 border-bottom" : ""}`}>
                    <h4 className="fw-bold mb-3 d-flex align-items-center gap-2" style={{ color: "#42023e" }}>
                      <span style={{ width: "8px", height: "24px", backgroundColor: "#f39c12", borderRadius: "4px" }}></span>
                      {section.title}
                    </h4>
                    <div className="section-content text-muted lh-lg" dangerouslySetInnerHTML={{ __html: section.content! }} />
                  </div>
                ))
              ) : (
                <div className="text-center py-5 text-muted">
                  <i className="fa-solid fa-user-graduate mb-3 d-block" style={{ fontSize: "3rem", opacity: 0.2 }}></i>
                  <p>{t("noDetails")}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
