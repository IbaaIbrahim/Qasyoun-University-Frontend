import BackToTop from "@/components/back-to-top";
import FooterOne from "@/components/footer/footer-one";
import HeaderFour from "@/components/header/header-four";
import MainProvider from "@/components/provider/main-provider";

export default function Layout({children}: {children:React.ReactNode}) {
  return (
    <MainProvider>

      {/* header area start */}
      <HeaderFour sm_mega_title="programs" />
      {/* header area end */}

      {/* main content */}
      {children}
      {/* main content */}

      {/* footer area start */}
      <FooterOne style_2={true}/>
      {/* footer area end */}

      {/* back to top */}
      <BackToTop />
      {/* back to top */}
    </MainProvider>
  );
}
