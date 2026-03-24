'use client';
import Pagination from "@/components/ui/pagination";
import usePagination from "@/hooks/use-pagination";
import Image from "next/image";
import { useState } from "react";

// tabs 
const tabs = ['Received', 'Given'];
// review data
const receivedReviewData = [
   {
      id: 1,
      studentName: 'Joss Sticks',
      studentImage: '/assets/img/dashboard/profile/reviews-profile-1.png',
      date: 'August 27, 2024',
      time: '8:31 am',
      rating: 5,
      feedback: 'Nice Course',
      courseTitle: 'Design Masterclass',
   },
   {
      id: 2,
      studentName: 'Benjamin Evalent',
      studentImage: '/assets/img/dashboard/profile/reviews-profile-2.png',
      date: 'January 30, 2024',
      time: '10:21 am',
      rating: 5,
      feedback: 'Is Great Course!',
      courseTitle: '3D Motion Design',
   },
   {
      id: 3,
      studentName: 'Hanson Deck',
      studentImage: '/assets/img/dashboard/profile/reviews-profile-3.png',
      date: 'April 20, 2024',
      time: '1:05 pm',
      rating: 5,
      feedback: 'Awesome',
      courseTitle: 'Graphic Design Masterclass',
   },
   {
      id: 4,
      studentName: 'Hanson Violet',
      studentImage: '/assets/img/dashboard/profile/reviews-profile-4.png',
      date: 'August 27, 2024',
      time: '10:21 am',
      rating: 5,
      feedback: 'Is Great Course!',
      courseTitle: 'Graphic Design Masterclass',
   },
   {
      id: 5,
      studentName: 'Indigo Violet',
      studentImage: '/assets/img/dashboard/profile/reviews-profile-5.png',
      date: 'January 30, 2024',
      time: '10:21 am',
      rating: 5,
      feedback: 'Awesome',
      courseTitle: 'Design System in Figma',
   },
];
// review data
const giverReviewData = [
   {
      id: 1,
      studentName: 'Hanson Deck',
      studentImage: '/assets/img/dashboard/profile/reviews-profile-3.png',
      date: 'April 20, 2024',
      time: '1:05 pm',
      rating: 5,
      feedback: 'Awesome',
      courseTitle: 'Graphic Design Masterclass',
   },
   {
      id: 2,
      studentName: 'Hanson Violet',
      studentImage: '/assets/img/dashboard/profile/reviews-profile-4.png',
      date: 'August 27, 2024',
      time: '10:21 am',
      rating: 5,
      feedback: 'Is Great Course!',
      courseTitle: 'Graphic Design Masterclass',
   },
   {
      id: 3,
      studentName: 'Indigo Violet',
      studentImage: '/assets/img/dashboard/profile/reviews-profile-5.png',
      date: 'January 30, 2024',
      time: '10:21 am',
      rating: 5,
      feedback: 'Awesome',
      courseTitle: 'Design System in Figma',
   },
];

export default function InstructorReviewArea() {
   const [activeTab, setActiveTab] = useState(tabs[0]);
   const { currentItems, handlePageClick, pageCount } = usePagination(activeTab === 'Received' ? receivedReviewData : giverReviewData, 4);
   function handleReviewCount (tab: string) {
      if (tab === 'Received') {
         return receivedReviewData.length
      } else {
         return giverReviewData.length
      }
   }
   return (
      <>

         {/* review tab area start */}
         <div className="tp-dashboard-tab mb-30">
            <h2 className="tp-dashboard-tab-title">Reviews</h2>
            <div className="tp-dashboard-tab-list">
               <ul>
                  {tabs.map((tab) => (
                     <li
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                     >
                        <a className={`${activeTab === tab ? 'active' : ''} pointer`}>
                         {tab}{" "}<span>({handleReviewCount(tab)})</span>
                        </a>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
         {/* review tab area end */}

         {/* review area start */}
         <div className="tpd-table mb-25">
            <ul>
               <li className="tpd-table-head">
                  <div className="tpd-table-row">
                     <div className="tpd-reviews-student">
                        <h4 className="tpd-table-title">Student</h4>
                     </div>
                     <div className="tpd-reviews-date">
                        <h4 className="tpd-table-title">Date</h4>
                     </div>
                     <div className="tpd-reviews-feedback">
                        <h4 className="tpd-table-title">Feedback</h4>
                     </div>
                  </div>
               </li>

               {currentItems.map((review) => (
                  <li key={review.id}>
                     <div className="tpd-table-row">
                        <div className="tpd-reviews-student">
                           <div className="tpd-reviews-profile d-flex align-items-center">
                              <div className="tpd-reviews-thumb">
                                 <Image src={review.studentImage} alt={review.studentName} width={38} height={38} />
                              </div>
                              <h4 className="tpd-reviews-thumb-title">{review.studentName}</h4>
                           </div>
                        </div>
                        <div className="tpd-reviews-date">
                           <span>{review.date}</span>
                           <p>{review.time}</p>
                        </div>
                        <div className="tpd-reviews-feedback">
                           <div className="tp-instructor-rating">
                              {[...Array(review.rating)].map((_, i) => (
                                 <i key={i} className="fa-solid fa-star"></i>
                              ))}
                           </div>
                           <span>{review.feedback}</span>
                           <div className="tpd-course-wrap">
                              <span className="tpd-course-name">Course:</span>
                              <span className="tpd-course-title">{review.courseTitle}</span>
                           </div>
                        </div>
                     </div>
                  </li>
               ))}
            </ul>
         </div>
         {/* review area end */}

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
