import { getTranslations } from "next-intl/server";
import { EmailThree, LocationFour, TelSvgTwo } from "../svg";

const CONTACT_INFO_ITEMS = [
    {
        icon: <EmailThree />,
        titleKey: "emailTitle",
        descriptionKey: "emailDescription",
        linkText: "qpu@qpu.edu.sy",
        href: "mailto:qpu@qpu.edu.sy"
    },
    {
        icon: <TelSvgTwo />,
        titleKey: "phoneTitle",
        descriptionKey: "phoneDescription",
        linkText: "+963 999 999 999",
        href: "tel:+963999999999"
    },
    {
        icon: <LocationFour />,
        titleKey: "locationTitle",
        descriptionKey: "locationDescription",
        linkTextKey: "locationText",
        href: "https://maps.google.com/?q=Damascus%20Mezzeh%20Eastern%20Villas"
    }
];

export default async function ContactInfoArea() {
    const t = await getTranslations("Contact");

    return (
        <section className="tp-contact-info-area tp-contact-p pb-90">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="tp-contact-info-wrapper text-center">
                            <h3 className="tp-contact-main-title mt-4">{t("infoTitle")}</h3>
                        </div>
                        <div className="row g-4 justify-content-center tp-contact-info-cards">
                            {CONTACT_INFO_ITEMS.map((item, index) => (
                                <div key={index} className="col-lg-4 col-md-6 d-flex tp-contact-info-col">
                                    <div className="tp-contact-info-item tp-contact-info-item--stretch mb-0 w-100">
                                        <div className="tp-contact-info-icon">
                                            <span>{item.icon}</span>
                                        </div>
                                        <h4 className="tp-contact-info-title">{t(item.titleKey as never)}</h4>
                                        <p>{t(item.descriptionKey as never)}</p>
                                        <a href={item.href}>
                                            {"linkTextKey" in item ? t(item.linkTextKey as never) : item.linkText}
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
