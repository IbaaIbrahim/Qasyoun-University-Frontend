import Image from "next/image";
import Link from "next/link";
import { MenuLine, SearchSvgThree } from "../svg";
import NavMenus from "./navbar/nav-menus";
import logo from "@/assets/img/logo/logo-breadcrumb.png";
import HeaderStickyWrapper from "./header-sticky-provider/header-sticky-wrapper";
import SearchButton from "./button/search-button";
import OffcanvasButton from "./button/offcanvas-btn";

export default function HeaderSeven() {
  return (
    <>
      <header className="header-area p-relative">
        <HeaderStickyWrapper cls="tp-header-inner">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-2 col-xl-2 col-6">
                <div className="tp-header-logo">
                  <Link href="/">
                    <Image src={logo} alt="logo" style={{ height: "auto" }} />
                  </Link>
                </div>
              </div>
              <div className="col-xxl-7 col-xl-7 d-none d-xl-block">
                <div className="main-menu text-xl-center">
                  {/* nav menus start */}
                  <NavMenus />
                  {/* nav menus end */}
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-6">
                <div className="tp-header-contact d-flex align-items-center justify-content-end">
                  <div className="tp-header-red-search d-none d-md-block">
                    <SearchButton icon={<SearchSvgThree />} />
                  </div>
                  <div className="tp-header-inner-btn d-none d-md-block">
                    <Link className="tp-btn-3" href="/university-schedule">
                      Plan a Visit
                    </Link>
                  </div>
                  <div className="tp-header-red-sidebar">
                    <OffcanvasButton>
                      <MenuLine />
                    </OffcanvasButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </HeaderStickyWrapper>
      </header>

      {/* mobile offcanvas */}
      <div id="offcanvas-sidebar" />
      {/* mobile offcanvas */}
    </>
  );
}
