import { Metadata } from "next";

export const dynamic = "force-dynamic";
import { notFound } from "next/navigation";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import AboutTwo from "@/components/about/about-two";
import CounterFour from "@/components/counter/counter-four";
import MissionArea from "@/components/mission/mission-area";
import AboutThree from "@/components/about/about-three";
import AboutCampus from "@/components/about/about-campus";
import TeamAreaThree from "@/components/team/team-area-three";
import { getFacultyBySlug } from "@/lib/services/faculty.service";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const faculty = await getFacultyBySlug(slug);
  if (!faculty) {
    return { title: "Faculty not found" };
  }
  return {
    title: `${faculty.name} - Qasyoun Private University`,
  };
}

export default async function FacultyDetailPage({ params }: Props) {
  const { slug } = await params;
  const faculty = await getFacultyBySlug(slug);
  if (!faculty) notFound();

  return (
    <main>
      <BreadcrumbTwo title={faculty.name} subtitle="Faculties" />
      <section className="pt-40 pb-40 grey-bg">
        <div className="container">
          <p className="mb-0 text-center lead">{faculty.name}</p>
        </div>
      </section>
      <AboutTwo spacing="pt-90 pb-90" />
      <CounterFour />
      <MissionArea />
      <AboutThree />
      <TeamAreaThree />
      <AboutCampus />
    </main>
  );
}
