import { Metadata } from "next";
import BannerArea from "@/components/banner/banner-area";
import BrandArea from "@/components/brand/brand-area";
import CategoryArea from "@/components/category/category-area";
import CourseArea from "@/components/course/course-area";
import CourseLiveArea from "@/components/course/course-live-area";
import CtaTwo from "@/components/cta/cta-two";
import FunFactArea from "@/components/fun-fact/fun-fact-area";
import HeroAreaTwo from "@/components/hero-area/hero-area-two";
import TeamArea from "@/components/team/team-area";
import TestimonialTwo from "@/components/testimonial/testimonial-two";

export const metadata: Metadata = {
  title: "Home Online Course - Acadia",
};

export default function HomeOnlineCoursePage() {
  return (
    <main>
      {/* hero area start */}
      <HeroAreaTwo />
      {/* hero area end */}

      {/* category area */}
      <CategoryArea />
      {/* category area */}

      {/* fun fact area start */}
      <FunFactArea/>
      {/* fun fact area end */}

      {/* course area start */}
      <CourseArea/>
      {/* course area end */}

      {/* course live area start */}
      <CourseLiveArea/>
      {/* course live area end */}

      {/* testimonial area start */}
      <TestimonialTwo/>
      {/* testimonial area end */}

      {/* team area start */}
      <TeamArea/>
      {/* team area end */}

      {/* brand area start */}
      <BrandArea/>
      {/* brand area end */}

      {/* banner area start */}
      <BannerArea/>
      {/* banner area end */}

      {/* cta area start */}
      <CtaTwo/>
      {/* cta area end */}
    </main>
  );
}
