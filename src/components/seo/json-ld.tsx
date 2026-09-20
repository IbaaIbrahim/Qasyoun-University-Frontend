import React from "react";

interface UniversityJsonLdProps {
  locale: string;
}

export function UniversityJsonLd({ locale }: UniversityJsonLdProps) {
  const isAr = locale === "ar";
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://qpu.edu.sy";

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    "@id": `${baseUrl}/#organization`,
    name: isAr
      ? "جامعة قاسيون الخاصة للعلوم والتكنولوجيا"
      : "Qasyoun Private University for Science and Technology",
    alternateName: ["جامعة قاسيون الخاصة", "جامعة قاسيون", "QPU", "Qasyoun University"],
    url: baseUrl,
    logo: `${baseUrl}/assets/img/logo/logo.png`,
    image: `${baseUrl}/assets/img/logo/qpu-og-banner.jpg`,
    description: isAr
      ? "جامعة خاصة سورية معتمدة تأسست عام 2007، تضم كليات طب الأسنان، الصيدلة، الهندسة، والعلوم الإدارية والمالية وفق نظام الساعات المعتمدة."
      : "Accredited private university in Syria established in 2007, offering degrees in Dentistry, Pharmacy, Engineering, and Business Administration under the credit-hour system.",
    foundingDate: "2007",
    address: [
      {
        "@type": "PostalAddress",
        name: isAr ? "المقر الدائم - الحرم الجامعي" : "Main Campus",
        streetAddress: isAr
          ? "أوتستراد دمشق - درعا الدولي"
          : "Damascus - Daraa International Highway",
        addressLocality: isAr ? "درعا / ريف دمشق" : "Daraa / Rural Damascus",
        addressCountry: "SY",
      },
      {
        "@type": "PostalAddress",
        name: isAr ? "مكتب الارتباط والمتابعة" : "Liaison Office",
        streetAddress: isAr ? "دمشق - المزة فيلات شرقية" : "Damascus - Mazzeh Eastern Villas",
        addressLocality: isAr ? "دمشق" : "Damascus",
        addressCountry: "SY",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+963-11-9000",
      contactType: "admissions",
      areaServed: "SY",
      availableLanguage: ["Arabic", "English"],
    },
    sameAs: [
      "https://www.facebook.com/qpu.edu.sy",
      "https://www.instagram.com/qpu.edu.sy",
      "https://t.me/qpu_edu_sy",
      "https://www.linkedin.com/school/qasyoun-private-university",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteJsonLd({ locale }: { locale: string }) {
  const isAr = locale === "ar";
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://qpu.edu.sy";

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: isAr ? "جامعة قاسيون الخاصة" : "Qasyoun Private University",
    description: isAr
      ? "الموقع الرسمي لجامعة قاسيون الخاصة للعلوم والتكنولوجيا"
      : "Official portal of Qasyoun Private University for Science and Technology",
    publisher: {
      "@id": `${baseUrl}/#organization`,
    },
    inLanguage: isAr ? "ar" : "en",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ArticleJsonLdProps {
  title: string;
  description?: string;
  url: string;
  imageUrl?: string | null;
  datePublished?: string;
  dateModified?: string;
  locale?: string;
}

export function ArticleJsonLd({
  title,
  description,
  url,
  imageUrl,
  datePublished,
  dateModified,
}: ArticleJsonLdProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://qpu.edu.sy";

  const schema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: title,
    description: description || title,
    mainEntityOfPage: url,
    image: imageUrl ? [imageUrl] : undefined,
    datePublished: datePublished || new Date().toISOString(),
    dateModified: dateModified || datePublished || new Date().toISOString(),
    author: {
      "@type": "Organization",
      name: "جامعة قاسيون الخاصة",
      url: baseUrl,
    },
    publisher: {
      "@type": "CollegeOrUniversity",
      name: "جامعة قاسيون الخاصة",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/assets/img/logo/logo.png`,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface EventJsonLdProps {
  name: string;
  description?: string;
  startDate?: string;
  endDate?: string;
  location?: string;
  imageUrl?: string | null;
  url: string;
}

export function EventJsonLd({
  name,
  description,
  startDate,
  endDate,
  location,
  imageUrl,
  url,
}: EventJsonLdProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://qpu.edu.sy";

  const schema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name,
    description: description || name,
    startDate: startDate || new Date().toISOString(),
    endDate: endDate || startDate || new Date().toISOString(),
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: location || "جامعة قاسيون الخاصة - الحرم الجامعي",
      address: {
        "@type": "PostalAddress",
        streetAddress: "أوتستراد دمشق - درعا الدولي",
        addressCountry: "SY",
      },
    },
    image: imageUrl ? [imageUrl] : undefined,
    url,
    organizer: {
      "@type": "Organization",
      name: "جامعة قاسيون الخاصة",
      url: baseUrl,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
