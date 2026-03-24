'use client';
import NiceSelect from "@/components/ui/nice-select"
import useCourseFilter from "@/hooks/use-course-filter";
import { courseCategories, courseInstructors, courseLanguages } from "@/lib/get-course-fields";
import { FilterActionTypes } from "@/types/course-filter-type";


export function SelectFilterSortBy() {
    const { dispatch } = useCourseFilter();
    function handleSortBy(item: { value: string; label: string }) {
        dispatch({ type: FilterActionTypes.SET_SORT_BY, payload: item.value })
    }
    return (
        <NiceSelect
            options={[
                { value: "", label: "Filter Sort" },
                { value: "rating", label: "Trending" },
                { value: "low", label: "Price : low to high" },
                { value: "high", label: "Price : high to low" },
            ]}
            defaultCurrent={0}
            cls="wide"
            placeholder="Default"
            onChange={handleSortBy}
            name="SortBy"
        />
    )
}

export function SelectFilterCategory() {
    const { dispatch } = useCourseFilter();
    function handleCategory(item: { value: string; label: string }) {
        dispatch({ type: FilterActionTypes.SET_CATEGORY, payload: item.value })
    }
    return (
        <div className="tp-course-grid-select">
            <p>SHORT BY CATEGORY</p>
            <NiceSelect
                options={[
                    { value: "", label: "Select category" },
                    ...courseCategories.map((c) => (
                        { value: c.category, label: c.category }
                    ))
                ]}
                defaultCurrent={0}
                cls="wide"
                placeholder="Default"
                onChange={handleCategory}
                name="Category"
            />
        </div>
    )
}

export function SelectFilterAuthor() {
    const { dispatch } = useCourseFilter();
    function handleInstructor(item: { value: string; label: string }) {
        dispatch({ type: FilterActionTypes.SET_INSTRUCTOR, payload: item.value })
    }
    return (
        <div className="tp-course-grid-select">
            <p>SHORT BY AUTHOR</p>
            <NiceSelect
                options={[
                    { value: "", label: "Select author" },
                    ...courseInstructors.map((i) => (
                        { value: i.instructor, label: i.instructor }
                    ))
                ]}
                defaultCurrent={0}
                cls="wide"
                placeholder="Default"
                onChange={handleInstructor}
                name="Instructor"
            />
        </div>
    )
}

export function SelectFilterLanguage() {
    const { dispatch } = useCourseFilter();
    function handleLang(item: { value: string; label: string }) {
        dispatch({ type: FilterActionTypes.SET_LANGUAGE, payload: item.value })
    }
    return (
        <div className="tp-course-grid-select">
            <p>SHORT BY LANGUAGE</p>
            <NiceSelect
                options={[
                    { value: "", label: "Select language" },
                    ...courseLanguages.map((l) => (
                        { value: l.language, label: l.language }
                    ))
                ]}
                defaultCurrent={0}
                cls="wide"
                placeholder="Default"
                onChange={handleLang}
                name="Language"
            />
        </div>
    )
}

export default function CourseFilterSelectBox() {
    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="tp-course-grid-categories d-flex">
                    <div className="tp-course-grid-select">
                        <p>SHORT BY</p>
                        <SelectFilterSortBy />
                    </div>
                    <SelectFilterCategory />
                    <SelectFilterAuthor />
                    <SelectFilterLanguage />
                </div>
            </div>
        </div>
    )
}
