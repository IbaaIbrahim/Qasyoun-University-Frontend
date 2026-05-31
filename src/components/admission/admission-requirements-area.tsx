"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { resolveUploadSrc } from "@/lib/api/client";

export type StudentCategoryData = {
  section: string;
  table: Record<string, string>[];
  file: string;
};

export type YearAdmissionData = {
  yearId: number;
  yearName: string;
  isCurrent: boolean;
  categories: Record<string, StudentCategoryData>;
};

type Props = {
  yearsData: YearAdmissionData[];
  locale: string;
};

const SECTIONS = [
  {
    key: "syrian_students_admission_requirements",
    translationKey: "syrianStudentsAdmissionRequirements",
  },
  {
    key: "syrian_students_foreign_certificates_admission_requirements",
    translationKey: "syrianStudentsForeignCertificatesAdmissionRequirements",
  },
  {
    key: "foreign_and_arab_students_admission_requirements",
    translationKey: "foreignAndArabStudentsAdmissionRequirements",
  },
  {
    key: "similar_transfer_prioritization_admission_requirements",
    translationKey: "similarTransferPrioritizationAdmissionRequirements",
  },
];

export default function AdmissionRequirementsArea({ yearsData, locale }: Props) {
  const tNav = useTranslations("Nav");
  const tStatic = useTranslations("StaticPage");
  const tQpu = useTranslations("qpu.dynamicContent");

  const [activeYearId, setActiveYearId] = useState<number | null>(
    yearsData.find((y) => y.isCurrent)?.yearId || yearsData[0]?.yearId || null
  );

  const [activeSection, setActiveSection] = useState<string>(SECTIONS[0].key);

  const activeYearData = yearsData.find((y) => y.yearId === activeYearId);
  const activeCategory = activeYearData?.categories[activeSection];
  const tableData = activeCategory?.table || [];
  const pdfHref = activeCategory?.file ? resolveUploadSrc(activeCategory.file, "") : "";

  const isRtl = locale === "ar";

  return (
    <section className="admission-requirements-area pt-60 pb-120 bg-light-soft">
      <div className="container">
        {yearsData.length === 0 ? (
          <div className="text-center p-5 bg-white shadow-sm rounded-3">
            <i className="fa-solid fa-folder-open mb-3 d-block text-muted" style={{ fontSize: "3rem" }}></i>
            <p className="text-muted mb-0">{tStatic("empty")}</p>
          </div>
        ) : (
          <div className="row g-4">
            {/* Sidebar (Study Years) */}
            <div className="col-lg-3 col-md-4">
              <div
                className="year-sidebar p-0 bg-white shadow-sm overflow-hidden"
                style={{ borderRadius: "20px", border: "1px solid rgba(0,0,0,0.03)" }}
              >
                <div className="p-4" style={{ backgroundColor: "#42023e", color: "#fff" }}>
                  <h5 className="mb-0 fw-bold d-flex align-items-center gap-2 text-white">
                    <i className="fa-solid fa-calendar-days" aria-hidden />
                    {tNav("academicCalendar")}
                  </h5>
                </div>
                <div className="year-list-container">
                  <ul className="list-unstyled mb-0">
                    {yearsData.map((y) => (
                      <li key={y.yearId} className="border-bottom last-child-0">
                        <button
                          onClick={() => setActiveYearId(y.yearId)}
                          className={`w-100 text-start px-4 py-3 transition-all d-flex align-items-center justify-content-between gap-2 ${
                            activeYearId === y.yearId ? "active-year-btn" : "inactive-year-btn"
                          }`}
                          style={{
                            border: "none",
                            backgroundColor: activeYearId === y.yearId ? "rgba(66, 2, 62, 0.05)" : "transparent",
                            color: activeYearId === y.yearId ? "#42023e" : "#555",
                            fontWeight: activeYearId === y.yearId ? 700 : 500,
                            borderLeft: isRtl ? "none" : (activeYearId === y.yearId ? "4px solid #42023e" : "4px solid transparent"),
                            borderRight: isRtl ? (activeYearId === y.yearId ? "4px solid #42023e" : "4px solid transparent") : "none",
                          }}
                        >
                          <span className="d-flex align-items-center gap-2">
                            {y.yearName}
                            {y.isCurrent && (
                              <span
                                className="badge bg-primary text-white"
                                style={{
                                  fontSize: "0.7rem",
                                  backgroundColor: "#42023e",
                                  padding: "3px 8px",
                                }}
                              >
                                {isRtl ? "الحالية" : "Current"}
                              </span>
                            )}
                          </span>
                          <i className={`fa-solid ${isRtl ? "fa-chevron-left" : "fa-chevron-right"} small opacity-50`}></i>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="col-lg-9 col-md-8">
              <div
                className="requirements-content-wrapper bg-white shadow-sm p-4 p-md-5"
                style={{ borderRadius: "20px", border: "1px solid rgba(0,0,0,0.03)", minHeight: "450px" }}
              >
                {/* Active Year Title */}
                <div className="mb-4 pb-3 border-bottom d-flex align-items-center justify-content-between">
                  <h4 className="fw-bold mb-0" style={{ color: "#1c2b36" }}>
                    {activeYearData?.yearName}
                  </h4>
                </div>

                {/* Category Grid Tabs */}
                <div className="category-tabs-grid mb-40">
                  {SECTIONS.map((sec) => {
                    const isActive = activeSection === sec.key;
                    let iconClass = "fa-graduation-cap";
                    if (sec.key === "syrian_students_foreign_certificates_admission_requirements") {
                      iconClass = "fa-passport";
                    } else if (sec.key === "foreign_and_arab_students_admission_requirements") {
                      iconClass = "fa-globe";
                    } else if (sec.key === "similar_transfer_prioritization_admission_requirements") {
                      iconClass = "fa-right-left";
                    }

                    return (
                      <button
                        key={sec.key}
                        onClick={() => setActiveSection(sec.key)}
                        className={`btn-tab transition-all d-flex align-items-center justify-content-center gap-2 ${
                          isActive ? "active" : ""
                        }`}
                      >
                        <i className={`fa-solid ${iconClass} tab-icon`} />
                        <span>{tQpu(sec.translationKey as never)}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Tab content */}
                <div className="tab-content-area">
                  {tableData.length === 0 && !pdfHref ? (
                    <div className="text-center py-5 text-muted">
                      <i
                        className="fa-solid fa-file-circle-exclamation mb-3 d-block"
                        style={{ fontSize: "2.5rem" }}
                      ></i>
                      <p className="mb-0">{tStatic("empty")}</p>
                    </div>
                  ) : (
                    <div>
                      {/* Render Requirements Table */}
                      {tableData.length > 0 && (
                        <div className="table-responsive mb-4">
                          <table className="table table-hover align-middle mb-0">
                            <thead
                              style={{
                                backgroundColor: "#42023e",
                                color: "#fff",
                              }}
                            >
                              <tr>
                                <th
                                  scope="col"
                                  style={{
                                    width: "60px",
                                    backgroundColor: "inherit",
                                    color: "inherit",
                                  }}
                                >
                                  #
                                </th>
                                <th
                                  scope="col"
                                  style={{
                                    backgroundColor: "inherit",
                                    color: "inherit",
                                  }}
                                >
                                  {tQpu("certificateType")}
                                </th>
                                <th
                                  scope="col"
                                  style={{
                                    backgroundColor: "inherit",
                                    color: "inherit",
                                  }}
                                >
                                  {tQpu("minMarks")}
                                </th>
                                <th
                                  scope="col"
                                  style={{
                                    backgroundColor: "inherit",
                                    color: "inherit",
                                  }}
                                >
                                  {tQpu("maxMarks")}
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {tableData.map((row, idx) => (
                                <tr key={idx}>
                                  <td className="text-muted fw-bold">{idx + 1}</td>
                                  <td>{row.certificate_type || "—"}</td>
                                  <td>{row.min_marks || "—"}</td>
                                  <td>{row.max_marks || "—"}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* PDF Attachment Download button */}
                      {pdfHref && (
                        <div className="mt-4 text-center text-md-start">
                          <a
                            href={pdfHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="tp-btn"
                            style={{
                              backgroundColor: "#42023e",
                              color: "#fff",
                              padding: "12px 25px",
                              borderRadius: "10px",
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "10px",
                              fontSize: "1rem",
                              textDecoration: "none",
                              transition: "all 0.3s ease",
                            }}
                          >
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4" />
                              <polyline points="7 10 12 15 17 10" />
                              <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                            {tStatic("downloadPdf")}
                          </a>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .transition-all {
          transition: all 0.3s ease;
        }
        .inactive-year-btn:hover {
          background-color: rgba(66, 2, 62, 0.02) !important;
          padding-inline-start: 2rem !important;
        }
        .active-year-btn {
          box-shadow: inset 4px 0 0 0 #42023e;
        }
        [dir="rtl"] .active-year-btn {
          box-shadow: inset -4px 0 0 0 #42023e;
        }
        .category-tabs-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
        @media (min-width: 1200px) {
          .category-tabs-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        @media (max-width: 576px) {
          .category-tabs-grid {
            grid-template-columns: 1fr;
          }
        }
        .btn-tab {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 16px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 0.95rem;
          border: 2px solid #e9ecef !important;
          background-color: #f8f9fa !important;
          color: #555 !important;
          text-align: center;
          box-shadow: 0 2px 4px rgba(0,0,0,0.01);
          cursor: pointer;
          outline: none;
        }
        .btn-tab:hover {
          border-color: rgba(66, 2, 62, 0.4) !important;
          color: #42023e !important;
          transform: translateY(-2px);
        }
        .btn-tab.active {
          background-color: #42023e !important;
          border-color: #42023e !important;
          color: #fff !important;
          box-shadow: 0 4px 15px rgba(66, 2, 62, 0.25) !important;
        }
        .tab-icon {
          font-size: 1.15rem;
          color: #42023e;
          transition: color 0.3s ease, opacity 0.3s ease;
          opacity: 0.85;
        }
        .btn-tab:hover .tab-icon {
          color: #42023e;
          opacity: 1;
        }
        .btn-tab.active .tab-icon {
          color: #fff !important;
          opacity: 1;
        }
        .last-child-0:last-child {
          border-bottom: none !important;
        }
      `}</style>
    </section>
  );
}
