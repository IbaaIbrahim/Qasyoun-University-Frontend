import { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import ProfileDropdown from "./header-profile/profile-dropdown";
import NavMenus from "./navbar/nav-menus";
import logo_white from "@/assets/img/logo/logo-white.png";
import logo_black from "@/assets/img/logo/logo-black.png";
import HeaderStickyWrapper from "./header-sticky-provider/header-sticky-wrapper";
import CartButton from "./button/cart-button";
import OffcanvasButton from "./button/offcanvas-btn";

// prop type
type IProps = {
  sm_mega_title?: string;
};

const imgStyle: CSSProperties = {
  height: "auto",
};

export default function HeaderFour({ sm_mega_title }: IProps) {
  return (
    <>
      <header className="header-area tp-header-transparent">
        <HeaderStickyWrapper cls="tp-header-5">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-6 col-6">
                <div className="tp-header-5-logo tp-header-logo">
                  <Link href="/">
                    <Image
                      className="logo-1"
                      src={logo_white}
                      alt="logo"
                      style={imgStyle}
                    />
                    <Image
                      className="logo-2"
                      src={logo_black}
                      alt="logo"
                      style={imgStyle}
                    />
                  </Link>
                </div>
              </div>
              <div className="col-xl-8 d-none d-xl-block">
                <div className="main-menu">
                  <NavMenus sm_mega_title={sm_mega_title} />
                </div>
              </div>
              <div className="col-xl-2 col-lg-6 col-6">
                <div className="tp-header-5-contact d-flex align-items-center justify-content-end">
                  {/* profile dropdown */}
                  <ProfileDropdown top_cls="tp-header-5-login" user_icon={true} />
                  {/* profile dropdown */}
                  <div className="tp-header-5-cart ml-35">
                    <CartButton />
                  </div>
                  <div className="tp-header-5-sidebar offcanvas-btns ml-35">
                    <OffcanvasButton>
                      <span></span>
                    </OffcanvasButton>
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
