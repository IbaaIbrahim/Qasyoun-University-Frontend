'use client';
import useCourseFilter from '@/hooks/use-course-filter';
import { FilterActionTypes } from '@/types/course-filter-type';

export default function ResetFilter() {
    const { dispatch } = useCourseFilter();
    return (
        <div className="container mt-100 mb-100">
            <div className="text-center">
                <h3>No Course Found</h3>
                <p>Please try with different keywords</p>
                <button className='tp-btn-inner' onClick={() => dispatch({ type: FilterActionTypes.RESET_FILTER })}>Reset Filter</button>
            </div>
        </div>
    )
}
