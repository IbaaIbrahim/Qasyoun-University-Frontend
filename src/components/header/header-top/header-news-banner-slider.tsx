"use client";

// Removed Swiper imports as we are using native CSS marquee
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import type News from "@/lib/classes/news";

// Import Swiper styles if needed, but they should be in globals.scss or layout.tsx
// import "swiper/css/free-mode"; 

type Props = {
  items: News[];
  label: string;
};

// ... ReadMoreLink and NewsBannerSlideRow remain same if didn't change ...
function ReadMoreLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const isInternal = href.startsWith("/") && !href.startsWith("//");
  if (isInternal) {
    return <Link href={href}>{children}</Link>;
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

function NewsBannerSlideRow({
  item,
  label,
  readMoreLabel,
  ariaHidden,
}: {
  item: News;
  label: string;
  readMoreLabel: string;
  ariaHidden?: boolean;
}) {
  return (
    <div
      className="tp-news-banner-slide__inner d-flex align-items-center gap-3"
      aria-hidden={ariaHidden || undefined}
    >
      <div className="tp-news-banner-tag-wrapper flex-shrink-0">
        <span className="tp-news-banner-badge">
          <span className="tp-news-banner-badge-dot"></span>
          {label}
        </span>
      </div>

      {item.imageUrl ? (
        <div className="tp-news-banner-thumb-wrapper flex-shrink-0">
          <Image
            className="tp-news-banner-thumb"
            src={item.imageUrl}
            alt=""
            width={40}
            height={40}
            loading="lazy"
            unoptimized
          />
        </div>
      ) : null}

      <div className="tp-news-banner-copy min-w-0 flex-grow-1">
        <div className="tp-news-banner-text-group d-flex align-items-center gap-4">
          {item.title ? (
            item.href ? (
              <ReadMoreLink href={item.href}>
                <span className="tp-news-banner-excerpt text-truncate opacity-75">
                  {item.title}
                </span>
              </ReadMoreLink>
            ) : (
              <span className="tp-news-banner-excerpt text-truncate opacity-75">
                {item.title}
              </span>
            )
          ) : null}
        </div>
      </div>

      {item.href ? (
        <ReadMoreLink href={item.href}>
          <span className="tp-news-banner-link flex-shrink-0">
            <span className="d-none d-sm-inline">{readMoreLabel}</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </span>
        </ReadMoreLink>
      ) : null}
    </div>
  );
}

/**
 * News Banner Slider using high-performance CSS animation marquee.
 * Ensures a perfectly constant scrolling speed and reliable pause-on-hover.
 */
export default function HeaderNewsBannerSlider({ items, label }: Props) {
  const t = useTranslations("NewsBanner");
  const locale = useLocale();
  const readMoreLabel = t("readMore");
  const isRtl = locale === "ar";

  if (!items.length) return null;

  // Duplicate items if count is small to make sure we span the screen width comfortably.
  let baseItems = items;
  if (items.length < 8) {
    const repeats = Math.ceil(8 / items.length);
    baseItems = [];
    for (let i = 0; i < repeats; i++) {
      baseItems.push(...items);
    }
  }

  // Create unique keys for the duplicated items.
  const trackItems = baseItems.map((item, idx) => ({
    ...item,
    uniqueId: `${item.id}-${idx}`,
  }));

  // Linear speed calculation: 6 seconds per item for a natural reading pace.
  const duration = trackItems.length * 6;

  return (
    <div className={`tp-news-marquee-container ${isRtl ? "rtl" : "ltr"}`} aria-label={label}>
      <div
        className="tp-news-marquee-track"
        style={{ animationDuration: `${duration}s` }}
      >
        <div className="tp-news-marquee-content">
          {trackItems.map((item) => (
            <NewsBannerSlideRow
              key={item.uniqueId}
              item={item}
              label={label}
              readMoreLabel={readMoreLabel}
            />
          ))}
        </div>
        {/* Duplicate content to ensure a seamless infinite loop */}
        <div className="tp-news-marquee-content" aria-hidden="true">
          {trackItems.map((item) => (
            <NewsBannerSlideRow
              key={`${item.uniqueId}-dup`}
              item={item}
              label={label}
              readMoreLabel={readMoreLabel}
            />
          ))}
        </div>
      </div>
    </div>
  );
}



