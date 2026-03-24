'use client';
import Pagination from "@/components/ui/pagination";
import usePagination from "@/hooks/use-pagination";
import Link from "next/link";

// quiz data
const quizData = [
   {
      date: "March 26, 2024",
      title: "What is design thinking",
      student: "Benjamin Evalent",
      questions: 2,
      totalMarks: 1,
      correctAnswers: 0,
      result: "Fail",
      resultClass: "danger",
   },
   {
      date: "March 26, 2024",
      title: "Quiz Test 01",
      student: "Benjamin Evalent",
      questions: 1,
      totalMarks: 0,
      correctAnswers: 1,
      result: "Pass",
      resultClass: "sucess",
   },
   {
      date: "March 26, 2024",
      title: "Quiz Test 02",
      student: "Benjamin Evalent",
      questions: 2,
      totalMarks: 0,
      correctAnswers: 1,
      result: "Pass",
      resultClass: "sucess",
   },
   {
      date: "March 26, 2024",
      title: "Knowledge Check",
      student: "Benjamin Evalent",
      questions: 1,
      totalMarks: 1,
      correctAnswers: 1,
      result: "Pass",
      resultClass: "sucess",
   },
   {
      date: "March 26, 2024",
      title: "Quiz Test 03",
      student: "Benjamin Evalent",
      questions: 1,
      totalMarks: 0,
      correctAnswers: 0,
      result: "Fail",
      resultClass: "danger",
   },
];

export default function StudentMyQuizArea() {
   const { currentItems, handlePageClick, pageCount } = usePagination(quizData, 4);
   return (
      <>
         {/* section area start */}
         <div className="section-area">
            <div className="tp-dashboard-section">
               <h2 className="tp-dashboard-title">My quiz Attempts</h2>
            </div>
         </div>
         {/* section area end */}

         {/* quiz area start */}
         <div className="tpd-course-area">
            <div className="tpd-table mb-25">
               <ul>
                  <li className="tpd-table-head">
                     <div className="tpd-table-row">
                        <div className="tpd-quiz-info-sub">
                           <h4 className="tpd-table-title">Quiz Info</h4>
                        </div>
                        <div className="tpd-quiz-ques">
                           <h4 className="tpd-table-title">Qus</h4>
                        </div>
                        <div className="tpd-quiz-tm">
                           <h4 className="tpd-table-title">TM</h4>
                        </div>
                        <div className="tpd-quiz-ca-sub">
                           <h4 className="tpd-table-title">CA</h4>
                        </div>
                        <div className="tpd-quiz-result-sub">
                           <h4 className="tpd-table-title">Result</h4>
                        </div>
                        <div className="tpd-quiz-details">
                           <h4 className="tpd-table-title">Details</h4>
                        </div>
                     </div>
                  </li>

                  {currentItems.map((item, index) => (
                     <li key={index}>
                        <div className="tpd-table-row">
                           <div className="tpd-quiz-info-sub">
                              <span className="tpd-common-date">{item.date}</span>
                              <h4 className="tpd-quiz-title">{item.title}</h4>
                              <div className="tpd-student-info">
                                 <p><span>Student: </span> {item.student}</p>
                              </div>
                           </div>
                           <div className="tpd-quiz-ques">
                              <span className="tpd-common-text">{item.questions}</span>
                           </div>
                           <div className="tpd-quiz-tm">
                              <h4 className="tpd-table-title">{item.totalMarks}</h4>
                           </div>
                           <div className="tpd-quiz-ca-sub">
                              <h4 className="tpd-table-title">{item.correctAnswers}</h4>
                           </div>
                           <div className="tpd-quiz-result-sub">
                              <div className="tpd-badge-item">
                                 <span className={`tpd-badge ${item.resultClass}`}>{item.result}</span>
                              </div>
                           </div>
                           <div className="tpd-quiz-details">
                              <div className="tpd-quiz-details-btn">
                                 <Link className="tpd-border-btn" href="/dashboard/instructor-quiz-attempts">Details</Link>
                              </div>
                           </div>
                        </div>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
         {/* quiz area end */}

         {/* pagination area start */}
         <div className="tp-dashboard-pagination pt-20">
            <div className="tp-pagination">
               <Pagination handlePageClick={handlePageClick} pageCount={pageCount} isCenter={true} />
            </div>
         </div>
         {/* pagination area end */}
      </>
   )
}
