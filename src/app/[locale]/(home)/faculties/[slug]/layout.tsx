import React from "react";
import HeaderOne from "@/components/header/header-one";
import menu_data from "@/data/menu-data";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* header area start */}
      <HeaderOne menu_data={menu_data} />
      {/* header area end */}

      {/* main content */}
      {children}
    </>
  );
}
