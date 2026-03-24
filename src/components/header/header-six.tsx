import Link from "next/link";
import Image from "next/image";
import { SearchSvg } from "../svg";
import NavMenus from "./navbar/nav-menus";
import ProfileDropdown from "./header-profile/profile-dropdown";
import logo from '@/assets/img/logo/logo-black.png';
import HeaderStickyWrapper from "./header-sticky-provider/header-sticky-wrapper";
import AnnouncementArea from "./announcement/announcement-area";
import CartButton from "./button/cart-button";
import OffcanvasButton from "./button/offcanvas-btn";

// prop type 
type IProps = {
   sm_mega_title?: string;
   inner?: boolean;
};

export default function HeaderSix({ sm_mega_title,inner }: IProps) {
   return (
      <>
         {/* announcement area */}
         {!inner && <AnnouncementArea/>}
         {/* announcement area */}

         <header className="header-area p-relative">
            <HeaderStickyWrapper cls={`tp-header-2 tp-header-shop ${inner?'':'bxs-none'}`}>
               <div className="container">
                  <div className="row align-items-center">
                     <div className="col-xxl-4 col-lg-6 col-6">
                        <div className="tp-header-2-right d-flex align-items-center">
                           <div className="tp-header-shop-logo tp-header-logo pr-20">
                              <Link href="/">
                                 <Image src={logo} alt="logo" style={{ height: 'auto' }} />
                              </Link>
                           </div>
                           <div className="tp-header-shop-search p-relative d-none d-lg-block">
                              <form action="#">
                                 <input type="text" placeholder="Search..." />
                                 <button className="tp-header-search-btn" type="submit">
                                    <span>
                                       <SearchSvg clr="#8B8B8B" />
                                    </span>
                                 </button>
                              </form>
                           </div>
                        </div>
                     </div>
                     <div className="col-xxl-5 col-lg-6 d-none d-xxl-block">
                        <div className="main-menu text-xxl-end d-none d-xxl-block">
                           {/* nav menus start */}
                           <NavMenus sm_mega_title={sm_mega_title} />
                           {/* nav menus end */}
                        </div>
                     </div>
                     <div className="col-xxl-3 col-lg-6 col-6">
                        <div className="tp-header-2-contact tp-header-shop d-flex align-items-center justify-content-end">
                           <div className="tp-header-2-cart d-none d-md-block">
                              <CartButton/>
                           </div>
                           <div className="tp-header-shop-btn d-none d-lg-block">
                              <Link className="tp-btn-inner" href="/shop-grid">Buy our book</Link>
                           </div>

                           {/* profile dropdown */}
                           <ProfileDropdown top_cls="tp-header-shop-login" />
                           {/* profile dropdown */}

                           <div className="offcanvas-btn d-xxl-none ml-30">
                              <OffcanvasButton/>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </HeaderStickyWrapper>
         </header>

         {/* cart mini sidebar */}
         <div id="cart-mini-sidebar"/>
         {/* cart mini sidebar */}

         {/* mobile offcanvas */}
         <div id="offcanvas-sidebar"/>
         {/* mobile offcanvas */}
      </>
   )
}
