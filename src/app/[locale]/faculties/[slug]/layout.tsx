import React from "react";
import HeaderOne from "@/components/header/header-one";
import FooterOne from "@/components/footer/footer-one";
import BackToTop from "@/components/back-to-top";
import MainProvider from "@/components/provider/main-provider";
import { getLocale } from "next-intl/server";
import { resolveUploadSrc } from "@/lib/api/client";
import { readContentAsJsonByFilter } from "@/lib/services/content.service";
import { getFacultyBySlug } from "@/lib/services/faculty.service";
import { getWebsiteSettings } from "@/lib/services/website-settings.service";
import { sortNewsByNewest } from "@/lib/services/news.service";
import { IMenu } from "@/types/menu-d-t";

import { listLabsByFacultyId } from "@/lib/services/lab.service";
import { ReferenceTypes } from "@/lib/constants";

export default async function Layout({ children, params }: { children: React.ReactNode, params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const locale = await getLocale();
  const [newsContent, faculty, websiteSettings] = await Promise.all([
    readContentAsJsonByFilter({ referenceId: "0", referenceType: ReferenceTypes.home.value, section: ReferenceTypes.home.sections.news.value }, locale),
    getFacultyBySlug(slug),
    getWebsiteSettings(locale),
  ]);

  const labs = faculty?.id ? await listLabsByFacultyId(faculty.id) : [];

  const brandLogoSrc =
    faculty?.logoUrl?.trim()
      ? resolveUploadSrc(faculty.logoUrl, "")
      : undefined;
  const brandLogoAlt = faculty ? faculty.getName(locale) : undefined;

  const items = newsContent.map((r) => r.toNews());
  const sortedNews = sortNewsByNewest(items.filter((item) => item.title));

  const faculty_menu_data: IMenu[] = [
    { id: 1, title: "faculty_home", link: `/faculties/${slug}` },
    { id: 3, title: "faculty_staff", link: `/faculties/${slug}#team` },
    { id: 4, title: "faculty_lectures", link: `/faculties/${slug}/lectures#lectures` },
    ...(labs.length > 0 ? [{ id: 5, title: "faculty_labs", link: `/faculties/${slug}#labs` }] : []),
    { id: 6, title: "faculty_plan", link: `/faculties/${slug}/plan#plan` },
    { id: 7, title: "faculty_research", link: `/faculties/${slug}/research#research` }
  ];

  return (
    <MainProvider>
      {/* header area start */}
      <HeaderOne
        newsItems={sortedNews}
        menu_data={faculty_menu_data}
        brandLogoSrc={brandLogoSrc}
        brandLogoAlt={brandLogoAlt}
        logoHref={`/`}
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
    </MainProvider>
  );
}
