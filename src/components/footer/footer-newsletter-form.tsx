"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { siteRequestService } from "@/lib/services/site-request.service";

type Props = {
  style_2?: boolean;
};

export default function FooterNewsletterForm({ style_2 = false }: Props) {
  const t = useTranslations("Footer");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setLoading(true);
    setStatus("idle");
    try {
      await siteRequestService.submitContactRequest({
        name: "مشترك في النشرة البريدية",
        email: email.trim(),
        subject: "طلب اشتراك في النشرة البريدية (Newsletter)",
        message: `تم إرسال البريد الإلكتروني (${email}) للاشتراك في النشرة البريدية للموقع.`,
      });
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} suppressHydrationWarning>
      <div className="tp-footer-newsletter-wrapper mb-30">
        <div
          className={`tp-footer-newsletter-input ${
            style_2 ? "tp-footer-5-newsletter-input" : ""
          }`}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t("emailPlaceholder")}
            required
            disabled={loading}
            suppressHydrationWarning
          />
        </div>
        <div
          className={`${
            style_2
              ? "tp-footer-5-newsletter-submit"
              : "tp-footer-newsletter-submit"
          }`}
        >
          <button
            type="submit"
            disabled={loading}
            className={`${style_2 ? "tp-btn-4" : "tp-btn"}`}
            suppressHydrationWarning
          >
            {loading ? "..." : t("subscribe")}
          </button>
        </div>
      </div>
      {status === "success" && (
        <p className="text-success small mt-2">
          {t("subscribeSuccess") ?? "تم الاشتراك بنجاح! شكراً لك."}
        </p>
      )}
      {status === "error" && (
        <p className="text-danger small mt-2">
          {t("subscribeError") ?? "حدث خطأ أثناء الاشتراك. يرجى المحاولة لاحقاً."}
        </p>
      )}
    </form>
  );
}
