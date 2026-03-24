'use client';
import Link from "next/link";
import { GridSvg, HomeSvg, ListSvg } from "@/components/svg";
import FilterSearchTerm from "@/components/form/filter-search-term-form";
import { SelectFilterSortBy } from "@/components/course/filter/course-filter-select-boxs";
import useCourseFilter from "@/hooks/use-course-filter";

type IProps = {
  listActive?: boolean
}
export default function CourseBannerArea({ listActive }: IProps) {
  const { state } = useCourseFilter();
  return (
    <section className="tp-course-filter-area tp-course-filter-bg tp-course-filter-space p-relative">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tp-breadcrumb__content-filter mb-50">
              <div className="tp-breadcrumb__list">
                <span><Link href="/"><HomeSvg /></Link></span>
                <span className="color">All Courses</span>
              </div>
              <h3 className="tp-breadcrumb__title">All Courses</h3>
              <p>We have the largest collection of <span>{state.courses.length}</span> courses</p>
            </div>
            <div className="tp-course-grid-wrap p-relative">
              <div className="row">
                <div className="col-lg-6">
                  <div className="tp-course-filter-top-left d-flex align-items-center">
                    <div className="tp-course-filter-top-tab tp-tab mb-20">
                      <ul className="nav nav-tabs" id="filtertab" role="tablist">
                        <li className="nav-item" role="presentation">
                          <button className={`nav-link ${listActive ? '' : 'active'}`} id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected={listActive ? 'false' : 'true'} tabIndex={0}>
                            <GridSvg />
                            Grid
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className={`nav-link ${listActive ? 'active' : ''}`} id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected={listActive ? 'true' : 'false'} tabIndex={-1}>
                            <ListSvg />
                            List
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="tp-course-filter-top-result mb-20">
                      <p>
                        Showing 1–{state.filteredCourses.length} of {state.courses.length} results
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="tp-course-filter-top-right categories d-flex align-items-center justify-content-start justify-content-lg-end">
                    <div className="tp-course-filter-top-right-search d-none d-lg-block mb-20">
                      {/* filter search */}
                      <FilterSearchTerm />
                      {/* filter search */}
                    </div>
                    <div className="tp-course-filter-select mb-20">
                      <SelectFilterSortBy />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
