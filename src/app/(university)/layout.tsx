import MainProvider from "@/components/provider/main-provider";
import BackToTop from "@/components/back-to-top";
import HeaderSeven from "@/components/header/header-seven";
import FooterFive from "@/components/footer/footer-five";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <MainProvider>
      {/* header area start */}
      <HeaderSeven/>
      {/* header area end */}

      {/* main content */}
      {children}
      {/* main content */}

      {/* footer area start */}
      <FooterFive inner={true}/>
      {/* footer area end */}

      {/* back to top */}
      <BackToTop/>
      {/* back to top */}
    </MainProvider>
  );
}
