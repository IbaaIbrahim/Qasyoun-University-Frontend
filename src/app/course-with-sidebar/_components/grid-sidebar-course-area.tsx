'use client';
import useCourseFilter from "@/hooks/use-course-filter";
import FilterSidebarArea from "./filter-sidebar-area";
import usePagination from "@/hooks/use-pagination";
import Pagination from "@/components/ui/pagination";
import CourseListItemTwo from "@/components/course/single/course-list-item-2";
import CourseItem from "@/components/course/single/course-item";


export default function GridSidebarCourseArea() {
   const { state } = useCourseFilter();
   const { currentItems, handlePageClick, pageCount } = usePagination(state.filteredCourses, 6);
   return (
      <section className="tp-grid-sidebar-area pb-100">
         <div className="container">
            <div className="row">
               <div className="col-lg-3">
                  {/* sidebar area */}
                  <FilterSidebarArea />
                  {/* sidebar area */}
               </div>

               <div className="col-lg-9">
                  <div className="tab-content" id="myTabContent">
                     <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div className="tp-grid-sidebar-right">
                           <div className="row">

                              {currentItems.map((course) => (
                                 <div key={course.id} className="col-lg-4 col-md-6">
                                    <CourseItem course={course} removeTag={true} />
                                 </div>
                              ))}

                           </div>
                        </div>
                     </div>

                     <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div className="tp-list-sidebar-right">
                           <div className="row">

                              {/* list item start */}
                              {currentItems.map((course) => (
                                 <CourseListItemTwo key={course.id} course={course} sm_title={true} title_cls="tp-course-list-title" />
                              ))}
                              {/* list item end */}

                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="tp-event-inner-pagination">
                     <div className="tp-dashboard-pagination pt-20">
                        <div className="tp-pagination">

                           {/* pagination start */}
                           <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
                           {/* pagination end */}
                        </div>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </section>
   )
}
