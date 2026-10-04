"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ShapeLine } from "../svg";

export interface DepartmentItem {
  id: number;
  name: string;
  description?: string;
  icon?: string;
  image?: string;
  displayOrder: number;
}

interface DepartmentAreaProps {
  departments: DepartmentItem[];
  locale?: string;
}

export default function DepartmentArea({
  departments,
  locale = "ar",
}: DepartmentAreaProps) {
  const t = useTranslations("Faculties");

  if (!departments || departments.length === 0) return null;

  return (
    <section className="faculty-departments-area pt-100 pb-90 grey-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="tp-section-3-wrapper text-center mb-60">
              <span className="tp-section-3-subtitle">
                {t("departmentsSubtitle")}
              </span>
              <h2 className="tp-section-3-title">
                {t("departmentsTitle")}{" "}
                <span>
                  <ShapeLine />
                </span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          {departments.map((dept, index) => (
            <div key={dept.id || index} className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="faculty-dept-card h-100 p-4 bg-white rounded-4 shadow-sm border-top border-4"
                style={{
                  borderTopColor: "var(--tp-theme-primary, #42023e)",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s ease",
                }}
              >
                {dept.image && (
                  <div
                    className="dept-image-box mb-3 rounded-3 overflow-hidden text-center"
                    style={{ maxHeight: "200px" }}
                  >
                    <Image
                      src={dept.image}
                      alt={dept.name}
                      width={400}
                      height={200}
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "180px",
                      }}
                      unoptimized
                    />
                  </div>
                )}

                <div className="dept-header d-flex align-items-center gap-3 mb-3">
                  <div
                    className="dept-badge-icon rounded-circle d-flex align-items-center justify-content-center text-white"
                    style={{
                      width: "42px",
                      height: "42px",
                      backgroundColor: "#42023e",
                      flexShrink: 0,
                      fontWeight: "bold",
                    }}
                  >
                    {dept.icon ? (
                      <i className={dept.icon}></i>
                    ) : (
                      <span>{index + 1}</span>
                    )}
                  </div>
                  <h3
                    className="dept-title m-0"
                    style={{
                      fontSize: "19px",
                      fontWeight: 700,
                      color: "#1f242e",
                    }}
                  >
                    {dept.name}
                  </h3>
                </div>

                {dept.description && (
                  <p
                    className="dept-description text-muted mb-0"
                    style={{
                      fontSize: "14px",
                      lineHeight: "1.7",
                      flexGrow: 1,
                    }}
                  >
                    {dept.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
