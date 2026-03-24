import FooterSocial from './footer-social';
import { footerLinks } from '@/data/footer-links';
import Link from 'next/link';
import { Email } from '../svg';
import logo from '@/assets/img/logo/logo-white.png';
import Image from 'next/image';
import tree_1 from '@/assets/img/shape/footer/fw-3-tree-1.png';
import tree_2 from '@/assets/img/shape/footer/fw-3-tree-2.png';
import star from '@/assets/img/shape/footer/fw-3-star-3.png';
import cartoon_1 from '@/assets/img/shape/footer/fw-3-cartoon-4.png';
import cartoon_2 from '@/assets/img/shape/footer/fw-3-cartoon-5.png';

export default function FooterThree() {
  return (
    <footer>
      <div className="tp-footer-3 tp-footer-3-bg" style={{ backgroundImage: "url(/assets/img/bg/footer-3-bg.jpg)" }}>
        <div className="container">
          <div className="tp-footer-main">
            <div className="row">
              <div className="col-xl-4 col-lg-3 col-sm-6">
                <div className="tp-footer-widget tp-footer-3-col-1 mb-30">
                  <div className="tp-footer-widget-logo mb-20 tp-header-logo">
                    <a href="#">
                      <Image src={logo} alt="logo" style={{ height: "auto" }} />
                    </a>
                  </div>
                  <div className="tp-footer-widget-content">
                    <p>Lorem ipsum dolor sit amet, mea <br /> ei viderer probatus</p>
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
                      acadia@gmail.com</a>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-sm-6">
                <div className="tp-footer-widget tp-footer-3-col-2 mb-30">
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
              <div className="col-xl-2 col-lg-2 col-sm-6">
                <div className="tp-footer-widget tp-footer-3-col-3 mb-30">
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
              <div className="col-xl-4 col-lg-4 col-sm-6">
                <div className="p-footer-widget tp-footer-3-col-4 mb-30">
                  <h4 className="tp-footer-widget-title mb-15">Our Newsletter</h4>
                  <div className="tp-footer-newsletter-wrap">
                    <p>Enter your email and we will send you <br /> more information</p>
                    <form action="#">
                      <div className="tp-footer-newsletter-wrapper mb-30">
                        <div className="tp-footer-newsletter-input">
                          <input type="email" placeholder="Your email" />
                        </div>
                        <div className="tp-footer-newsletter-submit">
                          <button className="tp-btn">Subscribe</button>
                        </div>
                      </div>
                    </form>
                    <div className="tp-footer-newsletter-social">
                      <FooterSocial />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="tp-footer-copyright text-center">
                <span>© {new Date().getFullYear()} <a href="#">Acadia</a>. All rights reserved.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-footer-shape">
          <div className="tp-footer-3-shape-1">
            <Image src={tree_1} alt="tree" />
          </div>
          <div className="tp-footer-3-shape-2">
            <Image src={tree_2} alt="tree" />
          </div>
          <div className="tp-footer-3-shape-3">
            <Image src={star} alt="star" />
          </div>
          <div className="tp-footer-3-shape-4">
            <Image src={cartoon_1} alt="cartoon" />
          </div>
          <div className="tp-footer-3-shape-5">
            <Image src={cartoon_2} alt="cartoon" />
          </div>
        </div>
      </div>
    </footer>
  )
}
