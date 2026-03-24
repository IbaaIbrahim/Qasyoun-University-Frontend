import CourseAdditionalInfo from "./course-additional-info";
import CourseAttachment from "./course-attachment";
import CourseBuilderArea from "./course-builder-area";
import CourseCertificate from "./course-certificate";
import CourseInfoArea from "./course-info-area";
import CourseInstructor from "./course-instructor";
import CourseIntroVideo from "./course-intro-video";
import CoursePrerequisites from "./course-prerequisites";


const listData = [
   "Set the Course Price option or make it free.",
   "Standard size for the course thumbnail is 700x430.",
   "Video section controls the course overview video.",
   "Course Builder is where you create & organize a course.",
   "Add Topics in the Course Builder section to create lessons, quizzes, and assignments.",
];

export default function CreateNewCourseArea() {
   return (
      <main className="tp-dashboard-body-bg p-relative">
         <div className="tpd-dashboard-wrap-bg" style={{ backgroundImage: "url(/assets/img/dashboard/bg/dashboard-bg-shape-1.jpg)" }}>

            {/* create new course area start */}
            <section className="tpd-new-course-area pt-80 pb-120">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-8">
                        <div className="tpd-new-course-wrap">
                           <div className="tpd-new-course-box">

                              <div className="accordion" id="accordionPanelsStayOpenExample">

                                 {/* course info area start */}
                                 <CourseInfoArea />
                                 {/* course info area end */}


                                 {/* course intro video */}
                                 <CourseIntroVideo />
                                 {/* course intro video */}

                                 {/* course builder area */}
                                 <CourseBuilderArea />
                                 {/* course builder area */}

                                 {/* course instructor area */}
                                 <CourseInstructor />
                                 {/* course instructor area */}

                                 {/* course attachment area */}
                                 <CourseAttachment />
                                 {/* course attachment area */}

                                 {/* course additional info */}
                                 <CourseAdditionalInfo />
                                 {/* course additional info */}

                                 {/* course prerequisites */}
                                 <CoursePrerequisites />
                                 {/* course prerequisites */}

                                 {/* course certificate */}
                                 <CourseCertificate />
                                 {/* course certificate */}

                              </div>

                           </div>
                        </div>
                     </div>
                     <div className="col-lg-4">
                        <div className="tpd-course-enroll-list">
                           <h2 className="tp-dashboard-title">Course Upload Tips</h2>
                           <ul>
                              {listData.map((tip, index) => (
                                 <li key={index}>
                                    <span>{index + 1}. </span>
                                    {tip}
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            {/* create new course area end */}

         </div>
      </main>
   )
}
