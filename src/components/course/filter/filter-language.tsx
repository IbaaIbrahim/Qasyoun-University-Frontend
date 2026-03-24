import useCourseFilter from "@/hooks/use-course-filter";
import { courseLanguages } from "@/lib/get-course-fields";
import { FilterActionTypes } from "@/types/course-filter-type";

type IProps = {
    cls?: string;
    checkbox?: boolean;
}

export default function FilterLanguage({cls='filter',checkbox}: IProps) {
    const {state,dispatch} = useCourseFilter();
    function handleLanguage(lang: string) {
        dispatch({type: FilterActionTypes.SET_LANGUAGE, payload: lang});
    }
    return (
        <div className={`tp-${cls}-widget-content`}>
            <div className={`tp-${cls}-widget-${checkbox?'checkbox':'radio'}`}>
                <ul>
                    {courseLanguages.map((lang, i) => (
                    <li key={i}>
                        <div className={`${checkbox?'from-checkbox':'form-check'}`}>
                            <input className={`${checkbox?'':'form-check-input'}`} type={checkbox?'checkbox':'radio'} name={lang.language} id={lang.language} checked={state.language.includes(lang.language)} readOnly />
                            <label onClick={() => handleLanguage(lang.language)} className={`${checkbox?'':'form-check-label'}`} htmlFor={lang.language}>
                                {lang.language} ({lang.languageCounts})
                            </label>
                        </div>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
