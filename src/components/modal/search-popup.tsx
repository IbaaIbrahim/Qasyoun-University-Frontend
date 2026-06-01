'use client';

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { CloseThreeSvg, SearchSvg } from "../svg";
import { performSearch, getCombinedSearchMaps, FacultyLookup } from "@/lib/services/search.service";
import { SearchResponseDto } from "@/lib/api/search.api";
import { resolveUploadSrc } from "@/lib/api/client";

type IProps = {
  isSearchOpen: boolean;
  onHide: () => void;
};

const TEAM_FALLBACK_IMAGE = "/assets/img/team/about-team/about-team-1.jpg";
const FACULTY_FALLBACK_IMAGE = "/assets/img/icon/faculty-icon.png";

export default function SearchPopup({ isSearchOpen, onHide }: IProps) {
  const t = useTranslations("Search");
  const locale = useLocale();
  const isRtl = locale === "ar";

  const [mounted, setMounted] = useState(false);
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [results, setResults] = useState<SearchResponseDto | null>(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  // Prevent background scrolling when search is open
  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSearchOpen]);

  // Mappings
  const [facultyMap, setFacultyMap] = useState<Record<number, FacultyLookup>>({});
  const [teacherFacultyMap, setTeacherFacultyMap] = useState<Record<number, FacultyLookup>>({});

  const inputRef = useRef<HTMLInputElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const dragDistance = useRef(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = tabsRef.current;
    if (!container) return;
    setIsDragging(true);
    setStartX(e.pageX - container.offsetLeft);
    setScrollLeft(container.scrollLeft);
    dragDistance.current = 0;
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    const container = tabsRef.current;
    if (!container) return;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5;
    container.scrollLeft = scrollLeft - walk;
    dragDistance.current = Math.abs(x - startX);
  };

  const handleTabClick = (catId: string, e: React.MouseEvent) => {
    if (dragDistance.current > 10) {
      e.preventDefault();
      return;
    }
    setActiveTab(catId);
  };

  // Load maps once when component mounts
  useEffect(() => {
    getCombinedSearchMaps().then((maps) => {
      setFacultyMap(maps.facultyMap);
      setTeacherFacultyMap(maps.teacherFacultyMap);
    });
  }, []);

  // Focus input when search is opened
  useEffect(() => {
    if (isSearchOpen) {
      const focusInput = () => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      };

      focusInput();
      const t1 = setTimeout(focusInput, 50);
      const t2 = setTimeout(focusInput, 150);
      const t3 = setTimeout(focusInput, 300);
      const t4 = setTimeout(focusInput, 450);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
        clearTimeout(t4);
      };
    } else {
      setTimeout(() => {
        setQuery("");
        setDebouncedQuery("");
        setResults(null);
        setActiveTab("all");
      }, 0);
    }
  }, [isSearchOpen]);

  // Debounce input value
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);
    return () => clearTimeout(timer);
  }, [query]);

  // Handle Search API calls
  useEffect(() => {
    if (!debouncedQuery.trim() || debouncedQuery.length < 2) {
      setTimeout(() => {
        setResults(null);
        setLoading(false);
      }, 0);
      return;
    }

    setTimeout(() => {
      setLoading(true);
      setError(null);
    }, 0);

    performSearch(debouncedQuery)
      .then((data) => {
        setResults(data);
      })
      .catch((err) => {
        console.error("Search failed:", err);
        setError(err.message || "Search failed");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [debouncedQuery]);

  // Close search on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isSearchOpen) {
        onHide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSearchOpen, onHide]);

  // Helper to determine list count
  const facultiesCount = results?.faculties?.count || 0;
  const labsCount = results?.labs?.count || 0;
  const teachersCount = results?.teachers?.count || 0;
  const coursesCount = results?.courses?.count || 0;
  const researchesCount = results?.scientificResearches?.count || 0;
  const graduatedStudentsCount = results?.graduatedStudents?.count || 0;
  const contentsCount = results?.contents?.count || 0;
  const vacanciesCount = results?.vacancies?.count || 0;

  const totalCount = results?.totalCount || 0;

  // Tabs config
  const categories = [
    { id: "all", label: t("title"), count: totalCount },
    { id: "faculties", label: t("faculties"), count: facultiesCount },
    { id: "labs", label: t("labs"), count: labsCount },
    { id: "teachers", label: t("teachers"), count: teachersCount },
    { id: "courses", label: t("courses"), count: coursesCount },
    { id: "scientificResearches", label: t("scientificResearches"), count: researchesCount },
    { id: "graduatedStudents", label: t("graduatedStudents"), count: graduatedStudentsCount },
    { id: "contents", label: t("contents"), count: contentsCount },
    { id: "vacancies", label: t("vacancies"), count: vacanciesCount },
  ];

  const activeCategories = categories.filter((cat) => cat.id === "all" || cat.count > 0);

  // Link Resolvers
  const getFacultyLink = (item: any) => `/faculties/${item.slug}`;

  const getLabLink = (item: any) => {
    const facultySlug = item.faculty?.slug || facultyMap[Number(item.facultyId)]?.slug || "overview";
    return `/faculties/${facultySlug}/laboratory/${item.id}`;
  };

  const getTeacherLink = (item: any) => {
    const facultySlug = teacherFacultyMap[Number(item.id)]?.slug || "overview";
    return `/faculties/${facultySlug}/staff/${item.id}`;
  };

  const getCourseLink = (item: any) => {
    const facultySlug = facultyMap[Number(item.facultyId)]?.slug || "overview";
    return `/faculties/${facultySlug}/lectures#lectures`;
  };

  const getResearchLink = (item: any) => {
    const facultySlug = facultyMap[Number(item.facultyId)]?.slug || "overview";
    return `/faculties/${facultySlug}/research#research`;
  };

  const getGraduatedStudentLink = (item: any) => {
    const facultySlug = facultyMap[Number(item.facultyId)]?.slug || "overview";
    return `/faculties/${facultySlug}#graduated-students`;
  };

  const getVacancyLink = (item: any) => `/vacancies`;

  const getContentLink = (item: any) => {
    if (item.referenceType === "about") {
      return `/about/${item.section.replace(/_/g, "-")}`;
    }
    if (item.referenceType === "admission") {
      return `/admission/${item.section.replace(/_/g, "-")}`;
    }
    if (item.referenceType === "student_life") {
      return `/student-life/${item.section.replace(/_/g, "-")}`;
    }
    if (item.referenceType === "site_pages") {
      if (item.section === "directorates") return "/directorates";
      if (item.section === "higher_education_decisions") return "/decisions";
    }
    if (item.referenceType === "faculty") {
      return `/faculties/${item.referenceId}`;
    }
    return "/";
  };

  if (!mounted) return null;

  return createPortal(
    <>
      <style>{`
        .qpu-search-overlay {
          position: fixed;
          left: 0;
          top: 0;
          width: 100%;
          height: 100vh;
          z-index: 9999;
          backdrop-filter: blur(16px) saturate(180%);
          -webkit-backdrop-filter: blur(16px) saturate(180%);
          background-color: rgba(255, 255, 255, 0.85);
          opacity: 0;
          visibility: hidden;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .qpu-search-overlay.opened {
          opacity: 1;
          visibility: visible;
        }
        .qpu-search-wrapper {
          max-width: 900px;
          margin: 60px auto 0 auto;
          padding: 0 20px;
          display: flex;
          flex-direction: column;
          height: calc(100vh - 120px);
        }
        @media (max-width: 768px) {
          .qpu-search-wrapper {
            margin-top: 30px;
            height: calc(100vh - 60px);
          }
        }
        .qpu-search-close-btn {
          position: absolute;
          top: 24px;
          right: 24px;
          height: 48px;
          width: 48px;
          border-radius: 50%;
          border: 1px solid rgba(0, 0, 0, 0.08);
          background: rgba(255, 255, 255, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease-in-out;
          color: #333;
        }
        .qpu-search-close-btn:hover {
          background: #42023e;
          color: #fff;
          transform: rotate(90deg);
          box-shadow: 0 4px 12px rgba(66, 2, 62, 0.2);
        }
        [dir="rtl"] .qpu-search-close-btn {
          right: auto;
          left: 24px;
        }
        .qpu-search-box {
          position: relative;
          margin-bottom: 24px;
          width: 100%;
        }
        input[type="text"].qpu-search-input {
          width: 100%;
          height: 64px;
          padding: 0 80px;
          font-size: 20px;
          font-weight: 500;
          border-radius: 20px;
          border: 2px solid rgba(66, 2, 62, 0.12);
          background: rgba(255, 255, 255, 0.95);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          color: #1a1a24;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
        }
        input[type="text"].qpu-search-input:focus {
          border-color: #42023e;
          box-shadow: 0 0 0 4px rgba(66, 2, 62, 0.15), 0 12px 30px rgba(66, 2, 62, 0.06);
          background: #fff;
          outline: none;
        }
        .qpu-search-icon-btn {
          position: absolute;
          left: 22px;
          top: 50%;
          transform: translateY(-50%);
          color: #42023e;
          background: transparent;
          border: none;
          font-size: 22px;
          display: flex;
          align-items: center;
          pointer-events: none;
        }
        [dir="rtl"] .qpu-search-icon-btn {
          left: auto;
          right: 22px;
        }
        .qpu-search-clear-btn {
          position: absolute;
          right: 22px;
          top: 50%;
          transform: translateY(-50%);
          color: #888;
          background: rgba(0, 0, 0, 0.06);
          border: none;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
          padding: 0;
        }
        .qpu-search-clear-btn:hover {
          background: rgba(66, 2, 62, 0.1);
          color: #42023e;
        }
        [dir="rtl"] .qpu-search-clear-btn {
          right: auto;
          left: 22px;
        }
        .qpu-tabs-scroll {
          display: flex;
          gap: 10px;
          overflow-x: auto;
          padding: 4px 0 16px 0;
          margin-bottom: 8px;
          scrollbar-width: none;
          flex-shrink: 0;
          cursor: grab;
          user-select: none;
        }
        .qpu-tabs-scroll.dragging {
          cursor: grabbing;
        }
        .qpu-tabs-scroll::-webkit-scrollbar {
          display: none;
        }
        .qpu-tab-btn {
          padding: 10px 22px;
          border-radius: 99px;
          font-size: 14px;
          font-weight: 600;
          border: 1px solid rgba(0, 0, 0, 0.06);
          background: rgba(255, 255, 255, 0.7);
          color: #555;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .qpu-tab-btn:hover {
          background: rgba(66, 2, 62, 0.05);
          color: #42023e;
          border-color: rgba(66, 2, 62, 0.15);
        }
        .qpu-tab-btn.active {
          background: #42023e;
          color: #fff;
          border-color: #42023e;
          box-shadow: 0 6px 16px rgba(66, 2, 62, 0.25);
        }
        .qpu-tab-count {
          background: rgba(0, 0, 0, 0.06);
          color: #666;
          padding: 2px 8px;
          border-radius: 10px;
          font-size: 11px;
          font-weight: 700;
        }
        .qpu-tab-btn.active .qpu-tab-count {
          background: rgba(255, 255, 255, 0.2);
          color: #fff;
        }
        .qpu-results-list {
          flex-grow: 1;
          overflow-y: auto;
          padding-bottom: 40px;
          padding-right: 6px;
          scrollbar-width: thin;
          scrollbar-color: rgba(66, 2, 62, 0.2) transparent;
        }
        [dir="rtl"] .qpu-results-list {
          padding-right: 0;
          padding-left: 6px;
        }
        .qpu-results-list::-webkit-scrollbar {
          width: 6px;
        }
        .qpu-results-list::-webkit-scrollbar-thumb {
          background-color: rgba(66, 2, 62, 0.25);
          border-radius: 10px;
        }
        .qpu-result-section-header {
          font-size: 13px;
          font-weight: 700;
          color: #42023e;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          margin: 20px 0 10px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px dashed rgba(66, 2, 62, 0.15);
          padding-bottom: 6px;
        }
        .qpu-result-section-view-all {
          font-size: 11px;
          color: #42023e;
          text-decoration: underline;
          cursor: pointer;
          font-weight: 600;
        }
        .qpu-result-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.65);
          border: 1px solid rgba(255, 255, 255, 0.8);
          margin-bottom: 12px;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          text-decoration: none;
          color: inherit;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.015);
        }
        .qpu-result-card:hover {
          transform: translateY(-2px);
          background: #fff;
          border-color: rgba(66, 2, 62, 0.2);
          box-shadow: 0 10px 25px rgba(66, 2, 62, 0.07);
        }
        .qpu-result-thumb-wrapper {
          width: 56px;
          height: 56px;
          border-radius: 12px;
          flex-shrink: 0;
          overflow: hidden;
          background: rgba(66, 2, 62, 0.04);
          border: 1px solid rgba(0, 0, 0, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .qpu-result-thumb {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .qpu-result-info {
          flex-grow: 1;
          min-width: 0;
        }
        .qpu-result-title {
          font-size: 15px;
          font-weight: 600;
          color: #1a1a24;
          margin-bottom: 4px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .qpu-result-subtitle {
          font-size: 13px;
          color: #666;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .qpu-result-badge-list {
          display: flex;
          gap: 6px;
          flex-shrink: 0;
          flex-wrap: wrap;
        }
        .qpu-result-badge {
          padding: 4px 10px;
          border-radius: 8px;
          background: rgba(66, 2, 62, 0.06);
          color: #42023e;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
        }
        .qpu-result-cv-badge {
          padding: 4px 10px;
          border-radius: 8px;
          background: #28a745;
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.2s;
        }
        .qpu-result-cv-badge:hover {
          background: #218838;
        }
        .qpu-search-spinner-container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 60px 0;
        }
        .qpu-search-spinner {
          width: 32px;
          height: 32px;
          border: 3px solid rgba(66, 2, 62, 0.1);
          border-radius: 50%;
          border-top-color: #42023e;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .qpu-skeleton-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.4);
          margin-bottom: 12px;
        }
        .qpu-skeleton-thumb {
          width: 56px;
          height: 56px;
          border-radius: 12px;
        }
        .qpu-skeleton-title {
          height: 14px;
          width: 60%;
          border-radius: 4px;
          margin-bottom: 8px;
        }
        .qpu-skeleton-subtitle {
          height: 10px;
          width: 40%;
          border-radius: 3px;
        }
        .qpu-search-empty-state {
          text-align: center;
          padding: 60px 20px;
          color: #666;
        }
        .qpu-search-empty-state h4 {
          font-size: 18px;
          font-weight: 600;
          color: #42023e;
          margin-bottom: 8px;
        }
      `}</style>

      <div className={`qpu-search-overlay ${isSearchOpen ? "opened" : ""}`}>
        <button className="qpu-search-close-btn" onClick={onHide}>
          <CloseThreeSvg clr="currentColor" />
        </button>

        <div className="qpu-search-wrapper">
          {/* Search Box */}
          <div className="qpu-search-box">
            <input
              ref={inputRef}
              type="text"
              className="qpu-search-input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("placeholder")}
            />
            <span className="qpu-search-icon-btn">
              <SearchSvg />
            </span>
            {query && (
              <button className="qpu-search-clear-btn" onClick={() => setQuery("")}>
                ✕
              </button>
            )}
          </div>

          {/* Search Results Summary & Tabs */}
          {debouncedQuery.trim().length >= 2 && !loading && results && (
            <div
              ref={tabsRef}
              className={`qpu-tabs-scroll ${isDragging ? "dragging" : ""}`}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
              {activeCategories.map((cat) => (
                <button
                  key={cat.id}
                  className={`qpu-tab-btn ${activeTab === cat.id ? "active" : ""}`}
                  onClick={(e) => handleTabClick(cat.id, e)}
                >
                  {cat.label}
                  <span className="qpu-tab-count">{cat.count}</span>
                </button>
              ))}
            </div>
          )}

          {/* Results Container */}
          <div className="qpu-results-list">
            {/* Minimal Query Character Count Hint */}
            {query.trim().length > 0 && query.trim().length < 2 && (
              <div className="qpu-search-empty-state">
                <p>{t("minChars")}</p>
              </div>
            )}

            {/* Spinner Loader */}
            {loading && (
              <div className="qpu-search-spinner-container">
                <div className="qpu-search-spinner"></div>
              </div>
            )}

            {/* Empty State */}
            {!loading && debouncedQuery.trim().length >= 2 && results && totalCount === 0 && (
              <div className="qpu-search-empty-state">
                <h4>{t("noResults", { query: debouncedQuery })}</h4>
              </div>
            )}

            {/* Render Data */}
            {!loading && results && totalCount > 0 && (
              <>
                {/* 1. FACULTIES SECTION */}
                {(activeTab === "all" || activeTab === "faculties") && facultiesCount > 0 && (
                  <div>
                    {activeTab === "all" && (
                      <div className="qpu-result-section-header">
                        <span>{t("faculties")}</span>
                        {facultiesCount > 3 && (
                          <span className="qpu-result-section-view-all" onClick={() => setActiveTab("faculties")}>
                            {t("totalCount", { count: facultiesCount })}
                          </span>
                        )}
                      </div>
                    )}
                    {(activeTab === "faculties" ? results.faculties?.items : results.faculties?.items?.slice(0, 3))?.map((item: any) => (
                      <Link
                        key={item.id}
                        href={getFacultyLink(item)}
                        onClick={onHide}
                        className="qpu-result-card"
                      >
                        <div className="qpu-result-thumb-wrapper">
                          <img
                            src={resolveUploadSrc(item.picture?.thumbnail || item.picture?.url || item.logo?.thumbnail || item.logo?.url, FACULTY_FALLBACK_IMAGE)}
                            alt={isRtl && item.name_AR ? item.name_AR : item.name}
                            className="qpu-result-thumb"
                          />
                        </div>
                        <div className="qpu-result-info">
                          <div className="qpu-result-title">
                            {isRtl && item.name_AR ? item.name_AR : item.name}
                          </div>
                          <div className="qpu-result-subtitle">
                            {getFacultyLink(item)}
                          </div>
                        </div>
                        <div className="qpu-result-badge-list">
                          <span className="qpu-result-badge">{t("faculties")}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}

                {/* 2. LABORATORIES SECTION */}
                {(activeTab === "all" || activeTab === "labs") && labsCount > 0 && (
                  <div>
                    {activeTab === "all" && (
                      <div className="qpu-result-section-header">
                        <span>{t("labs")}</span>
                        {labsCount > 3 && (
                          <span className="qpu-result-section-view-all" onClick={() => setActiveTab("labs")}>
                            {t("totalCount", { count: labsCount })}
                          </span>
                        )}
                      </div>
                    )}
                    {(activeTab === "labs" ? results.labs?.items : results.labs?.items?.slice(0, 3))?.map((item: any) => (
                      <Link
                        key={item.id}
                        href={getLabLink(item)}
                        onClick={onHide}
                        className="qpu-result-card"
                      >
                        <div className="qpu-result-thumb-wrapper">
                          <img
                            src={resolveUploadSrc(item.picture?.thumbnail || item.picture?.url, FACULTY_FALLBACK_IMAGE)}
                            alt={isRtl && item.name_AR ? item.name_AR : item.name}
                            className="qpu-result-thumb"
                          />
                        </div>
                        <div className="qpu-result-info">
                          <div className="qpu-result-title">
                            {isRtl && item.name_AR ? item.name_AR : item.name}
                          </div>
                          <div className="qpu-result-subtitle">
                            {isRtl && item.faculty?.name_AR ? item.faculty?.name_AR : item.faculty?.name}
                          </div>
                        </div>
                        <div className="qpu-result-badge-list">
                          <span className="qpu-result-badge">{t("labs")}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}

                {/* 3. TEACHERS SECTION */}
                {(activeTab === "all" || activeTab === "teachers") && teachersCount > 0 && (
                  <div>
                    {activeTab === "all" && (
                      <div className="qpu-result-section-header">
                        <span>{t("teachers")}</span>
                        {teachersCount > 3 && (
                          <span className="qpu-result-section-view-all" onClick={() => setActiveTab("teachers")}>
                            {t("totalCount", { count: teachersCount })}
                          </span>
                        )}
                      </div>
                    )}
                    {(activeTab === "teachers" ? results.teachers?.items : results.teachers?.items?.slice(0, 3))?.map((item: any) => (
                      <div key={item.id} className="qpu-result-card" style={{ cursor: "default" }}>
                        <Link
                          href={getTeacherLink(item)}
                          onClick={onHide}
                          className="qpu-result-thumb-wrapper"
                          style={{ cursor: "pointer" }}
                        >
                          <img
                            src={resolveUploadSrc(item.picture?.thumbnail || item.picture?.url, TEAM_FALLBACK_IMAGE)}
                            alt={isRtl && item.name_AR ? item.name_AR : item.name}
                            className="qpu-result-thumb"
                          />
                        </Link>
                        <div className="qpu-result-info">
                          <Link
                            href={getTeacherLink(item)}
                            onClick={onHide}
                            className="qpu-result-title"
                            style={{ display: "block", textDecoration: "none", cursor: "pointer" }}
                          >
                            {isRtl && item.name_AR ? item.name_AR : item.name}
                          </Link>
                          <div className="qpu-result-subtitle">
                            {isRtl
                              ? item.position_AR || item.specialist_AR || item.scientificDegree_AR
                              : item.position || item.specialist || item.scientificDegree}
                          </div>
                        </div>
                        <div className="qpu-result-badge-list" style={{ alignItems: "center" }}>
                          {item.cvArabic?.url && (
                            <a
                              href={resolveUploadSrc(item.cvArabic.url, "")}
                              target="_blank"
                              rel="noreferrer"
                              className="qpu-result-cv-badge"
                            >
                              CV (AR)
                            </a>
                          )}
                          {item.cvEnglish?.url && (
                            <a
                              href={resolveUploadSrc(item.cvEnglish.url, "")}
                              target="_blank"
                              rel="noreferrer"
                              className="qpu-result-cv-badge"
                            >
                              CV (EN)
                            </a>
                          )}
                          <span className="qpu-result-badge">{t("teachers")}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* 4. COURSES SECTION */}
                {(activeTab === "all" || activeTab === "courses") && coursesCount > 0 && (
                  <div>
                    {activeTab === "all" && (
                      <div className="qpu-result-section-header">
                        <span>{t("courses")}</span>
                        {coursesCount > 3 && (
                          <span className="qpu-result-section-view-all" onClick={() => setActiveTab("courses")}>
                            {t("totalCount", { count: coursesCount })}
                          </span>
                        )}
                      </div>
                    )}
                    {(activeTab === "courses" ? results.courses?.items : results.courses?.items?.slice(0, 3))?.map((item: any) => (
                      <Link
                        key={item.id}
                        href={getCourseLink(item)}
                        onClick={onHide}
                        className="qpu-result-card"
                      >
                        <div className="qpu-result-info">
                          <div className="qpu-result-title">
                            {isRtl && item.name_AR ? item.name_AR : item.name}
                          </div>
                          <div className="qpu-result-subtitle">
                            {isRtl && item.description_AR
                              ? item.description_AR.replace(/<[^>]*>/g, "")
                              : item.description?.replace(/<[^>]*>/g, "")}
                          </div>
                        </div>
                        <div className="qpu-result-badge-list">
                          <span className="qpu-result-badge">{t("courses")}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}

                {/* 5. SCIENTIFIC RESEARCHES SECTION */}
                {(activeTab === "all" || activeTab === "scientificResearches") && researchesCount > 0 && (
                  <div>
                    {activeTab === "all" && (
                      <div className="qpu-result-section-header">
                        <span>{t("scientificResearches")}</span>
                        {researchesCount > 3 && (
                          <span className="qpu-result-section-view-all" onClick={() => setActiveTab("scientificResearches")}>
                            {t("totalCount", { count: researchesCount })}
                          </span>
                        )}
                      </div>
                    )}
                    {(activeTab === "scientificResearches" ? results.scientificResearches?.items : results.scientificResearches?.items?.slice(0, 3))?.map((item: any) => (
                      <Link
                        key={item.id}
                        href={getResearchLink(item)}
                        onClick={onHide}
                        className="qpu-result-card"
                      >
                        <div className="qpu-result-info">
                          <div className="qpu-result-title">
                            {isRtl && item.title_AR ? item.title_AR : item.title}
                          </div>
                          <div className="qpu-result-subtitle">
                            {isRtl && item.details_AR
                              ? item.details_AR.replace(/<[^>]*>/g, "")
                              : item.details?.replace(/<[^>]*>/g, "")}
                          </div>
                        </div>
                        <div className="qpu-result-badge-list">
                          {item.downloadFile?.url && (
                            <a
                              href={resolveUploadSrc(item.downloadFile.url, "")}
                              target="_blank"
                              rel="noreferrer"
                              className="qpu-result-cv-badge"
                              style={{ background: "#42023e" }}
                              onClick={(e) => e.stopPropagation()}
                            >
                              PDF
                            </a>
                          )}
                          <span className="qpu-result-badge">{t("scientificResearches")}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}

                {/* 6. GRADUATED STUDENTS SECTION */}
                {(activeTab === "all" || activeTab === "graduatedStudents") && graduatedStudentsCount > 0 && (
                  <div>
                    {activeTab === "all" && (
                      <div className="qpu-result-section-header">
                        <span>{t("graduatedStudents")}</span>
                        {graduatedStudentsCount > 3 && (
                          <span className="qpu-result-section-view-all" onClick={() => setActiveTab("graduatedStudents")}>
                            {t("totalCount", { count: graduatedStudentsCount })}
                          </span>
                        )}
                      </div>
                    )}
                    {(activeTab === "graduatedStudents" ? results.graduatedStudents?.items : results.graduatedStudents?.items?.slice(0, 3))?.map((item: any) => (
                      <Link
                        key={item.id}
                        href={getGraduatedStudentLink(item)}
                        onClick={onHide}
                        className="qpu-result-card"
                      >
                        <div className="qpu-result-info">
                          <div className="qpu-result-title">
                            {isRtl && item.fullName_AR ? item.fullName_AR : item.fullName}
                          </div>
                          <div className="qpu-result-subtitle">
                            {t("average")}: {item.average}%
                          </div>
                        </div>
                        <div className="qpu-result-badge-list">
                          <span className="qpu-result-badge">{t("graduatedStudents")}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}

                {/* 7. PAGES / CONTENTS SECTION */}
                {(activeTab === "all" || activeTab === "contents") && contentsCount > 0 && (
                  <div>
                    {activeTab === "all" && (
                      <div className="qpu-result-section-header">
                        <span>{t("contents")}</span>
                        {contentsCount > 3 && (
                          <span className="qpu-result-section-view-all" onClick={() => setActiveTab("contents")}>
                            {t("totalCount", { count: contentsCount })}
                          </span>
                        )}
                      </div>
                    )}
                    {(activeTab === "contents" ? results.contents?.items : results.contents?.items?.slice(0, 3))?.map((item: any) => (
                      <Link
                        key={item.id}
                        href={getContentLink(item)}
                        onClick={onHide}
                        className="qpu-result-card"
                      >
                        <div className="qpu-result-info">
                          <div className="qpu-result-title">
                            {item.title || item.section?.replace(/_/g, " ")}
                          </div>
                          <div className="qpu-result-subtitle">
                            {getContentLink(item)}
                          </div>
                        </div>
                        <div className="qpu-result-badge-list">
                          <span className="qpu-result-badge">{t("contents")}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}

                {/* 8. VACANCIES SECTION */}
                {(activeTab === "all" || activeTab === "vacancies") && vacanciesCount > 0 && (
                  <div>
                    {activeTab === "all" && (
                      <div className="qpu-result-section-header">
                        <span>{t("vacancies")}</span>
                        {vacanciesCount > 3 && (
                          <span className="qpu-result-section-view-all" onClick={() => setActiveTab("vacancies")}>
                            {t("totalCount", { count: vacanciesCount })}
                          </span>
                        )}
                      </div>
                    )}
                    {(activeTab === "vacancies" ? results.vacancies?.items : results.vacancies?.items?.slice(0, 3))?.map((item: any) => (
                      <Link
                        key={item.id}
                        href={getVacancyLink(item)}
                        onClick={onHide}
                        className="qpu-result-card"
                      >
                        <div className="qpu-result-info">
                          <div className="qpu-result-title">
                            {isRtl && item.title_AR ? item.title_AR : item.title}
                          </div>
                          <div className="qpu-result-subtitle">
                            {isRtl && item.description_AR
                              ? item.description_AR.replace(/<[^>]*>/g, "")
                              : item.description?.replace(/<[^>]*>/g, "")}
                          </div>
                        </div>
                        <div className="qpu-result-badge-list">
                          <span className="qpu-result-badge">{t("vacancies")}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      <div onClick={onHide} className={`body-overlay ${isSearchOpen ? "opened" : ""}`}></div>
    </>,
    document.body
  );
}
