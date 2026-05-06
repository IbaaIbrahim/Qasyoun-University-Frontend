"use client";

import React, { useState } from "react";
import { ScientificResearch } from "@/lib/classes/scientific-research";
import { Teacher, TeacherDto } from "@/lib/classes/teacher";
import { ScientificResearchDto } from "@/lib/api/scientific-research.api";
import { useTranslations } from "next-intl";
import { resolveUploadSrc } from "@/lib/api/client";

type Props = {
  researches: ScientificResearchDto[];
  teachers: TeacherDto[];
  locale: string;
};

export default function FacultyResearch({ researches, teachers, locale }: Props) {
  const t = useTranslations("Research");
  const isRtl = locale === "ar";
  
  const [searchTerm, setSearchTerm] = useState("");

  const teacherMap = new Map(teachers.map(t => [t.id, t]));

  const filteredResearches = researches.filter(r => {
    const title = ScientificResearch.getTitle(r, locale).toLowerCase();
    const teacherDto = teacherMap.get(r.teacherId);
    const teacherName = teacherDto ? Teacher.getName(teacherDto, locale).toLowerCase() : "";
    return title.includes(searchTerm.toLowerCase()) || teacherName.includes(searchTerm.toLowerCase());
  });

  return (
    <section id="research" className="faculty-research-area pt-90 pb-90 bg-light-soft">
      <div className="container">
        <div className="row mb-40">
          <div className="col-lg-8">
            <div className="section-title">
              <h2 className="title mb-0" style={{ color: "#42023e" }}>{t("facultyResearches")}</h2>
              <div className="tp-section-bottom-line mt-2" style={{ backgroundColor: "#42023e", width: "80px", height: "4px", borderRadius: "2px" }}></div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="search-wrap p-relative">
              <input 
                type="text" 
                placeholder={t("searchPlaceholder")} 
                className="form-control px-4 py-3 shadow-sm border-0"
                style={{ borderRadius: "50px" }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <i className="fa-solid fa-magnifying-glass p-absolute" style={{ right: isRtl ? "auto" : "25px", left: isRtl ? "25px" : "auto", top: "50%", transform: "translateY(-50%)", color: "#42023e" }}></i>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="research-table-wrap bg-white shadow-sm overflow-hidden" style={{ borderRadius: "20px" }}>
              <div className="table-responsive">
                <table className="table mb-0 align-middle">
                  <thead style={{ backgroundColor: "#42023e", color: "#fff" }}>
                    <tr>
                      <th className="px-4 py-3 text-center" style={{ width: "80px" }}>#</th>
                      <th className="px-4 py-3">{t("researchTitle")}</th>
                      <th className="px-4 py-3">{t("teacherName")}</th>
                      <th className="px-4 py-3 text-center" style={{ width: "150px" }}>{t("actions")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredResearches.length > 0 ? (
                      filteredResearches.map((research, index) => {
                        const teacherDto = teacherMap.get(research.teacherId);
                        const title = ScientificResearch.getTitle(research, locale);
                        const details = ScientificResearch.getDetails(research, locale);
                        return (
                          <tr key={research.id} className="border-bottom transition-all" style={{ cursor: "pointer" }}>
                            <td className="px-4 py-4 text-center fw-bold text-muted">{index + 1}</td>
                            <td className="px-4 py-4">
                              <h6 className="mb-1 fw-bold">{title}</h6>
                              {details && (
                                <p className="mb-0 text-muted small text-truncate" style={{ maxWidth: "400px" }}>
                                  {details.replace(/<[^>]*>?/gm, "")}
                                </p>
                              )}
                            </td>
                            <td className="px-4 py-4">
                              <div className="d-flex align-items-center gap-2">
                                <i className="fa-solid fa-user-tie text-muted"></i>
                                <span>{teacherDto ? Teacher.getName(teacherDto, locale) : "—"}</span>
                              </div>
                            </td>
                            <td className="px-4 py-4 text-center">
                              <div className="d-flex justify-content-center gap-2">
                                {research.downloadFile?.url && (
                                  <a 
                                    href={resolveUploadSrc(research.downloadFile.url, "")} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="btn btn-sm btn-primary rounded-pill px-3 d-flex align-items-center gap-2"
                                    style={{ backgroundColor: "#42023e", borderColor: "#42023e" }}
                                    title={t("download")}
                                  >
                                    <i className="fa-solid fa-download"></i>
                                  </a>
                                )}
                                <button 
                                  className="btn btn-sm btn-outline-primary rounded-pill px-3"
                                  style={{ borderColor: "#42023e", color: "#42023e" }}
                                  title={t("viewDetails")}
                                  onClick={() => alert(details.replace(/<[^>]*>?/gm, ""))}
                                >
                                  <i className="fa-solid fa-circle-info"></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td colSpan={4} className="px-4 py-5 text-center text-muted">
                          <i className="fa-solid fa-folder-open mb-3 d-block" style={{ fontSize: "3rem", opacity: 0.2 }}></i>
                          {t("noResearches")}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
