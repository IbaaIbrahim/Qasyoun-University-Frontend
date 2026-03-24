import useCourseFilter from "@/hooks/use-course-filter";
import { FilterActionTypes } from "@/types/course-filter-type";


const filterSortBy = [
    {value:'rating', label:'Trending'},
    {value:'low', label:'Price: low to high'},
    {value:'high', label:'Price: high to low'},
]

export default function FilterSortBy() {
    const { state, dispatch } = useCourseFilter();
    
    function handlePrice(sortBy: string) {
        dispatch({ type: FilterActionTypes.SET_SORT_BY, payload: sortBy });
    }
    return (
        <div className="tp-filter-widget-content">
            <div className="tp-filter-widget-radio">
                <ul>
                    {filterSortBy.map((item, i) => (
                        <li key={i}>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name={item.value}
                                    id={item.value}
                                    checked={state.sortBy === item.value}
                                    readOnly
                                />
                                <label onClick={() => handlePrice(item.value)} className="form-check-label" htmlFor={item.value}>
                                    {item.label}
                                </label>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
