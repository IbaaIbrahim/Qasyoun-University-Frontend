import React from "react";
import { getLocale, getTranslations } from "next-intl/server";
import { listNewsBannerItems } from "@/lib/services/news-banner.service";
import HeaderLanguage from "./header-language";
import HeaderNewsBannerSlider from "./header-news-banner-slider";

/**
 * Replaces the template “top bar” (social / phone / links) with a news strip driven by the API
 * plus the language switcher on the logical **start** side (`dir` handles LTR vs RTL).
 */
export default async function HeaderTopArea() {
  const locale = await getLocale();
  const [items, t] = await Promise.all([
    listNewsBannerItems(locale),
    getTranslations("NewsBanner"),
  ]);

  return (
    <div 
      className="tp-header-top tp-news-banner d-flex align-items-center"
      style={{
        background: `linear-gradient(135deg, #42023e 0%, #65055f 50%, #42023e 100%)`,
        boxShadow: "0 2px 10px rgba(66, 2, 62, 0.2)",
        position: "relative"
      }}
    >
      <div className="container">
        <div className="tp-news-banner__inner d-flex align-items-center">
          <div className="header-bottom__lang tp-news-banner__lang flex-shrink-0">
            <ul className="list-unstyled mb-0 d-flex align-items-center">
              <HeaderLanguage />
            </ul>
          </div>

          <div className="tp-news-banner__track flex-grow-1 min-w-0">
            {items.length > 0 ? (
              <HeaderNewsBannerSlider items={items} label={t("label")} />
            ) : (
              <div className="tp-news-banner-empty small text-center">{t("empty")}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

