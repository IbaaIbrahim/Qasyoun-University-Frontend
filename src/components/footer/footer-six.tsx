import Link from 'next/link';
import { Email } from '../svg';
import FooterSocial from './footer-social';
import { footerLinks } from '@/data/footer-links';
import Image from 'next/image';
import logo from '@/assets/img/logo/logo-black.png';
import pay_brand from '@/assets/img/footer/pay_brand.png';

export default function FooterSix() {
   return (
      <footer>
         <div className="tp-footer-main tp-footer-shop pt-80 pb-55">
            <div className="container">
               <div className="row">
                  <div className="col-xl-4 col-lg-3 col-md-6 col-sm-6">
                     <div className="tp-footer-widget tp-footer-shop-col-1 mb-30">
                        <div className="tp-footer-widget-logo mb-20 tp-header-logo">
                           <Link href="/">
                              <Image src={logo} alt="logo" style={{height:"auto"}} />
                           </Link>
                        </div>
                        <div className="tp-footer-widget-content">
                           <p>Lorem ipsum dolor sit amet, consectetur <br /> adipisc ing elit.</p>
                        </div>
                        <div className="tp-footer-contact shop">
                           <span>Got Questions? Call us</span>
                           <a href="tel:012345678">+670 413 90 762</a>
                        </div>
                        <div className="tp-footer-contact-mail shop">
                           <a href="mailto:acadia@gmail.com">
                              <span>
                                 <Email />
                              </span>
                              acadia@gmail.com</a>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6">
                     <div className="tp-footer-widget tp-footer-shop-col-2 mb-30">
                        <h4 className="tp-footer-widget-title mb-15">About</h4>
                        <div className="tp-footer-widget-link">
                           <ul>
                           {footerLinks.link_one.map((link) => (
                              <li key={link.id}>
                                 <Link href={link.link}>{link.title}</Link>
                              </li>
                           ))}
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-5 col-sm-5">
                     <div className="tp-footer-widget tp-footer-shop-col-3 mb-30">
                        <h4 className="tp-footer-widget-title mb-15">Quick links</h4>
                        <div className="tp-footer-widget-link">
                           <ul>
                              {footerLinks.link_two.map((link) => (
                                 <li key={link.id}>
                                    <Link href={link.link}>{link.title}</Link>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-4 col-lg-3 col-md-7 col-sm-7">
                     <div className="p-footer-widget tp-footer-shop-col-4 mb-30">
                        <h4 className="tp-footer-widget-title mb-15">Our Newsletter</h4>
                        <div className="tp-footer-newsletter-wrap">
                           <p>Enter your email and we will send you <br /> more information</p>
                           <form action="#">
                              <div className="tp-footer-newsletter-wrapper tp-footer-shop-input mb-30">
                                 <div className="tp-footer-newsletter-input">
                                    <input type="email" placeholder="Your email" />
                                 </div>
                                 <div className="tp-footer-5-newsletter-submit">
                                    <button className="tp-btn-inner">Subscribe</button>
                                 </div>
                              </div>
                           </form>
                           <div className="tp-footer-newsletter-social tp-footer-inner-social">
                              <FooterSocial />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="tp-footer-5-bottom tp-footer-shop-bottom">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-md-6">
                     <div className="tp-footer-copyright ">
                        <span>© {new Date().getFullYear()} <a href="#">Acadia</a>. All rights reserved.</span>
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="tp-footer-copyright-payment text-start text-md-end">
                        <a href="#"><Image src={pay_brand} alt="pay-brand" /></a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   )
}
