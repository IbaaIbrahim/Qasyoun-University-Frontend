import Image from "next/image";
import { getTranslations, getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Email } from "../svg";
import FooterSocial from "./footer-social";
import logo from "@/assets/img/logo/logo-wide.png";
import logo_black from "@/assets/img/logo/logo-wide.png";
import { footerAboutLinks, footerQuickLinks } from "@/data/footer-links";
import { getSocialMedia } from "@/lib/services/social-media.service";
import FooterNewsletterForm from "./footer-newsletter-form";

type IProps = {
  style_2?: boolean;
  logoSrc?: string;
  email?: string;
  phoneNumber?: string;
};

import VisitorCounterWidget from "../common/visitor-counter-widget";

export default async function FooterOne({
  style_2 = false,
  logoSrc,
  email,
  phoneNumber,
}: IProps) {
  const locale = await getLocale();
  const socials = await getSocialMedia(locale);
  const t = await getTranslations("Footer");
  const tNav = await getTranslations("Nav");
  const year = new Date().getFullYear();

  return (
    <footer>
      <div
        className={`tp-footer-main ${style_2 ? "" : "grey-bg"} pt-80 pb-55`}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-3 col-sm-6">
              <div
                className={`tp-footer-widget ${style_2 ? "tp-footer-5-col-1" : "tp-footer-col-1"} mb-30`}
              >
                <div className="tp-footer-widget-logo mb-20 tp-header-logo">
                  <Link href="/">
                    <Image
                      src={logoSrc || (style_2 ? logo_black : logo)}
                      alt="logo"
                      priority
                      style={{ height: "auto", maxHeight: 50, objectFit: "contain" }}
                      width={125}
                      height={48}
                      unoptimized={!!logoSrc}
                    />
                  </Link>
                </div>
                <div className="tp-footer-widget-content">
                  <p>{t("description")}</p>
                </div>
                <div className="tp-footer-contact">
                  <span>{t("gotQuestions")}</span>
                  <a href={`tel:${phoneNumber || "+963999999999"}`}>
                    {phoneNumber || "+963 999 999 999"}
                  </a>
                </div>
                <div className="tp-footer-contact-mail">
                  <a href={`mailto:${email || "qpu@qpu.edu.sy"}`}>
                    <span>
                      <Email />
                    </span>
                    {email || "qpu@qpu.edu.sy"}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-6">
              <div
                className={`tp-footer-widget ${style_2 ? "tp-footer-5-col-2" : "tp-footer-col-2"} mb-30`}
              >
                <h4 className="tp-footer-widget-title mb-20">{t("about")}</h4>
                <div className="tp-footer-widget-link">
                  <ul>
                    {footerAboutLinks.map((link) => (
                      <li key={link.id}>
                        <Link href={link.link}>
                          {tNav(link.titleKey as never)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-sm-4">
              <div
                className={`tp-footer-widget ${style_2 ? "tp-footer-5-col-3" : "tp-footer-col-3"} mb-30`}
              >
                <h4 className="tp-footer-widget-title mb-20">
                  {t("quickLinks")}
                </h4>
                <div className="tp-footer-widget-link">
                  <ul>
                    {footerQuickLinks.map((link) => (
                      <li key={link.id}>
                        <Link href={link.link}>
                          {tNav(link.titleKey as never)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-8">
              <div
                className={`p-footer-widget ${style_2 ? "tp-footer-5-col-4" : "tp-footer-col-4"} mb-30`}
              >
                <h4 className="tp-footer-widget-title mb-20">
                  {t("newsletter")}
                </h4>
                <div
                  className="tp-footer-newsletter-wrap"
                  suppressHydrationWarning
                >
                  <p>{t("newsletterLead")}</p>
                  <FooterNewsletterForm style_2={style_2} />
                  <div className="tp-footer-newsletter-social">
                    <FooterSocial socials={socials} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${style_2 ? "tp-footer-5-bottom" : "tp-footer-bottom"}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-footer-copyright text-center d-flex flex-column align-items-center gap-2 py-3">
                <span suppressHydrationWarning>
                  {t("copyright", { year })}
                </span>
                <VisitorCounterWidget />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
