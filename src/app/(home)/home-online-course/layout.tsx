import HeaderTwo from "@/components/header/header-two";
import BackToTop from "@/components/back-to-top";
import MainProvider from "@/components/provider/main-provider";
import FooterTwo from "@/components/footer/footer-two";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <MainProvider>
      {/* header area start */}
      <HeaderTwo />
      {/* header area end */}

      {/* main content */}
      {children}
      {/* main content */}

      {/* footer area start */}
      <FooterTwo />
      {/* footer area end */}

      {/* back to top */}
      <BackToTop />
      {/* back to top */}
    </MainProvider>
  );
}
