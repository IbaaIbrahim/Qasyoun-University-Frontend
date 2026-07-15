import React from "react";
import FooterOne from "@/components/footer/footer-one";
import BackToTop from "@/components/back-to-top";
import MainProvider from "@/components/provider/main-provider";
import { getLocale } from "next-intl/server";
import { getWebsiteSettings } from "@/lib/services/website-settings.service";

export default async function Layout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  const websiteSettings = await getWebsiteSettings(locale);

  return (
    <MainProvider>

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
