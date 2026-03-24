import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/img/logo/logo-black.png";
import { CloseFiveSvg } from "../svg";


export default function HeaderEight() {
   return (
      <header className="header-area">
         <div className="tp-header-2 tp-header-new-course">
            <div className="container-fluid">
               <div className="row align-items-center">
                  <div className="col-2">
                     <div className="tp-header-2-right d-flex align-items-center">
                        <div className="logo tp-header-logo">
                           <Link href="/">
                              <Image src={logo} alt="logo" style={{ height: 'auto' }} />
                           </Link>
                        </div>
                     </div>
                  </div>
                  <div className="col-10">
                     <div className="tp-header-new-course-right d-flex justify-content-end">
                        <div className="tp-header-new-course-option d-none d-sm-block">
                           <a className="draft" href="#">Save as Draft</a>
                           <a className="preview" href="#">Preview</a>
                           <a className="pulish" href="#">Publish</a>
                        </div>
                        <span>
                           <Link href="/dashboard/instructor-dashboard"><CloseFiveSvg /></Link>
                        </span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </header>
   )
}
