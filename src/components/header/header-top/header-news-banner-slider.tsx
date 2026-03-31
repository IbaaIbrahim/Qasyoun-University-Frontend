"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperOptions } from "swiper/types";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { NewsBannerItem } from "@/lib/services/news-banner.service";

type Props = {
  items: NewsBannerItem[];
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
  item: NewsBannerItem;
  label: string;
  readMoreLabel: string;
  ariaHidden?: boolean;
}) {
  return (
    <div
      className="tp-news-banner-slide__inner d-flex align-items-center gap-3"
      aria-hidden={ariaHidden || undefined}
    >
      <span className="tp-news-banner-badge flex-shrink-0">{label}</span>
      {item.imageUrl ? (
        <img
          className="tp-news-banner-thumb flex-shrink-0"
          src={item.imageUrl}
          alt=""
          width={44}
          height={44}
          loading="lazy"
        />
      ) : null}
      <div className="tp-news-banner-copy min-w-0 flex-grow-1">
        <div className="tp-news-banner-title text-truncate">{item.title}</div>
        {item.excerpt ? (
          <div className="tp-news-banner-excerpt text-truncate">{item.excerpt}</div>
        ) : null}
      </div>
      {item.href ? (
        <ReadMoreLink href={item.href}>
          <span className="tp-news-banner-link flex-shrink-0">{readMoreLabel}</span>
        </ReadMoreLink>
      ) : null}
    </div>
  );
}

/**
 * Multiple CMS rows: Swiper advances horizontally (`rewind`, no `loop` — loop breaks with few slides).
 * Single row: CSS ticker duplicates content so the strip still moves horizontally.
 */
export default function HeaderNewsBannerSlider({ items, label }: Props) {
  const t = useTranslations("NewsBanner");
  const locale = useLocale();
  const readMoreLabel = t("readMore");
  const dir = locale === "ar" ? "rtl" : "ltr";

  if (!items.length) return null;

  if (items.length === 1) {
    const item = items[0];
    return (
      <div className="tp-news-banner-ticker" dir={dir}>
        <div className="tp-news-banner-ticker__track">
          <NewsBannerSlideRow item={item} label={label} readMoreLabel={readMoreLabel} />
          <NewsBannerSlideRow
            item={item}
            label={label}
            readMoreLabel={readMoreLabel}
            ariaHidden
          />
        </div>
      </div>
    );
  }

  const swiperOpts: SwiperOptions = {
    modules: [Autoplay],
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 650,
    loop: false,
    rewind: true,
    observer: true,
    observeParents: true,
    watchOverflow: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
      waitForTransition: true,
    },
  };

  return (
    <Swiper
      {...swiperOpts}
      key={items.map((i) => i.id).join("-")}
      className="tp-news-banner-swiper swiper"
      aria-label={label}
      dir={dir}
    >
      {items.map((item) => (
        <SwiperSlide key={item.id} className="tp-news-banner-slide">
          <NewsBannerSlideRow item={item} label={label} readMoreLabel={readMoreLabel} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
