'use client';

import NiceSelect from "@/components/ui/nice-select";

export default function CourseIntroVideo() {
    function handleCourseFilter(item: { value: string, label: string }) {
        console.log(item);
    }
    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed tpd-new-course-heading-title" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    Course Intro Video
                </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                <div className="accordion-body">
                    <div className="tpd-new-course-wrapper">
                        <div className="tpd-new-course-categories">
                            <div className="tpd-input">
                                <label>Course Intro Video</label>
                                <div className="tpd-select">
                                    <NiceSelect
                                        options={[
                                            { value: "", label: "All Courses" },
                                            { value: "latest", label: "New Courses 2024" },
                                            { value: "web-d", label: "Web Design System in Figma" },
                                            { value: "interior", label: "Interior design concepts Masterclass" },
                                            { value: "graphic", label: "Graphic Design Masterclass" },
                                            { value: "bootstrap", label: "Bootstrap 5 From Scratch" },
                                        ]}
                                        defaultCurrent={0}
                                        onChange={handleCourseFilter}
                                        name="courseSort"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
