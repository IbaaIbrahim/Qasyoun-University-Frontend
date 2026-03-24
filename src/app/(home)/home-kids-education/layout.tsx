import BackToTop from "@/components/back-to-top";
import FooterThree from "@/components/footer/footer-three";
import HeaderThee from "@/components/header/header-thee";
import MainProvider from "@/components/provider/main-provider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <MainProvider>
      {/* header area start */}
      <HeaderThee sm_mega_title="Programs" />
      {/* header area end */}

      {/* main content */}
      {children}
      {/* main content */}

      {/* footer area start */}
      <FooterThree/>
      {/* footer area end */}

      {/* back to top */}
      <BackToTop />
      {/* back to top */}
    </MainProvider>
  );
}
