import { Metadata } from 'next';
import CtaThree from '@/components/cta/cta-three';
import EventAreaTwo from '@/components/event/event-area-two';
import GalleryOne from '@/components/gallery/gallery-one';
import HeroAreaThree from '@/components/hero-area/hero-area-three';
import ProcessOne from '@/components/process/process-one';
import ProgramAreaTwo from '@/components/program/program-area-two';
import ServiceTwo from '@/components/service/service-two';
import SubjectArea from '@/components/subject/subject-area';

export const metadata: Metadata = {
  title: "Home Kids Education - Acadia",
};

export default function HomeKidsEducationPage() {
  return (
    <main>
      
      {/* hero area start */}
      <HeroAreaThree/>
      {/* hero area end */}

      {/* service area start */}
      <ServiceTwo/>
      {/* service area end */}

      {/* process area start */}
      <ProcessOne/>
      {/* process area end */}

      {/* program area start */}
      <ProgramAreaTwo/>
      {/* program area end */}

      {/* gallery area start */}
      <GalleryOne/>
      {/* gallery area end */}

      {/* subject area start */}
      <SubjectArea/>
      {/* subject area end */}

      {/* event area start */}
      <EventAreaTwo/>
      {/* event area end */}

      {/* cta area start */}
      <CtaThree/>
      {/* cta area end */}

    </main>
  )
}
