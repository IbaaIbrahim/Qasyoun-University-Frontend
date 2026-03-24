import Link from "next/link";
import Image from "next/image";

import { Email } from "../svg";
import FooterSocial from "./footer-social";
import logo from "@/assets/img/logo/logo-red.png";
import logo_black from "@/assets/img/logo/logo-black-2.png";
import { footerLinks } from "@/data/footer-links";

// prop type 
type IProps = {
  style_2?: boolean
}

export default function FooterOne({ style_2 = false }: IProps) {
  return (
    <footer>
      <div className={`tp-footer-main ${style_2 ? '' : 'grey-bg'} pt-80 pb-55`}>
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-3 col-sm-6">
              <div className={`tp-footer-widget ${style_2 ? 'tp-footer-5-col-1' : 'tp-footer-col-1'} mb-30`}>
                <div className="tp-footer-widget-logo mb-20 tp-header-logo">
                  <Link href="/">
                    <Image 
                       src={style_2 ? logo_black : logo} 
                       alt="logo" priority 
                       style={{ height: "auto" }} />
                  </Link>
                </div>
                <div className="tp-footer-widget-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur <br /> adipisc ing
                    elit.
                  </p>
                </div>
                <div className="tp-footer-contact">
                  <span>Got Questions? Call us</span>
                  <a href="tel:012345678">+670 413 90 762</a>
                </div>
                <div className="tp-footer-contact-mail">
                  <a href="mailto:acadia@gmail.com">
                    <span>
                      <Email />
                    </span>
                    acadia@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-6">
              <div className={`tp-footer-widget ${style_2 ? 'tp-footer-5-col-2' : 'tp-footer-col-2'} mb-30`}>
                <h4 className="tp-footer-widget-title mb-20">About</h4>
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
            <div className="col-xl-2 col-lg-2 col-sm-4">
              <div className={`tp-footer-widget ${style_2 ? 'tp-footer-5-col-3' : 'tp-footer-col-3'} mb-30`}>
                <h4 className="tp-footer-widget-title mb-20">Quick links</h4>
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
            <div className="col-xl-4 col-lg-4 col-sm-8">
              <div className={`p-footer-widget ${style_2 ? 'tp-footer-5-col-4' : 'tp-footer-col-4'} mb-30`}>
                <h4 className="tp-footer-widget-title mb-20">Our Newsletter</h4>
                <div className="tp-footer-newsletter-wrap">
                  <p>
                    Enter your email and we will send you <br /> more
                    information
                  </p>
                  <form action="#">
                    <div className="tp-footer-newsletter-wrapper mb-30">
                      <div className={`tp-footer-newsletter-input ${style_2 ? 'tp-footer-5-newsletter-input' : ''}`}>
                        <input type="email" placeholder="Your email" />
                      </div>
                      <div className={`${style_2 ? 'tp-footer-5-newsletter-submit' : 'tp-footer-newsletter-submit'}`}>
                        <button className={`${style_2 ? 'tp-btn-4' : 'tp-btn'}`}>Subscribe</button>
                      </div>
                    </div>
                  </form>
                  {/* footer social */}
                  <div className="tp-footer-newsletter-social">
                    <FooterSocial />
                  </div>
                  {/* footer social */}
                </div>
              </div>
            </div> 
          </div>
        </div>
      </div>
      <div className={`${style_2 ? 'tp-footer-5-bottom' : 'tp-footer-bottom'}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-footer-copyright text-center">
                <span>
                  © {new Date().getFullYear()} <a href="#">Acadia</a>. All
                  rights reserved.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
