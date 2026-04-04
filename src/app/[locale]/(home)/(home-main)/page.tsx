import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import HeroAreaOne from "@/components/hero-area/hero-area-one";
import ServiceOne from "@/components/service/service-one";
import AboutOne from "@/components/about/about-one";
import CounterOne from "@/components/counter/counter-one";
import FacultyArea from "@/components/faculty/faculty-area";
import EventArea from "@/components/event/event-area";
import TestimonialOne from "@/components/testimonial/testimonial-one";
import BlogOne from "@/components/blog/blog-one";
import InstagramArea from "@/components/instagram/instagram-area";
import CtaOne from "@/components/cta/cta-one";
import { readContentAsJsonByFilter } from "@/lib/services/content.service";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("homeTitle"),
  };
}

export default async function HomePage() {
  const locale = await getLocale();
  const meta = await readContentAsJsonByFilter({ referenceType: "home", type: "hero-slider" }, locale);
  const slides = meta.flatMap((item) => item.toSlider());
  console.log('slides', slides);

  return (
    <main>
      <HeroAreaOne slides={slides.filter((slide) => slide.bgImg)} />
      <ServiceOne />
      <AboutOne />
      <CounterOne />
      <FacultyArea />
      <EventArea />
      <TestimonialOne />
      <BlogOne />
      <InstagramArea />
      <CtaOne />
    </main>
  );
}
