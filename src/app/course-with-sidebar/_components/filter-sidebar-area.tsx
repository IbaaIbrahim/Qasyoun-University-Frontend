'use client';
import FilterCategory from '@/components/course/filter/filter-category';
import FilterInstructor from '@/components/course/filter/filter-instructor';
import FilterLanguage from '@/components/course/filter/filter-language';
import FilterPrice from '@/components/course/filter/filter-price';
import { CloseTwoSvg } from '@/components/svg';
import useCourseFilter from '@/hooks/use-course-filter';
import { FilterActionTypes } from '@/types/course-filter-type';

export default function FilterSidebarArea() {
    const {dispatch} = useCourseFilter();
    return (
        <div className="tp-grid-sidebar-left">
            <div className="tp-grid-widget-box">
                <div className="tp-grid-widget-item">
                    <h4 className="tp-grid-widget-title">All categories</h4>
                    <FilterCategory cls='grid' />
                </div>
                <div className="tp-grid-widget-item">
                    <h4 className="tp-grid-widget-title">Instructors</h4>
                    <FilterInstructor cls='grid' />
                </div>
                <div className="tp-grid-widget-item">
                    <h4 className="tp-grid-widget-title">Price</h4>
                    <div className="tp-filter-widget-radio">
                        <FilterPrice cls='grid' />
                    </div>
                </div>
                <div className="tp-grid-widget-item">
                    <h4 className="tp-grid-widget-title">Language</h4>
                    <FilterLanguage cls='grid' checkbox={true} />
                </div>
            </div>
            <div className="tp-grid-widget-btn mt-15">
                <a onClick={() => dispatch({type: FilterActionTypes.RESET_FILTER})} className='pointer'> <span>
                    <CloseTwoSvg />
                </span> Clear all Filters</a>
            </div>
        </div>
    )
}
