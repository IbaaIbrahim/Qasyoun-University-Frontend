import React from "react";
import HeaderOne from "@/components/header/header-one";
import { getLocale } from "next-intl/server";
import { readContentAsJsonByFilter } from "@/lib/services/content.service";
import { IMenu } from "@/types/menu-d-t";

export default async function Layout({ children, params }: { children: React.ReactNode, params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const locale = await getLocale();
  const [newsContent] = await Promise.all([
    readContentAsJsonByFilter({ referenceId: "0", referenceType: "faculty", section: "news" }, locale),
  ]);

  const items = newsContent.map((r) => r.toNews());

  const faculty_menu_data: IMenu[] = [
    { id: 1, title: "faculty_home", link: `/faculties/${slug}` },
    { id: 3, title: "faculty_staff", link: `/faculties/${slug}#team` },
    { id: 4, title: "faculty_lectures", link: `/faculties/${slug}/lectures#lectures` },
    { id: 5, title: "faculty_labs", link: `/faculties/${slug}#labs` },
    { id: 6, title: "faculty_plan", link: `/faculties/${slug}` },
    { id: 7, title: "faculty_research", link: `/faculties/${slug}` }
  ];

  return (
    <>
      {/* header area start */}
      <HeaderOne newsItems={items.filter((item) => item.title)} menu_data={faculty_menu_data} />
      {/* header area end */}

      {/* main content */}
      {children}
    </>
  );
}
