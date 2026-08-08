import Image from "next/image";
import Link from "next/link";
import { Email } from "../svg";
import FooterSocial from "./footer-social";
import FooterNewsletterForm from './footer-newsletter-form';
import logo from '@/assets/img/logo/logo-black-2.png';
import { footerAboutLinks, footerQuickLinks } from "@/data/footer-links";
import VisitorCounterWidget from '../common/visitor-counter-widget';

type Props = {
  dashboard_footer?: boolean;
  bgClr?: string;
};

export default function FooterSeven({ bgClr, dashboard_footer = false }: Props) {
  return (
    <footer>
      <div className="tp-footer-main pt-80 pb-55">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-3 col-sm-6">
              <div className="tp-footer-widget tp-footer-col-1 mb-30">
                <div className="tp-footer-widget-logo mb-20 tp-header-logo">
                  <Link href="/">
                    <Image src={logo} alt="logo" />
                  </Link>
                </div>
                <div className="tp-footer-widget-content">
                  <p>
                    Acadia education theme, your gateway to learning <br />
                    transformative knowledge.
                  </p>
                </div>
                <div className="tp-footer-contact">
                  <span>Got Questions? Call us</span>
                  <a href="tel:0123456789">+670 413 90 762</a>
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
              <div className="tp-footer-widget tp-footer-col-2 mb-30">
                <h4 className="tp-footer-widget-title mb-20">About</h4>
                <div className="tp-footer-widget-link">
                  <ul>
                    {footerAboutLinks.map((link) => (
                      <li key={link.id}>
                        <Link href={link.link}>{link.titleKey}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-sm-4">
              <div className="tp-footer-widget tp-footer-col-3 mb-30">
                <h4 className="tp-footer-widget-title mb-20">Quick Links</h4>
                <div className="tp-footer-widget-link">
                  <ul>
                    {footerQuickLinks.map((link) => (
                      <li key={link.id}>
                        <Link href={link.link}>{link.titleKey}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-8">
              <div className="p-footer-widget tp-footer-col-4 mb-30">
                <h4 className="tp-footer-widget-title mb-20">Our Newsletter</h4>
                <div className="tp-footer-newsletter-wrap">
                  <p>
                    Enter your email and we will send you <br /> more information
                  </p>
                  <FooterNewsletterForm style_2={true} />
                  <div className="tp-footer-newsletter-social">
                    <FooterSocial />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${dashboard_footer?'tp-footer-bottom tpd-dashboard-footer-bottom':'tp-footer-5-bottom tp-footer-inner-bottom'}`} 
        style={bgClr ? { backgroundColor: bgClr } : {}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-footer-copyright text-center d-flex flex-column align-items-center gap-2 py-3">
                <span>© {new Date().getFullYear()} <a href="#">QPU</a>. All rights reserved.</span>
                <VisitorCounterWidget />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
