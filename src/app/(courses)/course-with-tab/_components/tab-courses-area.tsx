'use client';
import { useState } from "react";
import { courseCategories } from "@/lib/get-course-fields";
import useCourseFilter from "@/hooks/use-course-filter";
import usePagination from "@/hooks/use-pagination";
import ResetFilter from "@/components/course/filter/reset-filter";
import Pagination from "@/components/ui/pagination";
import CourseItem from "@/components/course/single/course-item";
import CourseListItemTwo from "@/components/course/single/course-list-item-2";
import { FilterActionTypes } from "@/types/course-filter-type";

type IProps = {
   listActive?: boolean
}

export default function TabCoursesArea({listActive}: IProps) {
   const [activeTab, setActiveTab] = useState('All Courses');
   const { state,dispatch } = useCourseFilter();
   const { currentItems, handlePageClick, pageCount } = usePagination(state.filteredCourses, 6);
   function handleCategory(category: string) {
      setActiveTab(category);
      dispatch({ type: FilterActionTypes.SET_CATEGORY, payload: category })
   }
   return (
      <section>
         {state.filteredCourses.length > 0 ? (
            <div className="tp-filter-mt pb-100">
               <div className="container">
                  <div className="row">

                     <div className="tp-course-grid-box tp-tab">
                        <ul className="nav nav-tabs">
                           {[{ category: 'All Courses'}, ...courseCategories].slice(0,7).map((cate, i) => (
                              <li key={i} className="nav-item" role="presentation">
                                 <button onClick={() => handleCategory(cate.category)} className={`nav-link ${activeTab === cate.category ? 'active' : ''}`}>
                                    {cate.category}
                                 </button>
                              </li>
                           ))}
                        </ul>
                     </div>

                     <div className="tab-content" id="myTabContent">
                        <div className={`tab-pane fade ${listActive?'':'show active'}`} id="home" role="tabpanel" aria-labelledby="home-tab">

                           <div className="row">
                              {currentItems.map((course) => (
                                 <div key={course.id} className="col-lg-4 col-md-6">
                                    <CourseItem course={course} />
                                 </div>
                              ))}
                           </div>
                        </div>

                        <div className={`tab-pane fade ${listActive?'show active':''}`} id="profile" role="tabpanel" aria-labelledby="profile-tab">

                           {currentItems.map((course) => (
                              <CourseListItemTwo key={course.id} course={course} />
                           ))}

                        </div>
                     </div>

                     <div className="col-lg-12">
                        <div className="tp-event-inner-pagination">
                           <div className="tp-dashboard-pagination pt-20">
                              <div className="tp-pagination">
                                 <Pagination handlePageClick={handlePageClick} pageCount={pageCount} isCenter={true} />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         ) : <ResetFilter />}

      </section>
   )
}
