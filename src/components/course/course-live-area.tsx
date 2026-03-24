import Link from "next/link";
import Image from "next/image";
import shape_underline from "@/assets/img/unlerline/live-2-svg-1.svg";
import { ClockSvgTwo, JoinSvg, RightArrowFour } from "../svg";
import live_thumb from '@/assets/img/live/live-thumb-1.jpg';
import video_icon from '@/assets/img/teacher/live-2-video.png';
import teacher from '@/assets/img/teacher/live-2-teacher-1.png';
import teacher_2 from '@/assets/img/teacher/live-2-teacher-2.png';

export default function CourseLiveArea() {
  return (
    <section className="live-area lightblue-bg pt-95 pb-140">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div className="tp-section text-center mb-65">
              <h5 className="tp-section-3-subtitle">Live Courses</h5>
              <h3 className="tp-section-3-title">
                Todays top free
                <span>
                  live
                  <Image
                    className="tp-underline-shape-7 wow bounceIn"
                    data-wow-duration="1.5s"
                    data-wow-delay=".4s"
                    src={shape_underline}
                    alt="shape-unerline"
                  />
                </span>
                Courses
              </h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="tp-live-bg wow fadeInUp" data-wow-delay=".2s">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-4">
                  <div className="tp-live-thumb p-relative">
                    <Image src={live_thumb} alt="live-thumb" style={{height:'auto'}} />
                    <div className="tp-live-thumb-video">
                      <Image src={video_icon} alt="video-icon" />
                    </div>
                    <div className="tp-live-thumb-text">
                      <span>
                        <ClockSvgTwo /> 100min
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-8">
                  <div className="tp-live-content">
                    <span className="tp-live-tag">Art & Design</span>
                    <div className="tp-live-teacher">
                      <div className="tp-live-teacher-info d-flex align-items-center">
                        <div className="tp-live-teacher-thumb">
                          <Image
                            src={teacher}
                            alt="teacher"
                          />
                        </div>
                        <div className="tp-live-teacher-text">
                          <span>Teacher</span>
                          <h4 className="tp-live-teacher-title">
                            Demo Instructor
                          </h4>
                        </div>
                      </div>
                      <div className="tp-live-rating">
                        <p>
                          5.0 <span>/5</span>
                        </p>
                        <div className="tp-live-rating-star">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                      </div>
                    </div>
                    <h4 className="tp-live-title">
                      <Link href="/course-details-2/1">
                        The complete digital Marketing <br /> Course - 12
                        Courses in 5
                      </Link>
                    </h4>
                    <div className="tp-live-total">
                      <div className="tp-live-total-student">
                        <span>Live Student</span>
                        <Image
                          src={teacher_2}
                          alt="teacher"
                        />
                      </div>
                      <div className="tp-live-join">
                        <Link className="tp-btn-border" href="/contact">
                          <span>
                            <JoinSvg />
                          </span>
                          Join Now
                          <i>
                            <RightArrowFour />
                          </i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
