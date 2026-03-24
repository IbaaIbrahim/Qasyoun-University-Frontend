import useCourseFilter from "@/hooks/use-course-filter";
import { courseCategories } from "@/lib/get-course-fields";
import { FilterActionTypes } from "@/types/course-filter-type";


type IProps = {
    cls?: string;
};
export default function FilterCategory({cls='filter'}: IProps) {
    const {state,dispatch} = useCourseFilter();
    function handleCategory(category: string) {
        dispatch({type: FilterActionTypes.SET_CATEGORY, payload: category});
    }
    return (
        <div className={`tp-${cls}-widget-content`}>
            <div className={`tp-${cls}-widget-checkbox`}>
                <ul>
                    {courseCategories.map((cate, i) => (
                        <li key={i}>
                            <div className="from-checkbox">
                                <input id={cate.category} type="checkbox" checked={state.category.includes(cate.category)} readOnly />
                                <label onClick={() => handleCategory(cate.category)} htmlFor={cate.category}>{cate.category} ({cate.courseCount})</label>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
