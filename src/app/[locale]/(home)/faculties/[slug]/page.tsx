import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import AboutTwo from "@/components/about/about-two";
import CounterFour from "@/components/counter/counter-four";
import MissionArea from "@/components/mission/mission-area";
import AboutThree from "@/components/about/about-three";
import AboutCampus from "@/components/about/about-campus";
import TeamAreaThree from "@/components/team/team-area-three";
import { getFacultyBySlug } from "@/lib/services/faculty.service";
import HeroAreaOne from "@/components/hero-area/hero-area-one";
import { readContentAsJsonByFilter } from "@/lib/services/content.service";
import { listLabsByFacultyId } from "@/lib/services/lab.service";
import { listTeachersByFacultyId } from "@/lib/services/teacher.service";
import { ReferenceTypes } from "@/lib/constants";
import FacultyStatistics from "@/lib/classes/faculty/faculty-statistics";

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

  const meta = await readContentAsJsonByFilter({ referenceId: slug, referenceType: ReferenceTypes.faculty.value }, locale)

  const sliderContents = meta.filter((item) => item.section === ReferenceTypes.faculty.sections.hero_slider.value);
  const slides = sliderContents.map((item) => item.toSlider());

  const mainTextContents = meta.filter((item) => item.section === ReferenceTypes.faculty.sections.main_text.value);
  const mainText = mainTextContents.map((item) => item.toMainText())?.[0]?.text ?? "";

  const galleryContents = meta.filter((item) => item.section === ReferenceTypes.faculty.sections.gallery.value);
  const gallery = galleryContents.map((item) => item.toGallery());

  const facultyStatisticsContent = meta.find((item) => item.section === ReferenceTypes.faculty.sections.faculty_statistics.value);
  const facultyStatistics = facultyStatisticsContent ? FacultyStatistics.fromContentJson(facultyStatisticsContent) : {}

  const timelineContents = meta.filter((item) => item.section === ReferenceTypes.faculty.sections.timeline.value);
  const timelines = timelineContents.map((item) => item.toTimeline());

  const labs = await listLabsByFacultyId(faculty.id);
  const teachers = await listTeachersByFacultyId(faculty.id);
  const teamMembers = teachers.map((t) => t.toMemberCard(locale));

  const tLabs = await getTranslations({ locale, namespace: "Laboratories" });
  const tMission = await getTranslations({ locale, namespace: "MissionArea" });

  return (
    <main>
      {
        slides.length > 0 && (
          <HeroAreaOne slides={slides.filter((slide) => slide.bgImg)} />
        )
      }
      {
        mainText && (
          <AboutTwo gallery={gallery} mainText={mainText} spacing="pt-90 pb-90" />
        )
      }
      {
        Object.keys(facultyStatistics).length > 0 && (
          <CounterFour facultyStatistics={facultyStatistics} />
        )
      }
      {
        labs.length > 0 && (
          <MissionArea
            labs={labs.map(lab => lab.toPlain())}
            locale={locale}
            translations={{
              labsTitle: tLabs("title"),
              labsDescription: tLabs("description"),
              labsLearnMore: tLabs("learnMore"),
              missionTitle: tMission("title"),
              missionDescription: tMission("description"),
              missionLearnMore: tMission("learnMore"),
            }}
          />
        )
      }
      {
        timelines.length > 0 && (
          <AboutThree timelines={timelines} />
        )
      }
      {
        teamMembers.length > 0 && (
          <TeamAreaThree members={teamMembers} />
        )
      }
      {/* <AboutCampus /> */}
    </main>
  );
}

