'use client';
import { useState } from "react";
import Link from "next/link";
import { FilterSvg, GridSvg, HomeSvg, ListSvg } from "@/components/svg";
import CourseFilterDropdownArea from "./course-filter/course-filter-dropdown-area";
import useCourseFilter from "@/hooks/use-course-filter";
import FilterSearchTerm from "@/components/form/filter-search-term-form";

type IProps = {
  spacing?: string;
}
export default function CourseFilterBanner({spacing='pt-180 pb-220'}: IProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const {state} = useCourseFilter();
  return (
    <section className={`tp-course-filter-area tp-course-filter-bg p-relative ${spacing}`}>
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
            <div className="tp-course-filter-wrap p-relative">
              <div className="row">
                <div className="col-lg-6">
                  <div className="tp-course-filter-top-left d-flex align-items-center">
                    <div className="tp-course-filter-top-tab tp-tab mb-20">
                      <ul className="nav nav-tabs" id="filterTab" role="tablist">
                        <li className="nav-item" role="presentation">
                          <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true" tabIndex={0}>
                            <GridSvg clr="#031F42" />
                            Grid
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false" tabIndex={-1}>
                            <ListSvg clr="#031F42" />
                            List
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="tp-course-filter-top-result mb-20">
                      <p>Showing 1–{state.filteredCourses.length} of {state.courses.length} results</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="tp-course-filter-top-right d-flex align-items-center justify-content-start justify-content-lg-end">
                    <div className="tp-course-filter-top-right-search d-none d-lg-block mb-20">
                      {/* filter search */}
                      <FilterSearchTerm/>
                      {/* filter search */}
                    </div>
                    <div className="tp-course-filter-btn mb-20">
                      <button onClick={() => setIsFilterOpen(!isFilterOpen)} type="button" className="tp-filter-btn filter-show-dropdown-btn filter-open-btn">
                        <span>
                          <FilterSvg />
                        </span>
                        Filter
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`tp-filter-dropdown-area tp-filter-dropdown-wrapper d-none d-md-block ${isFilterOpen ? "filter-dropdown-opened" : ""}`}>
                {/* course filter dropdown area */}
                <CourseFilterDropdownArea />
                {/* course filter dropdown area */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
