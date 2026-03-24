import BannerAreaTwo from '@/components/banner/banner-area-two';
import BrandAreaTwo from '@/components/brand/brand-area-two';
import CategoryAreaTwo from '@/components/category/category-area-2';
import GymCourses from '@/components/course/gym-courses';
import HeroAreaFour from '@/components/hero-area/hero-area-four';
import MarqueeOne from '@/components/marquee/marquee-one';
import PricingOne from '@/components/pricing/pricing-one';
import ServiceThree from '@/components/service/service-three';
import TeamAreaTwo from '@/components/team/team-area-two';
import VideoTwo from '@/components/video/video-two';

export default function HomeGymCoachingPage() {
  return (
    <main>

      {/* hero area start */}
      <HeroAreaFour/>
      {/* hero area end */}

      {/* service area start */}
      <ServiceThree/>
      {/* service area end */}

      {/* category area start */}
      <CategoryAreaTwo/>
      {/* category area end */}

      {/* brand area start */}
      <BrandAreaTwo/>
      {/* brand area end */}

      {/* course area start */}
      <GymCourses/>
      {/* course area end */}

      {/* video area start */}
      <VideoTwo/>
      {/* video area end */}

      {/* marquee area start */}
      <MarqueeOne/>
      {/* marquee area end */}

      {/* price area start */}
      <PricingOne/>
      {/* price area end */}

      {/* team area start */}
      <TeamAreaTwo/>
      {/* team area end */}

      {/* banner area start */}
      <BannerAreaTwo/>
      {/* banner area end */}

    </main>
  )
}
