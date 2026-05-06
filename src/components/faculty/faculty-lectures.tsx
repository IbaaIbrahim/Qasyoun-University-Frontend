"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { StudyYearDto } from "@/lib/classes/study-year";
import { CourseDto } from "@/lib/classes/course";
import { LectureDto } from "@/lib/classes/lecture";
import { listCourses } from "@/lib/services/course.service";
import { listLectures } from "@/lib/services/lecture.service";
import { resolveUploadSrc } from "@/lib/api/client";

type IProps = {
  facultyId: number;
  initialStudyYears: StudyYearDto[];
  locale: string;
};

export default function FacultyLectures({ facultyId, initialStudyYears, locale }: IProps) {
  const t = useTranslations("Lectures");
  const [selectedYearId, setSelectedYearId] = useState<number | null>(
    initialStudyYears.find((y) => y.isCurrent)?.id || initialStudyYears[0]?.id || null
  );
  const [courses, setCourses] = useState<CourseDto[]>([]);
  const [selectedCourseId, setSelectedCourseId] = useState<number | null>(null);
  const [lectures, setLectures] = useState<LectureDto[]>([]);
  const [loadingCourses, setLoadingCourses] = useState(false);
  const [loadingLectures, setLoadingLectures] = useState(false);

  // Load courses when year or faculty changes
  useEffect(() => {
    const fetchCourses = async () => {
      if (selectedYearId) {
        setLoadingCourses(true);
        try {
          const data = await listCourses(facultyId, selectedYearId);
          const plainCourses = data.map((c) => c.toPlain());
          setCourses(plainCourses);
          if (plainCourses.length > 0) {
            setSelectedCourseId(plainCourses[0].id);
          } else {
            setSelectedCourseId(null);
            setLectures([]);
          }
        } finally {
          setLoadingCourses(false);
        }
      }
    };
    fetchCourses();
  }, [selectedYearId, facultyId]);

  // Load lectures when course changes
  useEffect(() => {
    const fetchLectures = async () => {
      if (selectedCourseId) {
        setLoadingLectures(true);
        try {
          const data = await listLectures(selectedCourseId);
          setLectures(data.map((l) => l.toPlain()));
        } finally {
          setLoadingLectures(false);
        }
      } else {
        setLectures([]);
      }
    };
    fetchLectures();
  }, [selectedCourseId]);

  const isRtl = locale === "ar";

  return (
    <section id="lectures" className="faculty-lectures-area pt-90 pb-90 bg-light-soft">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-wrapper mb-50 text-center">
              <h2 className="tp-section-title" style={{ color: "#42023e", fontWeight: 800 }}>
                {t("title")}
              </h2>
              <div
                className="title-line mx-auto mt-10"
                style={{ width: "60px", height: "4px", backgroundColor: "#42023e", borderRadius: "2px" }}
              ></div>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {/* Year Selection */}
          <div className="col-12 mb-30">
            <div className="year-selector-wrap d-flex align-items-center justify-content-center flex-wrap gap-3 p-4 bg-white shadow-sm" style={{ borderRadius: "15px" }}>
              <span className="fw-bold text-muted me-2">{t("selectYear")}:</span>
              {initialStudyYears.map((year) => (
                <button
                  key={year.id}
                  onClick={() => setSelectedYearId(year.id)}
                  className={`btn px-4 py-2 transition-all ${selectedYearId === year.id ? "active-year" : "inactive-year"}`}
                  style={{
                    borderRadius: "50px",
                    fontWeight: 600,
                    border: "2px solid transparent",
                    backgroundColor: selectedYearId === year.id ? "#42023e" : "#f8f9fa",
                    color: selectedYearId === year.id ? "#fff" : "#666",
                    boxShadow: selectedYearId === year.id ? "0 4px 15px rgba(66, 2, 62, 0.3)" : "none",
                  }}
                >
                  {isRtl ? year.name_AR || year.name : year.name}
                  {year.isCurrent && <span className="ms-2 badge bg-white text-primary" style={{ fontSize: "0.7rem", color: "#42023e !important" }}>{t("current")}</span>}
                </button>
              ))}
            </div>
          </div>

          {/* Courses List */}
          <div className="col-lg-4 col-md-5">
            <div className="course-sidebar p-0 bg-white shadow-sm overflow-hidden" style={{ borderRadius: "20px" }}>
              <div className="p-4" style={{ backgroundColor: "#42023e", color: "#fff" }}>
                <h5 className="mb-0 fw-bold d-flex align-items-center text-white">
                  <i className="fa-solid fa-book-open me-2"></i> {t("courses")}
                </h5>
              </div>
              <div className="course-list-container" style={{ maxHeight: "600px", overflowY: "auto" }}>
                {loadingCourses ? (
                  <div className="p-5 text-center"><div className="spinner-border text-primary" role="status"></div></div>
                ) : courses.length > 0 ? (
                  <ul className="list-unstyled mb-0">
                    {courses.map((course) => (
                      <li key={course.id} className="border-bottom last-child-0">
                        <button
                          onClick={() => setSelectedCourseId(course.id)}
                          className={`w-100 text-start px-4 py-3 transition-all d-flex align-items-center justify-content-between ${selectedCourseId === course.id ? "active-course" : "inactive-course"}`}
                          style={{
                            border: "none",
                            backgroundColor: selectedCourseId === course.id ? "rgba(66, 2, 62, 0.05)" : "transparent",
                            color: selectedCourseId === course.id ? "#42023e" : "#555",
                            fontWeight: selectedCourseId === course.id ? 700 : 500,
                            borderLeft: isRtl ? "none" : (selectedCourseId === course.id ? "4px solid #42023e" : "4px solid transparent"),
                            borderRight: isRtl ? (selectedCourseId === course.id ? "4px solid #42023e" : "4px solid transparent") : "none",
                          }}
                        >
                          <span>{isRtl ? course.name_AR || course.name : course.name}</span>
                          <i className={`fa-solid ${isRtl ? "fa-chevron-left" : "fa-chevron-right"} small opacity-50`}></i>
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="p-5 text-center text-muted">
                    <i className="fa-solid fa-folder-open mb-3 d-block" style={{ fontSize: "2rem" }}></i>
                    {t("noCourses")}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Lectures List */}
          <div className="col-lg-8 col-md-7">
            <div className="lecture-content-area bg-white shadow-sm p-4 p-md-5" style={{ borderRadius: "20px", minHeight: "400px" }}>
              {selectedCourseId ? (
                <>
                  <div className="d-flex align-items-center justify-content-between mb-4 border-bottom pb-3">
                    <h4 className="fw-bold mb-0" style={{ color: "#333" }}>
                      {isRtl ? courses.find(c => c.id === selectedCourseId)?.name_AR : courses.find(c => c.id === selectedCourseId)?.name}
                    </h4>
                    <span className="badge rounded-pill px-3 py-2" style={{ backgroundColor: "#e9ecef", color: "#42023e", fontWeight: 600 }}>
                      {lectures.length} {t("lectureCount")}
                    </span>
                  </div>

                  {loadingLectures ? (
                    <div className="p-5 text-center"><div className="spinner-border text-primary" role="status"></div></div>
                  ) : lectures.length > 0 ? (
                    <div className="lecture-items">
                      {lectures.map((lecture, index) => (
                        <div key={lecture.id} className="lecture-card mb-3 p-3 d-flex align-items-center justify-content-between transition-all"
                          style={{
                            borderRadius: "12px",
                            border: "1px solid #f0f0f0",
                            backgroundColor: "#fff"
                          }}>
                          <div className="d-flex align-items-center">
                            <div className="lecture-num me-3 d-flex align-items-center justify-content-center"
                              style={{
                                width: "40px",
                                height: "40px",
                                borderRadius: "10px",
                                backgroundColor: "rgba(66, 2, 62, 0.1)",
                                color: "#42023e",
                                fontWeight: 700
                              }}>
                              {lecture.lectureNumber || index + 1}
                            </div>
                            <div>
                              <h6 className="mb-1 fw-bold">{isRtl ? lecture.title_AR || lecture.title : lecture.title}</h6>
                              {lecture.content && (
                                <p className="mb-0 small text-muted text-truncate" style={{ maxWidth: "300px" }}>
                                  {isRtl ? lecture.content_AR || lecture.content : lecture.content}
                                </p>
                              )}
                            </div>
                          </div>
                          <div className="d-flex gap-2">
                            {lecture.file?.url && (
                              <>
                                <a
                                  href={resolveUploadSrc(lecture.file.url, "")}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="btn btn-sm btn-outline-primary rounded-pill px-3"
                                  style={{ borderColor: "#42023e", color: "#42023e" }}
                                >
                                  <i className="fa-solid fa-eye me-1"></i> {t("preview")}
                                </a>
                                <a
                                  href={resolveUploadSrc(lecture.file.url, "")}
                                  download={lecture.file.name || "lecture"}
                                  className="btn btn-sm btn-primary rounded-pill px-3"
                                  style={{ backgroundColor: "#42023e", borderColor: "#42023e" }}
                                >
                                  <i className="fa-solid fa-download me-1"></i> {t("download")}
                                </a>
                              </>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-5 text-center text-muted">
                      <i className="fa-solid fa-file-circle-exclamation mb-3 d-block" style={{ fontSize: "2rem" }}></i>
                      {t("noLectures")}
                    </div>
                  )}
                </>
              ) : (
                <div className="d-flex flex-column align-items-center justify-content-center h-100 text-muted opacity-50 p-5">
                  <i className="fa-solid fa-arrow-pointer mb-4" style={{ fontSize: "4rem" }}></i>
                  <h4>{t("selectCoursePrompt")}</h4>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .active-year:hover {
          transform: translateY(-3px);
        }
        .inactive-year:hover {
          background-color: #e9ecef !important;
          transform: translateY(-2px);
        }
        .transition-all {
          transition: all 0.3s ease;
        }
        .inactive-course:hover {
          background-color: rgba(66, 2, 62, 0.02) !important;
          padding-left: 2rem !important;
        }
        .lecture-card:hover {
          box-shadow: 0 8px 15px rgba(0,0,0,0.05);
          transform: scale(1.01);
          border-color: rgba(66, 2, 62, 0.2) !important;
        }
        .last-child-0:last-child {
          border-bottom: none !important;
        }
      `}</style>
    </section>
  );
}
