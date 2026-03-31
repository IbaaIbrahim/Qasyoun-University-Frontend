"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import flag from "@/assets/img/flag/flag-1.png";
import { DownArrow } from "@/components/svg";
import { useLocaleSwitch } from "@/hooks/use-locale-switch";
import type { AppLocale } from "@/i18n/routing";

export default function HeaderLanguage() {
  const t = useTranslations("Header");
  const { locale, switchLocale } = useLocaleSwitch();
  const [openLang, setOpenLang] = React.useState(false);

  const currentLabel =
    locale === "ar" ? t("languageArabic") : t("languageEnglish");

  function pick(next: AppLocale, e: React.MouseEvent) {
    e.preventDefault();
    switchLocale(next);
    setOpenLang(false);
  }

  return (
    <li>
      <a
        onClick={(e) => {
          e.preventDefault();
          setOpenLang(!openLang);
        }}
        id="header-bottom__lang-toggle"
        href="#"
        aria-expanded={openLang}
        aria-haspopup="true"
      >
        <span>
          {locale === "en" && <Image src={flag} alt="" />}
          {currentLabel}
        </span>
        <span>
          <DownArrow />
        </span>
      </a>
      <ul
        className={`header-bottom__lang-submenu ${openLang ? "open" : ""}`}
        role="menu"
      >
        <li role="none">
          <a href="#" role="menuitem" onClick={(e) => pick("en", e)}>
            {t("languageEnglish")}
          </a>
        </li>
        <li role="none">
          <a href="#" role="menuitem" onClick={(e) => pick("ar", e)}>
            {t("languageArabic")}
          </a>
        </li>
      </ul>
    </li>
  );
}
