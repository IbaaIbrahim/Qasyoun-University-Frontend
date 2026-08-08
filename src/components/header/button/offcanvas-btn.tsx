"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "@/i18n/navigation";
import OffcanvasArea from "@/components/sidebar/offcanvas/offcanvas-area";
import type { IMenu } from "@/types/menu-d-t";

type Props = {
  children?: React.ReactNode;
  offcanvas_cls?: string;
  menuData?: IMenu[];
  brandLogoSrc?: string;
  brandLogoAlt?: string;
  logoHref?: string;
};

export default function OffcanvasButton({
  children,
  offcanvas_cls = "",
  menuData,
  brandLogoSrc,
  brandLogoAlt,
  logoHref,
}: Props) {
  const [isOpenOffcanvas, setIsOpenOffcanvas] = useState(false);
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPortalContainer(document.getElementById("offcanvas-sidebar"));
    }
  }, []);

  useEffect(() => {
    setIsOpenOffcanvas(false);
  }, [pathname]);

  const handleOffcanvasToggle = () => {
    setIsOpenOffcanvas(!isOpenOffcanvas);
  };

  return (
    <>
      <button
        onClick={handleOffcanvasToggle}
        className="offcanvas-open-btn"
        type="button"
        aria-expanded={isOpenOffcanvas}
        aria-controls="offcanvas-sidebar"
      >
        {children ? children : <i className="fa-solid fa-bars"></i>}
      </button>

      {portalContainer
        ? createPortal(
            <OffcanvasArea
              openOffCanvas={isOpenOffcanvas}
              onHandleOffCanvas={handleOffcanvasToggle}
              offcanvas_cls={offcanvas_cls}
              menuData={menuData}
              brandLogoSrc={brandLogoSrc}
              brandLogoAlt={brandLogoAlt}
              logoHref={logoHref}
            />,
            portalContainer,
          )
        : null}
    </>
  );
}
