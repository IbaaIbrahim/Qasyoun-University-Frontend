import React from "react";
import { getTranslations } from "next-intl/server";
import NavPagesDropdown from "./dropdown/nav-pages-dropdown";
import NavHomeDropdown from "./dropdown/nav-home-dropdown";
import NavSmMegaMenus from "./dropdown/nav-sm-mega-menus";
import NavLink from "@/components/i18n/nav-link";
import { IMenu } from "@/types/menu-d-t";

type IProps = {
  sm_mega_title?: string;
  menu_data?: IMenu[];
};

export default async function NavMenus({ sm_mega_title, menu_data }: IProps) {
  const t = await getTranslations("Nav");

  return (
    <nav className="tp-main-menu-content">
      <ul>
        {menu_data?.map((menu) => (
          <li
            key={menu.id}
            className={`has-dropdown ${menu.home_dropdown || menu.pages_dropdown ? "tp-static" : ""
              }`}
          >
            <NavLink href={menu.link}>
              {t(menu.title)}
            </NavLink>

            {menu.home_dropdown && (
              <div className="tp-megamenu-main tp-megamenu-container">
                <NavHomeDropdown home_dropdown={menu.home_dropdown} />
              </div>
            )}

            {menu.sm_mega_menus && (
              <div className="tp-megamenu-main tp-megamenu-small">
                <NavSmMegaMenus dropdown_menus={menu.sm_mega_menus} />
              </div>
            )}

            {menu.pages_dropdown && (
              <div className="tp-megamenu-main tp-megamenu-fullwidth">
                <NavPagesDropdown pages_dropdown={menu.pages_dropdown} />
              </div>
            )}

            {menu.dropdown_menus && (
              <ul className="tp-submenu">
                {menu.dropdown_menus.map((dm) => (
                  <li key={dm.id}>
                    <NavLink href={dm.link}>{t(dm.title)}</NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
