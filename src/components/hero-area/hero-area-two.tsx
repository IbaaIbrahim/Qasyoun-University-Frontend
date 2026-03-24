import Link from "next/link";
import Image from "next/image";
import CourseItem from "../course/single/course-item";
import { RightArrowFour, ShapeTwo } from "../svg";
import svg_underline from "@/assets/img/unlerline/hero-2-svg-1.svg";
import hero_thumb from "@/assets/img/hero/hero-2-thumb-1.png";
import hero_shape_1 from '@/assets/img/hero/hero-2-shape-2.png';
import hero_shape_2 from '@/assets/img/hero/hero-2-shape-3.png';
import hero_shape_3 from '@/assets/img/hero/hero-2-shape-4.png';
import {online_courses_data} from "@/data/course-data";

export default function HeroAreaTwo() {
  return (
    <div className="tp-hero-area lightblue-bg tp-hero-2-bg">
      <div className="container custom-container">
        <div className="tp-hero-2-wrap">
          <div className="row align-items-end">
            <div className="col-xxl-5 col-xl-6 col-lg-7 col-md-12">
              <div className="tp-hero-2-content">
                <span
                  className="tp-hero-2-subtitle wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  Keep Learning
                </span>
                <h2
                  className="tp-hero-2-title wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  Best digital {" "}
                  <span>
                    Online{" "}
                    <Image
                      className="wow bounceIn"
                      data-wow-duration="1.5s"
                      data-wow-delay=".4s"
                      src={svg_underline}
                      alt="svg-underline"
                    />
                  </span>
                  Courses
                </h2>
                <p className=" wow fadeInUp" data-wow-delay=".7s">
                  Acquire global knowledge and build your <br /> professional
                  skills
                </p>
                <div
                  className="tp-hero-2-btn wow fadeInUp"
                  data-wow-delay=".9s"
                >
                  <Link className="tp-btn-border" href="/course-with-filter">
                    Find Courses
                    <span>
                      <RightArrowFour />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="offset-xxl-4 col-xxl-3 offset-xl-2 col-xl-4 col-lg-5 col-md-6">
              <div
                className="tp-hero-2-course p-relative wow fadeInUp"
                data-wow-delay=".5s"
              >
                <CourseItem course={online_courses_data[0]} />
              </div>
            </div>
          </div>
          <div className="tp-hero-2-thumb">
            <Image src={hero_thumb} alt="hero-thumbnail" style={{height:'auto'}} />
          </div>
        </div>
      </div>
      <div className="tp-hero-2-shape">
        <div className="tp-hero-2-shape-1">
          <span>
            <ShapeTwo />
          </span>
        </div>
        <div className="tp-hero-2-shape-2">
          <Image src={hero_shape_1} alt="hero-shape" />
        </div>
        <div className="tp-hero-2-shape-3">
          <Image src={hero_shape_2} alt="hero-shape" />
        </div>
        <div className="tp-hero-2-shape-4">
          <Image src={hero_shape_3} alt="hero-shape" />
        </div>
      </div>
    </div>
  );
}
