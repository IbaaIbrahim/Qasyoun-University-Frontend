import type { IMenu } from "@/types/menu-d-t";

/** True if this top-level item renders any submenu / megamenu. */
export function menuHasSubmenu(menu: IMenu): boolean {
  return (
    (menu.home_dropdown?.length ?? 0) > 0 ||
    (menu.pages_dropdown?.length ?? 0) > 0 ||
    (menu.sm_mega_menus?.length ?? 0) > 0 ||
    (menu.dropdown_menus?.length ?? 0) > 0
  );
}

/**
 * FontAwesome chevron on `.has-dropdown > a::after` — hide when there is only
 * one navigable block (one mega column, one simple link list item, etc.).
 */
export function menuShowsDropdownChevron(menu: IMenu): boolean {
  const hd = menu.home_dropdown?.length ?? 0;
  if (hd > 1) return true;
  if (hd === 1) return false;

  const pd = menu.pages_dropdown?.length ?? 0;
  if (pd > 1) return true;
  if (pd === 1) return false;

  const sm = menu.sm_mega_menus?.length ?? 0;
  if (sm > 1) return true;
  if (sm === 1) return false;

  const dm = menu.dropdown_menus?.length ?? 0;
  return dm > 1;
}

/** One simple `dropdown_menus` entry only — no megamenu (mobile: no expand toggle). */
export function menuIsSingleSimpleDropdown(menu: IMenu): boolean {
  return (
    (menu.dropdown_menus?.length ?? 0) === 1 &&
    !(menu.home_dropdown?.length ?? 0) &&
    !(menu.pages_dropdown?.length ?? 0) &&
    !(menu.sm_mega_menus?.length ?? 0)
  );
}
