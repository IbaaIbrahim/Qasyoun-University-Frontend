import React from "react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { SearchSvg } from "../svg";
import NavMenus from "./navbar/nav-menus";
import logo from "@/assets/img/logo/logo-small.png";
import HeaderTopArea from "./header-top/header-top-area";
import logo_black from "@/assets/img/logo/logo-small.png";
import HeaderStickyWrapper from "./header-sticky-provider/header-sticky-wrapper";
import SearchButton from "./button/search-button";
import OffcanvasButton from "./button/offcanvas-btn";
import { IMenu } from "@/types/menu-d-t";
import News from "@/lib/classes/news";

type IProps = {
  menu_data?: IMenu[];
  newsItems: News[];
  /** Absolute or API path for header logo (e.g. faculty `logo` from API). Omits to use default QPU marks. */
  brandLogoSrc?: string;
  brandLogoAlt?: string;
  /** Where the logo links (default `/`) */
  logoHref?: string;
};

export default async function HeaderOne({
  menu_data,
  newsItems,
  brandLogoSrc,
  brandLogoAlt,
  logoHref = "/",
}: IProps) {
  const t = await getTranslations("Header");
  const tMeta = await getTranslations("Metadata");
  const logoAlt = brandLogoAlt ?? tMeta("siteTitle");
  const primarySrc = brandLogoSrc ?? logo;
  const secondarySrc = brandLogoSrc ?? logo_black;

  return (
    <>
      <header className="header-area tp-header-transparent p-relative">
        {
          newsItems.length > 0 && (
            <HeaderTopArea newsItems={newsItems} />
          )
        }

        <HeaderStickyWrapper>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-2 col-xl-2 col-lg-6 col-md-6 col-6">
                <div className="tp-header-logo-1 tp-header-logo">
                  <Link href={logoHref}>
                    <Image
                      className="logo-1"
                      src={primarySrc}
                      alt={logoAlt}
                      width={125}
                      height={48}
                      priority
                      style={{ objectFit: "contain", height: "auto", maxHeight: 48 }}
                      unoptimized
                    />
                    <Image
                      className="logo-2"
                      src={secondarySrc}
                      alt={logoAlt}
                      width={125}
                      height={48}
                      priority
                      style={{ objectFit: "contain", height: "auto", maxHeight: 48 }}
                      unoptimized
                    />
                  </Link>
                </div>
              </div>
              <div className="col-xxl-8 col-xl-7 d-none d-xl-block">
                <div className="main-menu text-end">
                  <NavMenus menu_data={menu_data} />
                </div>
              </div>
              <div className="col-xxl-2 col-xl-3 col-lg-6 col-md-6 col-6">
                <div className="tp-header-contact d-flex align-items-center justify-content-end">
                  <div className="tp-header-serach">
                    <SearchButton icon={<SearchSvg />} />
                  </div>
                  <div className="tp-header-btn d-none d-md-block ml-30">
                    <Link href="/faculties">{t("faculties")}</Link>
                  </div>
                  <div className="tp-header-bar d-xl-none ml-30">
                    <OffcanvasButton
                      menuData={menu_data}
                      brandLogoSrc={brandLogoSrc}
                      brandLogoAlt={brandLogoAlt}
                      logoHref={logoHref}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </HeaderStickyWrapper>
      </header>

      <div id="offcanvas-sidebar" />
    </>
  );
}
