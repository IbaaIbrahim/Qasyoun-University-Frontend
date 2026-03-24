import Link from "next/link";
import Image from "next/image";
import { CloseThreeSvg, DocumentTwo, NextArrowFive, PrevArrowFive, PrevArrowTwo, QuestionTwoSvg, VideoPlayerFourSvg } from "@/components/svg";
import learning_bg from '@/assets/img/dashboard/bg/learning-bg.jpg';

// learning data
const learningData = [
    {
        title: "Getting Started",
        progress: "3/3",
        lessons: [
            { type: "document", title: "History of Design", time: "", completed: true },
            { type: "video", title: "History of Design", time: "00:14", completed: false },
            { type: "question", title: "History of Design", time: "", completed: false }
        ]
    },
    {
        title: "Design History",
        progress: "2/3",
        lessons: [
            { type: "document", title: "Introduction to Design", time: "", completed: true },
            { type: "video", title: "Design Overview", time: "00:20", completed: false },
            { type: "question", title: "Quiz on Design", time: "", completed: false }
        ]
    },
    {
        title: "Typography Basics",
        progress: "2/3",
        lessons: [
            { type: "document", title: "Introduction to Typography", time: "", completed: true },
            { type: "video", title: "Typography Concepts", time: "00:25", completed: false },
            { type: "question", title: "Typography Quiz", time: "", completed: false }
        ]
    },
    {
        title: "Color Theory",
        progress: "3/3",
        lessons: [
            { type: "document", title: "Understanding Color", time: "", completed: true },
            { type: "video", title: "Color Combinations", time: "00:18", completed: false },
            { type: "question", title: "Color Theory Quiz", time: "", completed: true }
        ]
    },
    {
        title: "Design Principles",
        progress: "1/2",
        lessons: [
            { type: "document", title: "Principles of Design", time: "", completed: true },
            { type: "video", title: "Applying Design Principles", time: "00:30", completed: false }
        ]
    },
    {
        title: "User Interface Design",
        progress: "2/3",
        lessons: [
            { type: "document", title: "UI Design Basics", time: "", completed: true },
            { type: "video", title: "UI Components", time: "00:22", completed: false },
            { type: "question", title: "UI Design Quiz", time: "", completed: false }
        ]
    },
    {
        title: "Responsive Design",
        progress: "2/2",
        lessons: [
            { type: "document", title: "Introduction to Responsive Design", time: "", completed: true },
            { type: "video", title: "Creating Responsive Layouts", time: "00:28", completed: false }
        ]
    },
    {
        title: "Advanced Design Techniques",
        progress: "1/2",
        lessons: [
            { type: "document", title: "Design Optimization", time: "", completed: true },
            { type: "video", title: "Advanced Design Strategies", time: "00:35", completed: false }
        ]
    }
];

export default function CourseLessonArea() {
  return (
    <div className="tpd-dashboard-wrap-bg" style={{ backgroundImage: "url(/assets/img/dashboard/bg/dashboard-bg-shape-1.jpg)" }}>
    <div className="tpd-continue-learning-wrapper">
        <div className="tpd-continue-learning-sidebar">
            <div className="tpd-continue-learning-accordion">
                <div className="accordion" id="accordionExample">
                    {learningData.map((section, index) => (
                        <div className="accordion-item" key={index}>
                            <h2 className="accordion-header" id={`heading${index}`}>
                                <button className={`accordion-button ${index === 0 ? "" : "collapsed"}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="true" aria-controls={`collapse${index}`}>
                                    {section.title}
                                    <span>{section.progress}</span>
                                </button>
                            </h2>
                            <div id={`collapse${index}`} className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`} aria-labelledby={`heading${index}`} data-bs-parent="#accordionExample">
                                <div className="tpd-continue-learning-body">
                                    <div className="tpd-continue-learning-body-item">
                                        {section.lessons.map((lesson, lessonIndex) => (
                                            <a href="#" className={lesson.completed ? "active" : ""} key={lessonIndex}>
                                                <p>
                                                    <span>
                                                        {lesson.type === "document" && <DocumentTwo />}
                                                        {lesson.type === "video" && <VideoPlayerFourSvg />}
                                                        {lesson.type === "question" && <QuestionTwoSvg />}
                                                    </span>
                                                    {lesson.title}
                                                </p>
                                                {lesson.time && (
                                                    <div className="time">
                                                        <p>{lesson.time}</p>
                                                        <i className="fa-solid fa-circle-check"></i>
                                                    </div>
                                                )}
                                                {lesson.completed && <i className="fa-solid fa-circle-check"></i>}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        <div className="tpd-continue-learning-main">
            <div className="tpd-continue-learning-popup d-flex justify-content-between align-items-center">
                <div className="tpd-continue-learning-popup-main d-flex align-items-center">
                    <a href="#">
                        <span className="close">
                            <PrevArrowTwo cls="svg-1" />
                        </span>
                    </a>
                    <p>Interior design concepts Masterclass</p>
                </div>
                <div className="tpd-continue-learning-popup-main d-flex align-items-center">
                    <p>Your Progress: 8 of 10 (80%)</p>
                    <Link href="/course-details/1">
                        <span className="crose">
                            <CloseThreeSvg />
                        </span>
                    </Link>
                </div>
            </div>

            <div className="tpd-continue-learning-about-bg">
                <div className="tpd-continue-learning-about-thumb mb-45">
                    <Image src={learning_bg} alt="Lesson background" style={{height:"auto"}} />
                </div>
                <div className="tpd-continue-learning-about-wrapper">
                    <h4>About Lesson</h4>
                    <p>The five main components of language are phonemes, morphemes, lexemes, syntax, and context.</p>
                </div>
                <div className="tpd-continue-learning-about-btn d-flex justify-content-center">
                    <div className="prv">
                        <a href="#">
                            <span>
                                <PrevArrowFive />
                            </span>{" "}
                            Previous
                        </a>
                    </div>
                    <div className="next">
                        <a href="#">
                            Next{" "}
                            <span>
                                <NextArrowFive />
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
