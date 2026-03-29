import { Metadata } from 'next';

export const dynamic = 'force-dynamic';
import HeroAreaOne from '@/components/hero-area/hero-area-one';
import ServiceOne from '@/components/service/service-one';
import AboutOne from '@/components/about/about-one';
import CounterOne from '@/components/counter/counter-one';
import FacultyArea from '@/components/faculty/faculty-area';
import EventArea from '@/components/event/event-area';
import TestimonialOne from '@/components/testimonial/testimonial-one';
import BlogOne from '@/components/blog/blog-one';
import InstagramArea from '@/components/instagram/instagram-area';
import CtaOne from '@/components/cta/cta-one';

export const metadata: Metadata = {
  title: "Home - Qasyoun Private University",
};

export default function HomePage() {
  return (
    <main>
      {/* hero area start */}
      <HeroAreaOne/>
      {/* hero area end */}

      {/* service area start */}
      <ServiceOne/>
      {/* service area end */}

      {/* about area start */}
      <AboutOne/>
      {/* about area end */}

      {/* counter area start */}
      <CounterOne/>
      {/* counter area end */}

      {/* faculties area start */}
      <FacultyArea/>
      {/* faculties area end */}

      {/* event area start */}
      <EventArea/>
      {/* event area end */}

      {/* testimonial area start */}
      <TestimonialOne/>
      {/* testimonial area end */}

      {/* blog area start */}
      <BlogOne/>
      {/* blog area end */}

      {/* instagram area start */}
      <InstagramArea/>
      {/* instagram area end */}

      {/* cta area start */}
      <CtaOne/>
      {/* cta area end */}
    </main>
  )
}
