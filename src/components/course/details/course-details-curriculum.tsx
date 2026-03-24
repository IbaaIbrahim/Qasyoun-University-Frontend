import {
   AudioPlayerSvg,
   Document,
   Lock,
   OpenEyeTwo,
   VideoPlayerTwoSvg,
 } from "@/components/svg";


 const CurriculumData = [
   {
     moduleTitle: "Intro to Course and Histudy",
     lessons: [
       {
         type: "video",
         title: "Course Intro",
         duration: "20 min",
         preview: true,
       },
       {
         type: "video",
         title: "Greetings and introduction",
         duration: "20 min",
         preview: true,
       },
       {
         type: "audio",
         title: "Incididunt ut labore et dolore",
         duration: "20 min",
         preview: false,
       },
       {
         type: "reading",
         title: "Incididunt ut labore et dolore",
         duration: "20 min",
         preview: false,
       },
     ],
     totalLessons: 4,
     totalTime: "15m 10s",
   },
   {
     moduleTitle: "Intro to Course and Histudy",
     lessons: [
       {
         type: "video",
         title: "Course Intro",
         duration: "20 min",
         preview: true,
       },
       {
         type: "video",
         title: "Greetings and introduction",
         duration: "20 min",
         preview: true,
       },
       {
         type: "audio",
         title: "Incididunt ut labore et dolore",
         duration: "20 min",
         preview: false,
       },
       {
         type: "reading",
         title: "Incididunt ut labore et dolore",
         duration: "20 min",
         preview: false,
       },
     ],
     totalLessons: 7,
     totalTime: "20m 50s",
   },
   {
     moduleTitle: "Intro to Course and Histudy",
     lessons: [
       {
         type: "video",
         title: "Course Intro",
         duration: "20 min",
         preview: true,
       },
       {
         type: "video",
         title: "Greetings and introduction",
         duration: "20 min",
         preview: true,
       },
       {
         type: "audio",
         title: "Incididunt ut labore et dolore",
         duration: "20 min",
         preview: false,
       },
       {
         type: "reading",
         title: "Incididunt ut labore et dolore",
         duration: "20 min",
         preview: false,
       },
     ],
     totalLessons: 5,
     totalTime: "10m 10s",
   },
 ];
 
 
 export default function CourseDetailsCurriculum() {
   return (
     <div className="tp-course-details-2-faq">
       <div className="accordion" id="accordionPanelsStayOpenExample">
         {CurriculumData.map((module, moduleIndex) => (
           <div className="accordion-item" key={moduleIndex}>
             <h2 className="accordion-header" id={`heading-${moduleIndex}`}>
               <button
                 className={`accordion-button ${moduleIndex !== 0 ? "collapsed" : ""} d-flex justify-content-between`}
                 type="button"
                 data-bs-toggle="collapse"
                 data-bs-target={`#collapse-${moduleIndex}`}
                 aria-expanded="false"
                 aria-controls={`collapse-${moduleIndex}`}
               >
                 <span className="span">{module.moduleTitle}</span>
                 <span className="lesson">
                   {module.totalLessons} Lessons • {module.totalTime}
                 </span>
                 <span className="accordion-btn"></span>
               </button>
             </h2>
 
             <div
               id={`collapse-${moduleIndex}`}
               className={`accordion-collapse collapse ${
                 moduleIndex === 0 ? "show" : ""
               }`}
               aria-labelledby={`heading-${moduleIndex}`}
             >
               <div className="accordion-body">
                 {module.lessons.map((lesson, lessonIndex) => (
                   <div
                     className="tp-course-details-2-faq-item d-flex justify-content-between"
                     key={lessonIndex}
                   >
                     <div className="left">
                       <span>
                         {lesson.type === "video" && <VideoPlayerTwoSvg />}
                         {lesson.type === "audio" && <AudioPlayerSvg />}
                         {lesson.type === "reading" && <Document />}{" "}
                         <i>{lesson.type.charAt(0).toUpperCase() + lesson.type.slice(1)}:</i>{" "}
                         {lesson.title}
                       </span>
                     </div>
                     <div className="right">
                       <span>
                         {lesson.duration}{" "}
                         {lesson.preview ? (
                           <a href="#">
                             <OpenEyeTwo /> Preview
                           </a>
                         ) : (
                           <Lock />
                         )}
                       </span>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
           </div>
         ))}
       </div>
     </div>
   );
 }
 