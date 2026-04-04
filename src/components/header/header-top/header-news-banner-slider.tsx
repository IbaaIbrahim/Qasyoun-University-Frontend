"use client";

import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
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
          <img
            className="tp-news-banner-thumb"
            src={item.imageUrl}
            alt=""
            width={40}
            height={40}
            loading="lazy"
          />
        </div>
      ) : null}

      <div className="tp-news-banner-copy min-w-0 flex-grow-1">
        <div className="tp-news-banner-text-group d-flex align-items-center gap-4">
          {/* {item.title ? (
            <span className="tp-news-banner-title text-truncate fw-bold">
              {item.title}
            </span>
          ) : null} */}
          {item.excerpt ? (
            <span className="tp-news-banner-excerpt text-truncate opacity-75">
              {item.excerpt}
            </span>
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
 * News Banner Slider using Swiper Autoplay with linear timing for a continuous marquee effect.
 */
export default function HeaderNewsBannerSlider({ items, label }: Props) {
  const t = useTranslations("NewsBanner");
  const locale = useLocale();
  const readMoreLabel = t("readMore");
  const isRtl = locale === "ar";

  if (!items.length) return null;

  // Significant duplication to ensure smooth infinite marquee regardless of base item count.
  const displayItems =
    items.length < 10
      ? [...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items].map(
        (it, i) => ({
          ...it,
          id: `${it.id}-${i}`,
        }),
      )
      : items;

  return (
    <div
      className={`tp-news-banner-swiper-outer${isRtl ? " tp-news-banner-swiper-outer--motion-rtl" : ""}`}
    >
      <Swiper
        modules={[Autoplay, FreeMode]}
        direction="horizontal"
        slidesPerView="auto"
        spaceBetween={0} // Padding handled by slide row
        speed={8000} // Slightly faster duration for visibility
        loop={true}
        freeMode={{
          enabled: true,
          momentum: false, // Prevents "throwing" the scroll, keep it linear
        }}
        autoplay={{
          delay: 0, // Continuous
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        allowTouchMove={true}
        grabCursor={true}
        observer={true}
        observeParents={true}
        watchOverflow={true}
        key={items.length}
        className="tp-news-banner-swiper swiper"
        aria-label={label}
        dir="ltr"
      >
        {displayItems.map((item) => (
          <SwiperSlide key={item.id} className="tp-news-banner-slide">
            <NewsBannerSlideRow
              item={item}
              label={label}
              readMoreLabel={readMoreLabel}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}



