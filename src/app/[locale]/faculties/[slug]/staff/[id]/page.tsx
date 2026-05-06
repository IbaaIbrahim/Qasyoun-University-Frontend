import { notFound } from "next/navigation";
import { getFacultyBySlug } from "@/lib/services/faculty.service";
import { getTeacherById } from "@/lib/services/teacher.service";
import TeacherDetailsArea from "@/components/faculty/teacher-details-area";
import HeroAreaOne from "@/components/hero-area/hero-area-one";
import { readContentAsJsonByFilter } from "@/lib/services/content.service";
import { ReferenceTypes } from "@/lib/constants";

type Props = {
  params: Promise<{ locale: string; slug: string; id: string }>;
};

export default async function TeacherDetailPage({ params }: Props) {
  const { slug, locale, id } = await params;
  
  const [faculty, teacher] = await Promise.all([
    getFacultyBySlug(slug),
    getTeacherById(Number(id)),
  ]);

  if (!faculty || !teacher) notFound();

  // Load hero slider from faculty page
  const meta = await readContentAsJsonByFilter({ referenceId: slug, referenceType: ReferenceTypes.faculty.value }, locale);
  const sliderContents = meta.filter((item) => item.section === ReferenceTypes.faculty.sections.hero_slider.value);
  const slides = sliderContents.map((item) => item.toSlider());

  return (
    <main>
      {slides.length > 0 && (
        <HeroAreaOne slides={slides.filter((slide) => slide.bgImg)} />
      )}
      
      <TeacherDetailsArea teacher={teacher.toPlain()} locale={locale} />
    </main>
  );
}
