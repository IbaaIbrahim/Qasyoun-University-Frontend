import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { RightArrowTwo } from "../svg";

import ser_icon_1 from "@/assets/img/icon/service/service-icon-1.svg";
import ser_icon_2 from "@/assets/img/icon/service/service-icon-2.svg";
import ser_icon_3 from "@/assets/img/icon/service/service-icon-3.svg";
import ser_icon_4 from "@/assets/img/icon/service/service-icon-4.svg";

const SHORTCUTS = [
  { id: 1, icon: ser_icon_1, href: "/admission/why-qpu" as const, titleKey: "card1Title" as const, textKey: "card1Text" as const },
  { id: 2, icon: ser_icon_2, href: "/about/vision-mission" as const, titleKey: "card2Title" as const, textKey: "card2Text" as const },
  { id: 3, icon: ser_icon_3, href: "/admission/admission-requirements" as const, titleKey: "card3Title" as const, textKey: "card3Text" as const },
  { id: 4, icon: ser_icon_4, href: "/admission/tuition-fees" as const, titleKey: "card4Title" as const, textKey: "card4Text" as const },
];

export default async function ServiceOne() {
  const t = await getTranslations("ServiceShortcuts");

  return (
    <section
      className="service-area tp-service-bg"
      style={{ backgroundImage: `url(/assets/img/bg/services-bg-2.png)` }}
    >
      <div className="container">
        <div className="row">
          {SHORTCUTS.map((item) => (
            <div key={item.id} className="col-lg-3 col-md-6">
              <div
                className="tp-service-item text-center mb-40 wow fadeInUp"
                data-wow-delay={`.${item.id}s`}
              >
                <div className="tp-service-wrap">
                  <div className="tp-service-icon">
                    <span>
                      <Image src={item.icon} alt="" />
                    </span>
                  </div>
                  <h4 className="tp-service-title">
                    <Link href={item.href}>{t(item.titleKey)}</Link>
                  </h4>
                  <div className="tp-service-btn">
                    <Link href={item.href}>
                      <span>
                        <RightArrowTwo />
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="tp-service-content">
                  <p>{t(item.textKey)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
