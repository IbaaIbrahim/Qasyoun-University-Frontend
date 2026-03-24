'use client';
import React from "react";
import { MinusSvg, PlusThreeSvg } from "@/components/svg";


export default function CourseDetailsInfo() {
  const [showMore, setShowMore] = React.useState(false);
  return (
    <div id="info">
      <h4 className="tp-course-details-2-main-title">About Course</h4>
      <div className="tp-course-details-2-text mb-60">
        <div className={`content ${showMore ? 'show' : ''}`}>
          <p>This course is aimed at people interested in UI/UX Design. We’ll start from the very <br />
            beginning and work all the way through, step by step. If you already have some UI/UX <br />
            Design experience but want to get up to speed using Adobe XD then this course is perfect <br />
            for you too!</p>
          <p>First, we will go over the differences between UX and UI Design. We will look at what our <br />
            brief for this real-world project is, then we will learn about low-fidelity wireframes and how <br /> to make use of existing UI design kits.</p>
        </div>
        <a onClick={() => setShowMore(!showMore)} className="tp-course-details-showmore show-more-button">
          <span className="svg-icon">
            {showMore ? <MinusSvg clr="#3C66F9" /> : <PlusThreeSvg clr="#3C66F9" />}
          </span> 
          Show {showMore ? 'Less' : 'More'}
       </a>
      </div>
      <h4 className="tp-course-details-2-main-title">What will you Learn?</h4>
      <div className="tp-course-details-2-list">
        <ul>
          <li>Become a UX designer.</li>
          <li>Filming 101</li>
          <li>Learn to design websites.</li>
          <li>Tools you need for best results.</li>
          <li>How to plan for a video idea</li>
          <li>How to use premade UI kits.</li>
          <li>Differences between ads, trailers, vlogs,etc</li>
        </ul>
        <p>With this course, you also have access to a whole lot of resources not only for reference but
          also free media like aerial video shots, background music, fonts, and more.</p>
      </div>
    </div>
  )
}
