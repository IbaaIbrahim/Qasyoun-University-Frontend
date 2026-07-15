import React from "react";
import HeaderOne from "@/components/header/header-one";
import FooterOne from "@/components/footer/footer-one";
import BackToTop from "@/components/back-to-top";
import MainProvider from "@/components/provider/main-provider";
import menu_data from "@/data/menu-data";
import { getLocale } from "next-intl/server";
import { readContentAsJsonByFilter } from "@/lib/services/content.service";
import { ReferenceTypes } from "@/lib/constants";
import { getWebsiteSettings } from "@/lib/services/website-settings.service";

export default async function Layout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  const [newsContent, websiteSettings] = await Promise.all([
    readContentAsJsonByFilter({ referenceId: "0", referenceType: ReferenceTypes.home.value, section: ReferenceTypes.home.sections.news.value }, locale),
    getWebsiteSettings(locale),
  ]);

  const items = newsContent.map((r) => r.toNews());

  return (
    <MainProvider>
      {/* header area start */}
      <HeaderOne
        newsItems={items.filter((item) => item.title)}
        menu_data={menu_data}
        brandLogoSrc={websiteSettings?.logo}
      />
      {/* header area end */}

      {/* main content */}
      {children}
      {/* main content */}

      {/* footer area start */}
      <FooterOne
        logoSrc={websiteSettings?.logo}
        email={websiteSettings?.email}
        phoneNumber={websiteSettings?.phoneNumber}
      />
      {/* footer area end */}

      {/* back to top */}
      <BackToTop />
      {/* back to top */}
    </MainProvider>
  );
}
