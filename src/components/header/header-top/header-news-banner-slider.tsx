"use client";

import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import type News from "@/lib/classes/news";

type Props = {
  items: News[];
  label: string;
};

function ReadMoreLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const isInternal = href.startsWith("/") && !href.startsWith("//");
  if (isInternal) {
    return (
      <Link href={href} className="tp-news-banner-link-wrapper">
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="tp-news-banner-link-wrapper"
    >
      {children}
    </a>
  );
}

function NewsBannerSlideRow({
  item,
  ariaHidden,
}: {
  item: News;
  ariaHidden?: boolean;
}) {
  const content = (
    <div
      className="tp-news-banner-slide__inner d-flex align-items-center"
      aria-hidden={ariaHidden || undefined}
    >
      {item.imageUrl ? (
        <div className="tp-news-banner-thumb-wrapper flex-shrink-0">
          <Image
            className="tp-news-banner-thumb"
            src={item.imageUrl}
            alt=""
            width={28}
            height={28}
            loading="lazy"
            unoptimized
          />
        </div>
      ) : null}

      <div className="tp-news-banner-copy">
        <span className="tp-news-banner-title">
          {item.title}
        </span>
      </div>

      <span className="tp-news-banner-separator flex-shrink-0" aria-hidden="true">
        ✦
      </span>
    </div>
  );

  if (item.href) {
    return <ReadMoreLink href={item.href}>{content}</ReadMoreLink>;
  }

  return content;
}

/**
 * News Banner Slider using high-performance CSS animation marquee.
 * Ensures a perfectly constant scrolling speed and reliable pause-on-hover.
 */
export default function HeaderNewsBannerSlider({ items, label }: Props) {
  const locale = useLocale();
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
            />
          ))}
        </div>
        {/* Duplicate content to ensure a seamless infinite loop */}
        <div className="tp-news-marquee-content" aria-hidden="true">
          {trackItems.map((item) => (
            <NewsBannerSlideRow
              key={`${item.uniqueId}-dup`}
              item={item}
              ariaHidden
            />
          ))}
        </div>
      </div>
    </div>
  );
}
