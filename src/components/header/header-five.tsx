import React, { CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import { CartTwo } from "../svg";
import NavMenus from "./navbar/nav-menus";
import logo from '@/assets/img/logo/logo.png';
import HeaderTopAreaTwo from "./header-top/header-top-area-2";
import logo_black from '@/assets/img/logo/logo-black-1.png';
import HeaderStickyWrapper from "./header-sticky-provider/header-sticky-wrapper";
import CartButton from "./button/cart-button";
import OffcanvasButton from "./button/offcanvas-btn";

// img style 
const logoStyle: CSSProperties = {
  height: 'auto'
}

export default function HeaderFive() {
  return (
    <>
      <header className="header-area p-relative tp-header-4">
        {/* header top area */}
        <HeaderTopAreaTwo />
        {/* header top area */}
        <HeaderStickyWrapper cls="tp-header-4-main">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-2 col-xl-2 col-lg-6 col-md-6 col-6">
                <div className="tp-header-4-logo tp-header-logo">
                  <Link href="/">
                    <Image
                      className="logo-1"
                      src={logo}
                      alt="logo"
                      style={logoStyle}
                    />
                    <Image
                      className="logo-2"
                      src={logo_black}
                      alt="logo"
                      style={logoStyle}
                    />
                  </Link>
                </div>
              </div>
              <div className="col-xxl-7 col-xl-7 d-none d-xl-block">
                <div className="main-menu main-menu-4">
                  {/* nav menus start */}
                  <NavMenus />
                  {/* nav menus end */}
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-6">
                <div className="tp-header-contact d-flex align-items-center justify-content-end">
                  <div className="tp-header-2-cart cart-4 d-none d-md-block">
                    <CartButton icon={<CartTwo />} />
                  </div>
                  <div className="tp-header-4-btn d-none d-md-block ml-30">
                    <Link href="/university-schedule">Plan a Visit</Link>
                  </div>
                  <div className="tp-header-bar d-xl-none ml-30">
                    <OffcanvasButton/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </HeaderStickyWrapper>
      </header>

      {/* cart mini sidebar */}
      <div id="cart-mini-sidebar"></div>
      {/* cart mini sidebar */}

      {/* mobile offcanvas */}
      <div id="offcanvas-sidebar"/>
      {/* mobile offcanvas */}
    </>
  );
}
