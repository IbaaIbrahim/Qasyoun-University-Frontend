import { CheckSvg } from "@/components/svg";


export default function CourseDetailsLists() {
    return (
        <div className="tp-course-details-3-list">
            <div className="tp-course-details-3-list-item d-flex align-items-center justify-content-between">
                <span>All classes available online</span>
                <span><CheckSvg /></span>
            </div>
            <div className="tp-course-details-3-list-item d-flex align-items-center justify-content-between">
                <span>Hours of classes</span>
                <span className="width">36</span>
            </div>
            <div className="tp-course-details-3-list-item d-flex align-items-center justify-content-between">
                <span>Level</span>
                <span className="width">Beginner</span>
            </div>
            <div className="tp-course-details-3-list-item d-flex align-items-center justify-content-between">
                <span>Certificate after completing</span>
                <span><CheckSvg /></span>
            </div>
            <div className="tp-course-details-3-list-item d-flex align-items-center justify-content-between">
                <span>Duration</span>
                <span><CheckSvg /></span>
            </div>
            <div className="tp-course-details-3-list-item d-flex align-items-center justify-content-between">
                <span>Lifetime access</span>
                <span className="width">8 weeks</span>
            </div>
        </div>
    )
}
