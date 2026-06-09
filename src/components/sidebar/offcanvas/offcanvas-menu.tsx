"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import NavPagesDropdown from "@/components/header/navbar/dropdown/nav-pages-dropdown";
import NavHomeDropdown from "@/components/header/navbar/dropdown/nav-home-dropdown";
import NavSmMegaMenus from "@/components/header/navbar/dropdown/nav-sm-mega-menus";
import NavLink from "@/components/i18n/nav-link";
import { Link } from "@/i18n/navigation";
import {
  menuHasSubmenu,
  menuIsSingleSimpleDropdown,
  menuShowsDropdownChevron,
} from "@/lib/menu/nav-submenu";
import type { IMenu } from "@/types/menu-d-t";

type Props = {
  menuData?: IMenu[];
  showFacultiesLink?: boolean;
};

export default function OffcanvasMenu({
  menuData = [],
  showFacultiesLink = true,
}: Props) {
  const t = useTranslations("Nav");
  const tHeader = useTranslations("Header");
  const [navTitle, setNavTitle] = useState("");

  const openMobileMenu = (menuKey: string) => {
    setNavTitle((prev) => (prev === menuKey ? "" : menuKey));
  };

  return (
    <div className="tp-main-menu-mobile d-xl-none">
      <nav className="tp-main-menu-content">
        <ul>
          {menuData.map((menu) => {
            const label = t(menu.title as never);
            const menuKey = String(menu.id);
            const hasSub = menuHasSubmenu(menu);
            const showChevron = menuShowsDropdownChevron(menu);
            const singleListOnly = menuIsSingleSimpleDropdown(menu);
            const isExpanded = navTitle === menuKey;

            const liClass = [
              hasSub && "has-dropdown",
              hasSub && !showChevron && "menu-no-dropdown-chevron",
              (menu.home_dropdown || menu.pages_dropdown) && "tp-static",
              isExpanded && "dropdown-opened expanded",
            ]
              .filter(Boolean)
              .join(" ");

            return (
              <li key={menu.id} className={liClass}>
                <NavLink
                  href={menu.link}
                  className={
                    menu.home_dropdown || menu.pages_dropdown ? "tp-static" : ""
                  }
                >
                  {label}
                  {hasSub && showChevron ? (
                    <>
                      {" "}
                      <button
                        type="button"
                        onClick={() => openMobileMenu(menuKey)}
                        className={`dropdown-toggle-btn ${isExpanded ? "dropdown-opened" : ""}`}
                        aria-label="Toggle submenu"
                      />
                    </>
                  ) : null}
                </NavLink>

                {menu.home_dropdown && (
                  <div
                    className="tp-megamenu-main"
                    style={{ display: isExpanded ? "block" : "none" }}
                  >
                    <NavHomeDropdown home_dropdown={menu.home_dropdown} />
                  </div>
                )}

                {menu.sm_mega_menus && (
                  <div
                    className="tp-megamenu-main"
                    style={{ display: isExpanded ? "block" : "none" }}
                  >
                    <NavSmMegaMenus dropdown_menus={menu.sm_mega_menus} />
                  </div>
                )}

                {menu.pages_dropdown && (
                  <div
                    className="tp-megamenu-main"
                    style={{ display: isExpanded ? "block" : "none" }}
                  >
                    <NavPagesDropdown pages_dropdown={menu.pages_dropdown} />
                  </div>
                )}

                {menu.dropdown_menus && (
                  <ul
                    className="tp-submenu"
                    style={{
                      display:
                        singleListOnly || isExpanded ? "block" : "none",
                    }}
                  >
                    {menu.dropdown_menus.map((dm) => (
                      <li key={dm.id}>
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
        <div className="offcanvas-faculties-cta mt-25">
          <Link href="/faculties" className="tp-btn">
            {tHeader("faculties")}
          </Link>
        </div>
      ) : null}
    </div>
  );
}
