import AboutTwo from "@/components/about/about-two";
import CounterTwo from "@/components/counter/counter-two";
import HighSchoolCourses from "@/components/course/high-school-courses";
import EventAreaThree from "@/components/event/event-area-three";
import TutoringFeatures from "@/components/feature/tutoring-features";
import HeroAreaFive from "@/components/hero-area/hero-area-five";
import PlanArea from "@/components/plan/plan-area";
import ProgramAreaThree from "@/components/program/program-area-three";
import TestimonialOne from "@/components/testimonial/testimonial-one";
import WhyChooseUsArea from "@/components/why-choose/why-choose-us-area";


export default function HomeHighSchoolPage() {
  return (
    <main>

      {/* hero area start */}
      <HeroAreaFive/>
      {/* hero area end */}

      {/* about area start */}
      <AboutTwo/>
      {/* about area end */}

      {/* counter area start */}
      <CounterTwo/>
      {/* counter area end */}

      {/* program area start */}
      <ProgramAreaThree/>
      {/* program area end */}

      {/* course area start */}
      <HighSchoolCourses/>
      {/* course area end */}

      {/* why choose area start */}
      <WhyChooseUsArea/>
      {/* why choose area end */}

      {/* testimonial area start */}
      <TestimonialOne/>
      {/* testimonial area end */}

      {/* event area start */}
      <EventAreaThree/>
      {/* event area end */}

      {/* feature area start */}
      <TutoringFeatures/>
      {/* feature area end */}

      {/* plan area start */}
      <PlanArea/>
      {/* plan area end */}

    </main>
  )
}
