import Link from "next/link";


const courseData = [
   {
      name: 'Product Design',
      enrollCount: 45,
      rating: 5,
   },
   {
      name: 'Graphic Design Masterclass',
      enrollCount: 12,
      rating: 3,
   },
   {
      name: 'Fundamentals of Business Analysis',
      enrollCount: 22,
      rating: 2,
   },
   {
      name: 'Design System in Figma',
      enrollCount: 30,
      rating: 5,
   },
   {
      name: '3D Motion Design',
      enrollCount: 8,
      rating: 5,
   },
];

export default function DashboardCoursesArea() {
   return (
      <section className="tp-dashboard-course-wrapper">
         <div className="row">
            <div className="col-6">
               <div className="tp-dashboard-section">
                  <h2 className="tp-dashboard-title">My Courses</h2>
               </div>
            </div>
            <div className="col-6">
               <div className="tp-dashboard-course-details text-sm-end">
                  <Link href="/course-with-filter">
                     Browse All Course <i className="fa-regular fa-angle-right"></i>
                  </Link>
               </div>
            </div>
         </div>
         <div className="row">
            <div className="col-12">
               <div className="tp-dashboard-course-list">
                  <ul>
                     <li className="active">
                        <div className="tp-dashboard-course-item">
                           <div className="tp-dashboard-course-name">
                              <h5 className="tp-dashboard-course-name-title">Course Name</h5>
                           </div>
                           <div className="tp-dashboard-course-enroll">
                              <span>Enrolled</span>
                           </div>
                           <div className="tp-dashboard-course-rating">
                              <span>Rating</span>
                           </div>
                        </div>
                     </li>
                     {courseData.map((course, index) => (
                        <li key={index}>
                           <div className="tp-dashboard-course-item">
                              <div className="tp-dashboard-course-name">
                                 <h5 className="tp-dashboard-course-name-title">{course.name}</h5>
                              </div>
                              <div className="tp-dashboard-course-enroll">
                                 <span>{course.enrollCount}</span>
                              </div>
                              <div className="tp-dashboard-course-rating">
                                 {Array.from({ length: 5 }, (_, i) => (
                                    <i
                                       key={i}
                                       className={`fa-star ${i < course.rating ? 'fa-solid' : 'fa-light'}`}
                                    ></i>
                                 ))}

                              </div>
                           </div>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
      </section>
   );
}
