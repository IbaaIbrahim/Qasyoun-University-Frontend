import { UploadTwoSvg } from "@/components/svg";


export default function CourseAttachment() {
    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed tpd-new-course-heading-title" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                    Course Attachments
                </button>
            </h2>
            <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse">
                <div className="accordion-body">
                    <div className="tpd-new-course-instructor">
                        <span className="upload-btn">
                            <input id="tpd-new-course-file" type="file" accept="image/png, image/jpeg" />
                            <label htmlFor="tpd-new-course-file"><span><UploadTwoSvg /></span> Upload Attachments</label>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
