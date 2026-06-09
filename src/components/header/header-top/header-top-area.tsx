import React from "react";
import { getLocale, getTranslations } from "next-intl/server";
import { readContentAsJsonByFilter } from "@/lib/services/content.service";
import HeaderLanguage from "./header-language";
import HeaderNewsBannerSlider from "./header-news-banner-slider";
import News from "@/lib/classes/news";

/**
 * Replaces the template “top bar” (social / phone / links) with a news strip driven by the API
 * plus the language switcher on the logical **start** side (`dir` handles LTR vs RTL).
 */
export default async function HeaderTopArea({ newsItems }: { newsItems: News[] }) {
  const [t] = await Promise.all([
    getTranslations("NewsBanner"),
  ]);


  return (
    <div
      className="tp-header-top tp-news-banner d-flex align-items-center"
      style={{
        background: "#ffffff",
        borderBottom: "1.5px solid #42023e",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
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
            {newsItems.length > 0 ? (
              <HeaderNewsBannerSlider items={newsItems} label={t("label")} />
            ) : (
              <div className="tp-news-banner-empty small text-center">{t("empty")}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

