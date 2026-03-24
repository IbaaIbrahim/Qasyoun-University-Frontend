import BackToTop from "@/components/back-to-top";
import FooterFive from "@/components/footer/footer-five";
import HeaderFive from "@/components/header/header-five";
import MainProvider from "@/components/provider/main-provider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <MainProvider>
      {/* header area start */}
      <HeaderFive/>
      {/* header area end */}

      {/* main content */}
      {children}
      {/* main content */}

      {/* footer area start */}
      <FooterFive/>
      {/* footer area end */}

      {/* back to top */}
      <BackToTop />
      {/* back to top */}
    </MainProvider>
  );
}
