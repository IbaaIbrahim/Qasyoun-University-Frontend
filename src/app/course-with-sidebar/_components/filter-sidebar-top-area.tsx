import { GridSvg, ListSvg } from "@/components/svg";
import { SelectFilterSortBy } from "@/components/course/filter/course-filter-select-boxs";
import FilterSearchTerm from "@/components/form/filter-search-term-form";

export default function FilterSidebarTopArea() {
   return (
      <div className="tp-grid-area pt-80 pb-40">
         <div className="container">
            <div className="tp-course-grid-sidebar p-relative">
               <div className="row">
                  <div className="col-lg-8">
                     <div className="tp-course-grid-sidebar-left d-flex align-items-center">
                        <div className="tp-course-grid-sidebar-search p-relative mr-30 d-none d-lg-block">
                           <FilterSearchTerm btnCls="tp-sidebar-search-btn" svgClr="currentColor" />
                        </div>
                        <div className="tp-course-grid-sidebar-tab tp-tab">
                           <ul className="nav nav-tabs" id="filterTab" role="tablist">
                              <li className="nav-item" role="presentation">
                                 <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true" tabIndex={0}>
                                    <GridSvg />
                                 </button>
                              </li>
                              <li className="nav-item" role="presentation">
                                 <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false" tabIndex={-1}>
                                    <ListSvg />
                                 </button>
                              </li>
                           </ul>
                        </div>
                        <div className="tp-course-filter-top-result">
                           <p>Showing 1–14 of 26 results</p>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4">
                     <div className="tp-course-grid-sidebar-right d-flex justify-content-start justify-content-lg-end">
                        <div className="tp-course-grid-select tp-course-grid-sidebar-select">
                           <SelectFilterSortBy />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
