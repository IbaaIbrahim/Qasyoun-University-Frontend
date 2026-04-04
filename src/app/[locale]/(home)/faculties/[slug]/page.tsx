import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import AboutTwo from "@/components/about/about-two";
import CounterFour from "@/components/counter/counter-four";
import MissionArea from "@/components/mission/mission-area";
import AboutThree from "@/components/about/about-three";
import AboutCampus from "@/components/about/about-campus";
import TeamAreaThree from "@/components/team/team-area-three";
import { getFacultyBySlug } from "@/lib/services/faculty.service";
import HeroAreaOne from "@/components/hero-area/hero-area-one";
import { readContentAsJsonByFilter } from "@/lib/services/content.service";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const tMeta = await getTranslations({ locale, namespace: "Metadata" });
  const faculty = await getFacultyBySlug(slug);
  if (!faculty) {
    return { title: tMeta("facultyNotFoundTitle") };
  }
  return {
    title: tMeta("facultyDetailTitle", { name: faculty.getName(locale) }),
  };
}

export default async function FacultyDetailPage({ params }: Props) {
  const { slug, locale } = await params;
  const faculty = await getFacultyBySlug(slug);
  if (!faculty) notFound();

  const t = await getTranslations({ locale, namespace: "FacultyDetail" });
  const meta = await readContentAsJsonByFilter({ referenceType: "home", type: "hero-slider" }, locale);
  const slides = meta.map((item) => item.toSlider());

  return (
    <main>
      <HeroAreaOne slides={slides.filter((slide) => slide.bgImg)} />
      <AboutTwo spacing="pt-90 pb-90" />
      <CounterFour />
      <MissionArea />
      <AboutThree />
      <TeamAreaThree />
      <AboutCampus />
    </main>
  );
}
