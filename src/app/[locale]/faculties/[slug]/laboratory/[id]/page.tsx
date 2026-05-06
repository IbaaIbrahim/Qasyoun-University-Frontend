import DetailsBreadcrumb from "../_components/details-breadcrumb";
import { getLabById } from "@/lib/services/lab.service";
import { getFacultyBySlug } from "@/lib/services/faculty.service";
import { readContentAsJsonByFilter } from "@/lib/services/content.service";
import { ReferenceTypes } from "@/lib/constants";
import LabDetailsArea from "../_components/lab-details-area";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{ id: string; locale: string; slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { id, locale } = await params;
  const lab = await getLabById(Number(id));
  return {
    title: lab?.getName(locale)
  };
}

export default async function LaboratoryDetailsPage({ params }: Props) {
  const { id, locale, slug } = await params;
  const [lab, faculty] = await Promise.all([
    getLabById(Number(id)),
    getFacultyBySlug(slug)
  ]);

  if (!lab || !faculty) notFound();

  const meta = await readContentAsJsonByFilter({ 
    referenceId: id, 
    referenceType: ReferenceTypes.lab.value 
  }, locale);

  const sliderContents = meta.filter((item) => item.section === ReferenceTypes.lab.sections.slider.value);
  const slides = sliderContents.map((item) => item.toSlider());

  const tLabs = await getTranslations({ locale, namespace: "Laboratories" });

  return (
    <main>
      <DetailsBreadcrumb 
        title={lab.getName(locale)} 
        faculty={{
            name: faculty.getName(locale),
            slug: slug
        }}
        translations={{ 
            laboratories: tLabs("title"),
            faculties: tLabs("faculties") // Assuming this key exists, I'll check later
        }}
      />
      <LabDetailsArea 
        lab={lab.toPlain()} 
        locale={locale} 
        slides={slides} 
      />
    </main>
  );
}
