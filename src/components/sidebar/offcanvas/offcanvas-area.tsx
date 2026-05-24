import { Link } from "@/i18n/navigation";
import Image from "next/image";
import logo from "@/assets/img/logo/logo-wide.png";
import { CloseThreeSvg } from "@/components/svg";
import OffcanvasMenu from "./offcanvas-menu";
import type { IMenu } from "@/types/menu-d-t";

type IProps = {
  openOffCanvas: boolean;
  onHandleOffCanvas: () => void;
  offcanvas_cls?: string;
  menuData?: IMenu[];
  brandLogoSrc?: string;
  brandLogoAlt?: string;
  logoHref?: string;
};

export default function OffcanvasArea({
  openOffCanvas,
  onHandleOffCanvas,
  offcanvas_cls,
  menuData,
  brandLogoSrc,
  brandLogoAlt,
  logoHref = "/",
}: IProps) {
  const logoSrc = brandLogoSrc ?? logo;

  return (
    <>
      <div
        className={`offcanvas__area ${offcanvas_cls ?? ""} ${openOffCanvas ? "offcanvas-opened" : ""}`}
      >
        <div className="offcanvas__wrapper">
          <div className="offcanvas__close">
            <button
              onClick={onHandleOffCanvas}
              className="offcanvas__close-btn offcanvas-close-btn"
              type="button"
            >
              <CloseThreeSvg />
            </button>
          </div>
          <div className="offcanvas__content">
            <div className="offcanvas__top mb-40 d-flex justify-content-between align-items-center">
              <div className="offcanvas__logo tp-header-logo">
                <Link href={logoHref}>
                  <Image
                    src={logoSrc}
                    alt={brandLogoAlt ?? "logo"}
                    width={180}
                    height={48}
                    style={{ height: "auto", objectFit: "contain" }}
                    unoptimized={Boolean(brandLogoSrc)}
                  />
                </Link>
              </div>
            </div>
            <div className="offcanvas-main">
              <OffcanvasMenu menuData={menuData} />
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={onHandleOffCanvas}
        className={`body-overlay ${openOffCanvas ? "opened" : ""}`}
        role="presentation"
      />
    </>
  );
}
