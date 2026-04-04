import React from "react";
import HeaderOne from "@/components/header/header-one";
import menu_data from "@/data/menu-data";
import { getLocale } from "next-intl/server";
import { readContentAsJsonByFilter } from "@/lib/services/content.service";

export default async function Layout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  const [newsContent] = await Promise.all([
    readContentAsJsonByFilter({ referenceId: "0", referenceType: "faculty", type: "news" }, locale),
  ]);

  const items = newsContent.map((r) => r.toNews());

  return (
    <>
      {/* header area start */}
      <HeaderOne menu_data={menu_data} newsItems={items} />
      {/* header area end */}

      {/* main content */}
      {children}
    </>
  );
}
