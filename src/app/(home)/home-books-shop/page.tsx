import AuthorArea from "@/components/author/author-area";
import CategoryAreaThree from "@/components/category/category-area-3";
import CtaFour from "@/components/cta/cta-four";
import HeroBannerSix from "@/components/hero-area/hero-banner-six";
import ServiceFour from "@/components/service/service-four";
import ShopArea from "@/components/shop/shop-area";


export default function HomeBookShopPage() {
  return (
    <main>

      {/* hero area start */}
      <HeroBannerSix/>
      {/* hero area end */}

      {/* category area start */}
      <CategoryAreaThree/>
      {/* category area end */}

      {/* shop area start */}
      <ShopArea/>
      {/* shop area end */}

      {/* cta area start */}
      <CtaFour/>
      {/* cta area end */}

      {/* author area start */}
      <AuthorArea/>
      {/* author area end */}

      {/* service area start */}
      <ServiceFour/>
      {/* service area end */}
    </main>
  )
}
