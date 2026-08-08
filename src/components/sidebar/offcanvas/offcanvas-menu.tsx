"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import NavPagesDropdown from "@/components/header/navbar/dropdown/nav-pages-dropdown";
import NavHomeDropdown from "@/components/header/navbar/dropdown/nav-home-dropdown";
import NavSmMegaMenus from "@/components/header/navbar/dropdown/nav-sm-mega-menus";
import NavLink from "@/components/i18n/nav-link";
import { Link } from "@/i18n/navigation";
import { menuHasSubmenu } from "@/lib/menu/nav-submenu";
import type { IMenu } from "@/types/menu-d-t";

type Props = {
  menuData?: IMenu[];
  showFacultiesLink?: boolean;
  onHandleOffCanvas?: () => void;
};

export default function OffcanvasMenu({
  menuData = [],
  showFacultiesLink = true,
  onHandleOffCanvas,
}: Props) {
  const t = useTranslations("Nav");
  const tHeader = useTranslations("Header");
  const [navTitle, setNavTitle] = useState("");

  const openMobileMenu = (menuKey: string) => {
    setNavTitle((prev) => (prev === menuKey ? "" : menuKey));
  };

  const handleLinkClick = () => {
    if (onHandleOffCanvas) {
      onHandleOffCanvas();
    }
  };

  return (
    <div className="tp-main-menu-mobile d-xl-none">
      <nav className="tp-main-menu-content">
        <ul>
          {menuData.map((menu) => {
            const label = t(menu.title as never);
            const menuKey = String(menu.id);
            const hasSub = menuHasSubmenu(menu);
            const isExpanded = navTitle === menuKey;

            const liClass = [
              hasSub && "has-dropdown",
              (menu.home_dropdown || menu.pages_dropdown) && "tp-static",
              isExpanded && "dropdown-opened expanded",
            ]
              .filter(Boolean)
              .join(" ");

            const isPlaceholderLink = !menu.link || menu.link === "#";

            return (
              <li key={menu.id} className={liClass}>
                <div>
                  <NavLink
                    href={menu.link}
                    className={
                      menu.home_dropdown || menu.pages_dropdown ? "tp-static" : ""
                    }
                    onClick={(e) => {
                      if (hasSub && isPlaceholderLink) {
                        e.preventDefault();
                        openMobileMenu(menuKey);
                      } else {
                        handleLinkClick();
                      }
                    }}
                  >
                    {label}
                    {hasSub ? (
                      <span
                        role="button"
                        tabIndex={0}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          openMobileMenu(menuKey);
                        }}
                        className={`dropdown-toggle-btn ${isExpanded ? "dropdown-opened" : ""}`}
                        aria-label="Toggle submenu"
                      />
                    ) : null}
                  </NavLink>
                </div>

                {menu.home_dropdown && (
                  <div
                    className="tp-megamenu-main"
                    style={{ display: isExpanded ? "block" : "none" }}
                    onClick={handleLinkClick}
                  >
                    <NavHomeDropdown home_dropdown={menu.home_dropdown} />
                  </div>
                )}

                {menu.sm_mega_menus && (
                  <div
                    className="tp-megamenu-main"
                    style={{ display: isExpanded ? "block" : "none" }}
                    onClick={handleLinkClick}
                  >
                    <NavSmMegaMenus dropdown_menus={menu.sm_mega_menus} />
                  </div>
                )}

                {menu.pages_dropdown && (
                  <div
                    className="tp-megamenu-main"
                    style={{ display: isExpanded ? "block" : "none" }}
                    onClick={handleLinkClick}
                  >
                    <NavPagesDropdown pages_dropdown={menu.pages_dropdown} />
                  </div>
                )}

                {menu.dropdown_menus && (
                  <ul
                    className="tp-submenu"
                    style={{
                      display: isExpanded ? "block" : "none",
                    }}
                  >
                    {menu.dropdown_menus.map((dm) => (
                      <li key={dm.id} onClick={handleLinkClick}>
                        <NavLink href={dm.link}>{t(dm.title as never)}</NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      {showFacultiesLink ? (
        <div className="offcanvas-faculties-cta mt-25" onClick={handleLinkClick}>
          <Link href="/faculties" className="tp-btn">
            {tHeader("faculties")}
          </Link>
        </div>
      ) : null}
    </div>
  );
}
