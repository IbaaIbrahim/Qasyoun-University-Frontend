import { notFound } from "next/navigation";
import { getFacultyBySlug } from "@/lib/services/faculty.service";
import { listScientificResearchesByFacultyId } from "@/lib/services/scientific-research.service";
import { listTeachersByFacultyId } from "@/lib/services/teacher.service";
import FacultyResearch from "@/components/faculty/faculty-research";
import HeroAreaOne from "@/components/hero-area/hero-area-one";
import { readContentAsJsonByFilter } from "@/lib/services/content.service";
import { ReferenceTypes } from "@/lib/constants";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export default async function FacultyResearchPage({ params }: Props) {
  const { slug, locale } = await params;
  const faculty = await getFacultyBySlug(slug);

  if (!faculty) notFound();

  const [researches, teachers, meta] = await Promise.all([
    listScientificResearchesByFacultyId(faculty.id),
    listTeachersByFacultyId(faculty.id),
    readContentAsJsonByFilter({ referenceId: slug, referenceType: ReferenceTypes.faculty.value }, locale),
  ]);

  const sliderContents = meta.filter((item) => item.section === ReferenceTypes.faculty.sections.hero_slider.value);
  const slides = sliderContents.map((item) => item.toSlider());

  return (
    <main>
      {slides.length > 0 && (
        <HeroAreaOne slides={slides.filter((slide) => slide.bgImg)} />
      )}
      
      <FacultyResearch researches={researches.map(r => r.toPlain())} teachers={teachers.map(t => t.toPlain())} locale={locale} />
    </main>
  );
}
