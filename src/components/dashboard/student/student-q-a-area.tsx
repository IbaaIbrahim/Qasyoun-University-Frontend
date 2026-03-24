import { QuestionAnswerItem } from "../instructor/instructor-q-a-area";


// student q-a data
const studentQaData = [
   {
      id: 1,
      student: {
         name: "Hanson Deck",
         date: "June 11, 2021 at 6:01 am",
         profileImg: "/assets/img/dashboard/profile/reviews-profile-1.png"
      },
      question: "Hello! Could you explain the last lesson?",
      course: "New Course",
      replies: 2,
      status: "pending",
   },
   {
      id: 2,
      student: {
         name: "Indigo Violet",
         date: "June 12, 2021 at 2:15 pm",
         profileImg: "/assets/img/dashboard/profile/reviews-profile-2.png"
      },
      question: "I'm struggling with the assignment.",
      course: "Advanced Math",
      replies: 3,
      status: "complete",
   },
   {
      id: 3,
      student: {
         name: "Benjamin Evalent",
         date: "June 13, 2021 at 9:45 am",
         profileImg: "/assets/img/dashboard/profile/reviews-profile-3.png"
      },
      question: "Can you clarify the project requirements?",
      course: "Physics 101",
      replies: 1,
      status: "pending",
   },
   {
      id: 4,
      student: {
         name: "Jennifer Lang",
         date: "June 14, 2021 at 8:30 am",
         profileImg: "/assets/img/dashboard/profile/reviews-profile-4.png"
      },
      question: "What is the due date for the final project?",
      course: "Art History",
      replies: 5,
      status: "complete",
   },
   {
      id: 5,
      student: {
         name: "Michael Lee",
         date: "June 15, 2021 at 3:20 pm",
         profileImg: "/assets/img/dashboard/profile/reviews-profile-2.png"
      },
      question: "Is there any extra credit available?",
      course: "Chemistry Basics",
      replies: 0,
      status: "pending",
   },
   {
      id: 6,
      student: {
         name: "Sophia Blake",
         date: "June 16, 2021 at 5:00 pm",
         profileImg: "/assets/img/dashboard/profile/reviews-profile-1.png"
      },
      question: "Can you review my essay before submission?",
      course: "English Literature",
      replies: 4,
      status: "complete",
   }
];

export default function StudentQuestionAnswerArea() {
   return (
      <section className="tpd-order-area">
         <div className="row">
            <div className="col-lg-6">
               <div className="tp-dashboard-section">
                  <h2 className="tp-dashboard-title">Question & Answer</h2>
               </div>
            </div>
         </div>


         <div className="tpd-table mb-45">
            <ul>
               <li className="tpd-table-head">
                  <div className="tpd-table-row">
                     <div className="tpd-instructor-qa-student">
                        <h4 className="tpd-table-title">Student</h4>
                     </div>
                     <div className="tpd-instructor-qa-question">
                        <h4 className="tpd-table-title">Question</h4>
                     </div>
                     <div className="tpd-instructor-qa-reply">
                        <h4 className="tpd-table-title">Reply</h4>
                     </div>
                     <div className="tpd-instructor-qa-status">
                        <h4 className="tpd-table-title">Status</h4>
                     </div>
                     <div className="tpd-instructor-qa-btn"></div>
                     <div className="tpd-instructor-qa-action"></div>
                  </div>
               </li>

               {studentQaData.map((item, index) => (
                  <QuestionAnswerItem key={index} item={item} />
               ))}
            </ul>
         </div>
      </section>
   )
}
