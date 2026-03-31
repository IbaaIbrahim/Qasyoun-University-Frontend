import React from "react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import calling from "@/assets/img/icon/calling.svg";
import HeaderLanguage from "./header-language";

export default async function HeaderTopArea() {
  const t = await getTranslations("Header");

  return (
    <div className="tp-header-top theme-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="tp-heder-info d-flex justify-content-center justify-content-lg-start align-items-center">
              <div className="tp-header-info-item d-none d-md-block">
                <span>
                  <a href="https://www.facebook.com">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  {t("followers")}
                </span>
              </div>
              <div className="tp-header-info-item">
                <span>
                  <a href="tel:0123456789">
                    <i>
                      <Image src={calling} alt="" />
                    </i>{" "}
                    +(402) 763 282 46
                  </a>
                </span>
              </div>
              <div className="tp-header-info-item">
                <div className="header-bottom__lang">
                  <ul>
                    <HeaderLanguage />
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 d-none d-lg-block">
            <div className="tp-header-right-list d-flex justify-content-md-end">
              <a href="#">{t("campus")}</a>
              <a href="#">{t("students")}</a>
              <a href="#">{t("staffs")}</a>
              <a href="#">{t("alumni")}</a>
              <a href="#">{t("helpDesk")}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
