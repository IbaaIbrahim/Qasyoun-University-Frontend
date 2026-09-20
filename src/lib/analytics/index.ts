/**
 * QPU Analytics & Event Tracking Library
 * Tracks user engagement and conversion metrics on the public website.
 */

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";

declare global {
  interface Window {
    gtag?: (
      command: "config" | "event" | "js" | "set",
      targetIdOrAction: string,
      configOrParams?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}

/**
 * Checks if Google Analytics is enabled and available in the current browser session.
 */
export const isAnalyticsActive = (): boolean => {
  return typeof window !== "undefined" && typeof window.gtag === "function" && Boolean(GA_MEASUREMENT_ID);
};

/**
 * Tracks a page view with active locale and path.
 */
export const pageview = (url: string, title?: string) => {
  if (isAnalyticsActive()) {
    window.gtag!("event", "page_view", {
      page_path: url,
      page_title: title || (typeof document !== "undefined" ? document.title : ""),
      send_to: GA_MEASUREMENT_ID,
    });
  } else if (process.env.NODE_ENV === "development") {
    console.debug(`[Analytics:pageview] ${url} - "${title}"`);
  }
};

/**
 * Dispatches a generic custom event to Google Analytics.
 */
export const trackEvent = (action: string, params: Record<string, any> = {}) => {
  if (isAnalyticsActive()) {
    window.gtag!("event", action, params);
  } else if (process.env.NODE_ENV === "development") {
    console.debug(`[Analytics:event] ${action}`, params);
  }
};

// ── Specific High-Value Conversion & Engagement Events ──

/**
 * Track when a user views a specific faculty page.
 */
export const trackFacultyView = (facultySlug: string, facultyName?: string, locale?: string) => {
  trackEvent("faculty_view", {
    faculty_slug: facultySlug,
    faculty_name: facultyName || facultySlug,
    locale: locale || "ar",
  });
};

/**
 * Track submission of contact messages.
 */
export const trackContactSubmit = (subject: string, isSuccess: boolean = true) => {
  trackEvent("contact_form_submit", {
    form_id: "contact_us",
    subject,
    status: isSuccess ? "success" : "failed",
  });
};

/**
 * Track submission of employment / vacancy applications.
 */
export const trackCareerApplication = (vacancyTitle: string, applicantDegree?: string) => {
  trackEvent("career_application_submit", {
    vacancy_title: vacancyTitle,
    applicant_degree: applicantDegree || "not_specified",
  });
};

/**
 * Track downloads of official PDFs (syllabi, admission requirements, decisions).
 */
export const trackDocumentDownload = (fileName: string, pageSection?: string) => {
  trackEvent("pdf_download", {
    file_name: fileName,
    page_section: pageSection || "general",
    download_timestamp: new Date().toISOString(),
  });
};

/**
 * Track when a user toggles the interface language (AR <-> EN).
 */
export const trackLanguageSwitch = (fromLocale: string, toLocale: string) => {
  trackEvent("language_toggle", {
    from_locale: fromLocale,
    to_locale: toLocale,
  });
};

/**
 * Track searches performed on the site.
 */
export const trackSiteSearch = (query: string, resultCount?: number) => {
  trackEvent("site_search", {
    search_term: query,
    result_count: typeof resultCount === "number" ? resultCount : -1,
  });
};

/**
 * Track clicks to the external Student Portal (my.qpu.edu.sy).
 */
export const trackStudentPortalClick = () => {
  trackEvent("student_portal_click", {
    destination_url: "http://my.qpu.edu.sy/",
  });
};

/**
 * Track outbound clicks to official social media channels.
 */
export const trackSocialClick = (platform: string, targetUrl: string) => {
  trackEvent("social_channel_click", {
    platform,
    target_url: targetUrl,
  });
};
