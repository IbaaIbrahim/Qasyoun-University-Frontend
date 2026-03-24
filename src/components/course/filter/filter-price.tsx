import useCourseFilter from "@/hooks/use-course-filter";
import { FilterActionTypes } from "@/types/course-filter-type";

const priceFilter: Array<"all" | "free" | "paid"> = ['all', 'free', 'paid'];


type IProps = {
    cls?: string;
}
export default function FilterPrice({cls="filter"}: IProps) {
    const { state, dispatch } = useCourseFilter();
    
    function handlePrice(price: "all" | "free" | "paid") {
        dispatch({ type: FilterActionTypes.SET_PRICE, payload: price });
    }
    
    return (
        <div className={`tp-${cls}-widget-content`}>
            <div className={`tp-${cls}-widget-radio`}>
                <ul>
                    {priceFilter.map((price, i) => (
                        <li key={i}>
                            <div className="form-check text-capitalize">
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    name={price}
                                    id={price} 
                                    checked={state.priceFilter === price}
                                    readOnly
                                />
                                <label onClick={() => handlePrice(price)} className="form-check-label" htmlFor={price}>
                                    {price} ({price === 'all' ? state.courses.length : price === 'free' ? state.courses.filter((course) => course.price === 0).length : state.courses.filter((course) => course.price > 0).length})
                                </label>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
