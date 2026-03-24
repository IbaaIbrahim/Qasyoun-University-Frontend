import Image from "next/image";
import Link from "next/link";
import NavMenus from "./navbar/nav-menus";
import logo from "@/assets/img/logo/logo-black.png";
import HeaderStickyWrapper from "./header-sticky-provider/header-sticky-wrapper";
import OffcanvasButton from "./button/offcanvas-btn";

// prop type
type IProps = {
  sm_mega_title?: string;
};

export default function HeaderThee({sm_mega_title}: IProps) {
  return (
    <>
      <header>
        <HeaderStickyWrapper cls="header-area tp-header-transparent tp-header-3">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-2 col-xl-2 col-6">
                <div className="tp-header-logo">
                  <Link href="/">
                    <Image src={logo} alt="logo" priority style={{height:'auto'}} />
                  </Link>
                </div>
              </div>
              <div className="col-xxl-8 col-xl-7 d-none d-xl-block">
                <div className="main-menu text-center">
                  <NavMenus sm_mega_title={sm_mega_title} />
                </div>
              </div>
              <div className="col-xxl-2 col-xl-3 col-6">
                <div className="tp-header-contact d-flex align-items-center justify-content-end">
                  <div className="tp-header-3-btn d-none d-sm-block">
                    <Link className="tp-btn-tomato" href="/contact">
                      Book a visit
                    </Link>
                  </div>
                  <div className="offcanvas-btn d-xxl-none ml-30">
                    <OffcanvasButton offcanvas_cls="offcanvas__3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </HeaderStickyWrapper>
      </header>

      {/* mobile offcanvas */}
      <div id="offcanvas-sidebar"/>
      {/* mobile offcanvas */}
    </>
  );
}
