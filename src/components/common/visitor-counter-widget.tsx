"use client";

import React, { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { getVisitorCount, trackVisitor } from "@/lib/api/visitor-counter.api";

export default function VisitorCounterWidget() {
  const locale = useLocale();
  const isAr = locale === "ar";
  const [totalCount, setTotalCount] = useState<number | null>(null);

  useEffect(() => {
    async function initCounter() {
      if (typeof window === "undefined") return;

      const hasVisited = sessionStorage.getItem("qpu_session_visited");
      if (!hasVisited) {
        sessionStorage.setItem("qpu_session_visited", "true");
        const res = await trackVisitor();
        setTotalCount(res.totalVisitors);
      } else {
        const res = await getVisitorCount();
        setTotalCount(res.totalVisitors);
      }
    }

    initCounter();
  }, []);

  if (totalCount === null) {
    return null;
  }

  const formattedCount = totalCount.toLocaleString(isAr ? "ar-EG" : "en-US");

  return (
    <div
      className="tp-footer-visitor-counter d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.08)",
        border: "1px solid rgba(255, 255, 255, 0.15)",
        color: "#fff",
        fontSize: "0.88rem",
        fontWeight: 500,
      }}
      title={isAr ? "إجمالي عدد زوار الموقع" : "Total Website Visitors"}
    >
      <i className="fa-solid fa-users" style={{ color: "#f39c12" }}></i>
      <span>
        {isAr ? "عدد زوار الموقع: " : "Website Visitors: "}
        <strong style={{ color: "#767676ff", fontWeight: 700 }}>{formattedCount}</strong>
      </span>
    </div>
  );
}
