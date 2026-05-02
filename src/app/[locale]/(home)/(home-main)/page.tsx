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
import { ReferenceTypes } from "@/lib/constants";

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
  const meta = await readContentAsJsonByFilter({ referenceType: ReferenceTypes.home.value }, locale);

  const sliderImages = meta.filter((content) => content.section === ReferenceTypes.home.sections.hero_slider.value).map((content) => content.toSlider())

  const aboutData = meta.find((content) => content.section === ReferenceTypes.home.sections.few_words_about.value)?.toAbout();

  const statistics = meta.find((content) => content.section === ReferenceTypes.home.sections.home_screen_statistics.value)?.toStatistics();

  const events = meta.filter((content) => content.section === ReferenceTypes.home.sections.upcoming_events.value).map(content => content.toEvent());

  const reviews = meta.filter((content) => content.section === ReferenceTypes.home.sections.reviews.value).map(content => content.toReview());

  return (
    <main>
      <HeroAreaOne slides={sliderImages} />
      <ServiceOne />
      <AboutOne data={aboutData} />
      <CounterOne data={statistics} />
      <FacultyArea />
      <EventArea events={events} />
      <TestimonialOne reviews={reviews} />
      {/* <BlogOne /> */}
      {/* <InstagramArea /> */}
      {/* <CtaOne /> */}
    </main>
  );
}

