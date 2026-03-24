import Link from "next/link";
import Image from "next/image";
import { RightArrowSix } from "../svg";
import FooterSocial from "./footer-social";
import logo from '@/assets/img/logo/logo-white.png';


// prop type 
type IProps = {
   inner?: boolean
}

export default function FooterFive({inner}: IProps) {
  return (
    <footer>
      <div className="tp-footer-4">
         <div className={`tp-footer-4-bg ${inner?'tp-footer-inner':''}`}>
            <div className="container">
               <div className="tp-footer-4-top">
                  <div className="row">
                     <div className="col-lg-6">
                        <h4 className="tp-footer-4-top-title">Sign now for offers <br/> and keep yourself informed!</h4>
                     </div>
                     <div className="col-lg-6">
                        <div className="tp-footer-4-top-form">
                           <form action="#">
                              <input type="text" placeholder="Enter your email..."/>
                             <button className="tp-footer-4-top-btn">Send
                                 <span>
                                    <RightArrowSix clr="currentColor" />
                                 </span>
                              </button>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="tp-footer-4-main pt-90 pb-70">
                  <div className="row">
                     <div className="col-lg-2 col-sm-6">
                        <div className="tp-footer-widget tp-footer-4-col-1 mb-30">
                           <div className={`tp-footer-4-btn ${inner?'tp-footer-btn-inner':''}`}>
                              <Link className="active" href="/university-apply">Apply Now</Link>
                              <Link href="/contact">Contact Us</Link>
                              <Link href="/contact">Visit Us</Link>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-4 col-sm-6">
                        <div className="tp-footer-widget tp-footer-widget-4 has-border tp-footer-4-col-2 mb-30">
                           <div className="tp-footer-widget-link">
                              <ul>
                                 <li><Link href="/about">About Us</Link></li>
                                 <li><a href="#">Courses</a></li>
                                 <li><a href="#">Parent Portal</a></li>
                                 <li><a href="#">News & Blogs</a></li>
                                 <li><a href="#">Events</a></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-3 col-sm-6">
                        <div className="tp-footer-widget tp-footer-widget-4 tp-footer-4-col-3 mb-30">
                           <div className="tp-footer-widget-link">
                              <ul>
                                 <li><a href="#">Students</a></li>
                                 <li><a href="#">Addmition</a></li>
                                 <li><a href="#">Faculty & Staffs</a></li>
                                 <li><a href="#">Tuition & Fees</a></li>
                                 <li><a href="#">Dress Code</a></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-3 col-sm-6">
                        <div className="tp-footer-widget tp-footer-widget-4 tp-footer-4-col-4 mb-30">
                           <div className="tp-footer-4-info">
                              <span>Germany — <br/> 785 15h Street, Office 478 Berlin, De 81566</span>
                              <div className="tp-footer-4-mail">
                                 <a href="mailto:info@email.com">info@email.com</a>
                              </div>
                              <div className="tp-footer-4-phone">
                                 <a href="tel:0123456789">+(402) 763 282 46</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className={`tp-footer-4-bottom ${inner?'tp-footer-inner-bottom':''}`}>
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-lg-3 col-md-3">
                     <div className="tp-footer-4-logo tp-header-logo">
                        <a href="#">
                            <Image src={logo} alt="logo" style={{height:"auto"}}/>
                        </a>
                     </div>
                  </div>
                  <div className="col-lg-6 col-md-5">
                     <div className="tp-footer-4-copyright text-start text-md-center">
                        <span>Copyright © {new Date().getFullYear()} <a href="#">ThemePure</a></span>
                        <span className="span"><a href="#">All Rights Reserved</a></span>
                        <span className="span"><a href="#">Privacy & Policy</a></span>
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-4">
                     <div className="tp-footer-4-social text-md-end">
                        <FooterSocial />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </footer>
  )
}
