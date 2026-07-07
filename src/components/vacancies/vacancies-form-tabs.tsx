'use client';

import { useState } from "react";
import { useTranslations } from "next-intl";
import JobRequestForm from "../form/job-request-form";
import FacultyBoardForm from "../form/faculty-board-form";

export default function VacanciesFormTabs() {
  const [activeTab, setActiveTab] = useState<'vacancy' | 'faculty-board'>('vacancy');
  const vt = useTranslations("Vacancies");
  const ft = useTranslations("FacultyBoardForm");

  return (
    <div className="vacancies-form-tabs">
      {/* Tab header */}
      <div className="tabs-header d-flex justify-content-center mb-50">
        <button
          className={`tab-btn ${activeTab === 'vacancy' ? 'active' : ''}`}
          onClick={() => setActiveTab('vacancy')}
        >
          <span className="icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
          </span>
          {vt("breadcrumbTitle")}
        </button>

        <button
          className={`tab-btn ${activeTab === 'faculty-board' ? 'active' : ''}`}
          onClick={() => setActiveTab('faculty-board')}
        >
          <span className="icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
          </span>
          {ft("tabTitle")}
        </button>
      </div>

      {/* Tab content */}
      <div className="tabs-content">
        {activeTab === 'vacancy' && (
          <div className="tab-pane fade show active">
            <JobRequestForm />
          </div>
        )}
        {activeTab === 'faculty-board' && (
          <div className="tab-pane fade show active">
            <FacultyBoardForm />
          </div>
        )}
      </div>

      <style jsx>{`
        .vacancies-form-tabs {
          background: #f8f8f8;
          padding: 50px;
          border-radius: 20px;
        }
        .tabs-header {
          gap: 20px;
          border-bottom: 1px solid #ddd;
          padding-bottom: 20px;
          flex-wrap: wrap;
        }
        .tab-btn {
          background: transparent;
          border: none;
          padding: 10px 20px;
          font-size: 18px;
          font-weight: 600;
          color: #666;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 10px;
          position: relative;
          cursor: pointer;
        }
        .tab-btn:after {
          content: '';
          position: absolute;
          bottom: -21px;
          left: 0;
          width: 0;
          height: 3px;
          background: #42023e;
          transition: all 0.3s ease;
        }
        .tab-btn.active {
          color: #42023e;
        }
        .tab-btn.active:after {
          width: 100%;
        }
        .tab-btn .icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 35px;
          height: 35px;
          background: #eee;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        .tab-btn.active .icon {
          background: #42023e;
          color: #fff;
        }
        @media (max-width: 768px) {
          .tab-btn {
            font-size: 14px;
            padding: 10px;
          }
          .vacancies-form-tabs {
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
}
