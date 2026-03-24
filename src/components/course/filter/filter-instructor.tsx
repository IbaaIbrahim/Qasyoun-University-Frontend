import useCourseFilter from "@/hooks/use-course-filter";
import { courseInstructors } from "@/lib/get-course-fields";
import { FilterActionTypes } from "@/types/course-filter-type";


type IProps = {
    cls?: string;
}

export default function FilterInstructor({cls='filter'}: IProps) {
    const {state,dispatch} = useCourseFilter();
    function handleInstructor(instructor: string) {
        dispatch({type: FilterActionTypes.SET_INSTRUCTOR, payload: instructor});
    }
    return (
        <div className={`tp-${cls}-widget-content`}>
            <div className={`tp-${cls}-widget-checkbox`}>
                <ul>
                    {courseInstructors.map((instructor, i) => (
                    <li key={i}>
                        <div className="from-checkbox">
                            <input id={instructor.instructor} type="checkbox" checked={state.instructor.includes(instructor.instructor)} readOnly />
                            <label onClick={() => handleInstructor(instructor.instructor)} htmlFor={instructor.instructor}>{instructor.instructor} ({instructor.authorCounts})</label>
                        </div>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
