import FilterCategory from "@/components/course/filter/filter-category";
import FilterInstructor from "@/components/course/filter/filter-instructor";
import FilterLanguage from "@/components/course/filter/filter-language";
import FilterPrice from "@/components/course/filter/filter-price";
import FilterSortBy from "@/components/course/filter/filter-sort-by";


export default function CourseFilterDropdownArea() {
    return (
        <div className="row row-cols-lg-5 row-cols-md-3 row-cols-sm-2 row-cols-1">
            <div className="col">
                <h4 className="tp-filter-widget-title">Sort by</h4>
                <FilterSortBy />
            </div>

            <div className="col">
                <h4 className="tp-filter-widget-title">All categories</h4>
                <FilterCategory />
            </div>

            <div className="col">
                <h4 className="tp-filter-widget-title">Instructors</h4>
                <FilterInstructor />
            </div>

            <div className="col">
                <h4 className="tp-filter-widget-title">Price</h4>
                <FilterPrice />
            </div>

            <div className="col">
                <h4 className="tp-filter-widget-title">Language</h4>
                <FilterLanguage />
            </div>
        </div>
    )
}
