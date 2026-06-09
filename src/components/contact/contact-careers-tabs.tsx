'use client';

import { useState } from "react";
import { useTranslations } from "next-intl";
import ContactForm from "../form/contact-form";
import JobRequestForm from "../form/job-request-form";

export default function ContactCareersTabs() {
  const [activeTab, setActiveTab] = useState<'contact' | 'careers'>('contact');
  const t = useTranslations("Contact");
  const vt = useTranslations("Vacancies");

  return (
    <div className="contact-careers-tabs">
      <div className="tabs-header d-flex justify-content-center mb-50">
        <button 
          className={`tab-btn ${activeTab === 'contact' ? 'active' : ''}`}
          onClick={() => setActiveTab('contact')}
        >
          <span className="icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </span>
          {t("formTitle")}
        </button>
        <button 
          className={`tab-btn ${activeTab === 'careers' ? 'active' : ''}`}
          onClick={() => setActiveTab('careers')}
        >
          <span className="icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="8.5" cy="7" r="4"></circle>
              <polyline points="17 11 19 13 23 9"></polyline>
            </svg>
          </span>
          {vt("breadcrumbTitle")}
        </button>
      </div>

      <div className="tabs-content">
        {activeTab === 'contact' ? (
          <div className="tab-pane fade show active">
            <ContactForm />
          </div>
        ) : (
          <div className="tab-pane fade show active">
            <JobRequestForm />
          </div>
        )}
      </div>

      <style jsx>{`
        .contact-careers-tabs {
          background: #fff;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }
        .tabs-header {
          gap: 20px;
          border-bottom: 1px solid #eee;
          padding-bottom: 20px;
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
          background: #f8f8f8;
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
          .contact-careers-tabs {
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
}
