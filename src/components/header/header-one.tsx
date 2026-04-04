import React from "react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { SearchSvg } from "../svg";
import NavMenus from "./navbar/nav-menus";
import logo from "@/assets/img/logo/logo.png";
import HeaderTopArea from "./header-top/header-top-area";
import logo_black from "@/assets/img/logo/logo-black-1.png";
import HeaderStickyWrapper from "./header-sticky-provider/header-sticky-wrapper";
import SearchButton from "./button/search-button";
import OffcanvasButton from "./button/offcanvas-btn";
import { IMenu } from "@/types/menu-d-t";

type IProps = {
  menu_data?: IMenu[];
};

export default async function HeaderOne({ menu_data }: IProps) {
  const t = await getTranslations("Header");

  return (
    <>
      <header className="header-area tp-header-transparent p-relative">
        <HeaderTopArea />

        <HeaderStickyWrapper>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-2 col-xl-2 col-lg-6 col-md-6 col-6">
                <div className="tp-header-logo-1 tp-header-logo">
                  <Link href="/">
                    <Image className="logo-1" src={logo} alt="logo" priority />
                    <Image
                      className="logo-2"
                      src={logo_black}
                      alt="logo"
                      priority
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
                    <OffcanvasButton />
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
