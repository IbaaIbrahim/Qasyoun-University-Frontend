"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import menu_data from "@/data/menu-data";
import NavPagesDropdown from "@/components/header/navbar/dropdown/nav-pages-dropdown";
import NavHomeDropdown from "@/components/header/navbar/dropdown/nav-home-dropdown";
import NavLink from "@/components/i18n/nav-link";
import { Link } from "@/i18n/navigation";
import {
  menuHasSubmenu,
  menuIsSingleSimpleDropdown,
} from "@/lib/menu/nav-submenu";

export default function OffcanvasMenu() {
  const t = useTranslations("Nav");
  const [navTitle, setNavTitle] = useState("");

  function menuTitle(id: number, fallback: string): string {
    switch (id) {
      case 1:
        return t("home");
      case 2:
        return t("academics");
      case 3:
        return t("admissions");
      case 4:
        return t("pages");
      case 5:
        return t("blog");
      default:
        return fallback;
    }
  }

  const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };

  return (
    <div className="tp-main-menu-mobile d-xl-none">
      <nav className="tp-main-menu-content">
        <ul className="dropdown-opened">
          {menu_data.map((menu) => {
            const label = menuTitle(menu.id, menu.title);
            const hasSub = menuHasSubmenu(menu);
            const singleListOnly = menuIsSingleSimpleDropdown(menu);
            const needsMobileToggle =
              Boolean(menu.home_dropdown?.length) ||
              Boolean(menu.pages_dropdown?.length) ||
              (menu.sm_mega_menus?.length ?? 0) > 0 ||
              (menu.dropdown_menus?.length ?? 0) > 1;

            const liClass = [
              hasSub && "has-dropdown",
              (menu.home_dropdown || menu.pages_dropdown) && "tp-static",
              navTitle === label ? "dropdown-opened expanded" : "",
            ]
              .filter(Boolean)
              .join(" ");

            return (
              <li key={menu.id} className={liClass}>
                <NavLink
                  href={menu.link}
                  className={`${menu.home_dropdown || menu.pages_dropdown ? "tp-static" : ""}`}
                >
                  {label}
                  {needsMobileToggle ? (
                    <>
                      {" "}
                      <button
                        type="button"
                        onClick={() => openMobileMenu(label)}
                        className={`dropdown-toggle-btn ${navTitle === label ? "dropdown-opened" : ""}`}
                        aria-label="Toggle submenu"
                      />
                    </>
                  ) : null}
                </NavLink>

                {menu.home_dropdown && (
                  <div
                    className="tp-megamenu-main"
                    style={{ display: navTitle === label ? "block" : "none" }}
                  >
                    <NavHomeDropdown home_dropdown={menu.home_dropdown} />
                  </div>
                )}

                {menu.sm_mega_menus && (
                  <div
                    className="tp-megamenu-main"
                    style={{ display: navTitle === label ? "block" : "none" }}
                  >
                    <div className="megamenu-demo-small p-relative">
                      <div className="tp-megamenu-small-content">
                        <div className="row tp-gx-50">
                          <div className="col-xl-6">
                            <div className="tp-megamenu-list">
                              {menu.sm_mega_menus.slice(0, 4).map((dm) => (
                                <Link key={dm.id} href={dm.link}>
                                  {dm.title}
                                </Link>
                              ))}
                            </div>
                          </div>
                          <div className="col-xl-6">
                            <div className="tp-megamenu-list">
                              {menu.sm_mega_menus.slice(4).map((dm) => (
                                <Link key={dm.id} href={dm.link}>
                                  {dm.title}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {menu.pages_dropdown && (
                  <div
                    className="tp-megamenu-main"
                    style={{ display: navTitle === label ? "block" : "none" }}
                  >
                    <NavPagesDropdown pages_dropdown={menu.pages_dropdown} />
                  </div>
                )}

                {menu.dropdown_menus && (
                  <ul
                    className="tp-submenu"
                    style={{
                      display:
                        singleListOnly || navTitle === label ? "block" : "none",
                    }}
                  >
                    {menu.dropdown_menus.map((dm) => (
                      <li key={dm.id}>
                        <NavLink href={dm.link}>{t(dm.title)}</NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
