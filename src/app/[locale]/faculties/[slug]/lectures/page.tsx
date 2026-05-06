import { notFound } from "next/navigation";
import { getFacultyBySlug } from "@/lib/services/faculty.service";
import { listStudyYears } from "@/lib/services/study-year.service";
import FacultyLectures from "@/components/faculty/faculty-lectures";
import HeroAreaOne from "@/components/hero-area/hero-area-one";
import { readContentAsJsonByFilter } from "@/lib/services/content.service";
import { ReferenceTypes } from "@/lib/constants";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export default async function FacultyLecturesPage({ params }: Props) {
  const { slug, locale } = await params;
  const faculty = await getFacultyBySlug(slug);
  if (!faculty) notFound();

  const meta = await readContentAsJsonByFilter({ referenceId: slug, referenceType: ReferenceTypes.faculty.value }, locale);
  const sliderContents = meta.filter((item) => item.section === ReferenceTypes.faculty.sections.hero_slider.value);
  const slides = sliderContents.map((item) => item.toSlider());

  const studyYears = await listStudyYears();

  return (
    <main>
      {slides.length > 0 && (
        <HeroAreaOne slides={slides.filter((slide) => slide.bgImg)} />
      )}
      
      {/* Faculty Navigation could go here */}
      
      <FacultyLectures 
        facultyId={Number(faculty.id)} 
        initialStudyYears={studyYears.map(y => y.toPlain())} 
        locale={locale} 
      />
    </main>
  );
}
