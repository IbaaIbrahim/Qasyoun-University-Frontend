import BackToTop from "@/components/back-to-top";
import FooterSix from "@/components/footer/footer-six";
import HeaderSix from "@/components/header/header-six";
import MainProvider from "@/components/provider/main-provider";

export default function Layout({children}: {children:React.ReactNode}) {
  return (
    <MainProvider>

      {/* header area start */}
      <HeaderSix sm_mega_title="programs" inner={true}/>
      {/* header area end */}

      {/* main content */}
      {children}
      {/* main content */}

      {/* footer area start */}
      <FooterSix/>
      {/* footer area end */}

      {/* back to top */}
      <BackToTop />
      {/* back to top */}
    </MainProvider>
  );
}
