import type { Metadata } from "next";
import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import HeaderTwo from "@/components/header/header-two";
import FooterSeven from "@/components/footer/footer-seven";
import error_img from "@/assets/img/error/error.png";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("notFoundTitle"),
  };
}

export default async function NotFound() {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "NotFound" });

  return (
    <>
      {/* <HeaderTwo inner={true} /> */}
      <main>
        <div className="tp-error-area pt-120 pb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="tp-error-wrapper text-center">
                  <h4 className="tp-error-title">{t("title")}</h4>
                  <div className="tp-error-thumb mb-50">
                    <Image
                      src={error_img}
                      alt=""
                      style={{ height: "auto" }}
                    />
                  </div>
                  <div className="tp-error-content">
                    <h4 className="tp-error-title-sm">{t("heading")}</h4>
                    <p>{t("description")}</p>
                    <Link className="tp-btn-inner" href="/">
                      {t("backHome")}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <FooterSeven /> */}
    </>
  );
}
