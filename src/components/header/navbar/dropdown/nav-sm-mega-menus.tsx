import Image from "next/image";
import { IDropdownMenus } from "@/types/menu-d-t";
import cta_shape from "@/assets/img/cta/menu-cta-shape.png";
import NavLink from "@/components/i18n/nav-link";

type IProps = {
  dropdown_menus: IDropdownMenus[];
};

export default function NavSmMegaMenus({ dropdown_menus }: IProps) {
  return (
    <div className="megamenu-demo-small p-relative">
      <div className="tp-megamenu-small-content">
        <div className="row tp-gx-50">
          <div className="col-xl-6">
            <div className="tp-megamenu-list">
              {dropdown_menus.slice(0, 4).map((dm) => (
                <NavLink key={dm.id} href={dm.link}>
                  {dm.title}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="col-xl-6">
            <div className="tp-megamenu-list">
              {dropdown_menus.slice(4).map((dm) => (
                <NavLink key={dm.id} href={dm.link}>
                  {dm.title}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="tp-megamenu-small-cta-wrap d-none d-xl-block">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-megamenu-small-cta d-flex">
              <div className="tp-megamenu-small-cta-thumb">
                <Image src={cta_shape} alt="" />
              </div>
              <h4 className="tp-megamenu-small-cta-title">
                All signature programs
              </h4>
              <div className="tp-megamenu-small-cta-btn">
                <NavLink className="tp-btn" href="/university-application-form">
                  Apply now
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
