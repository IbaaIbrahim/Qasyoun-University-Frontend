import { StarTwo } from "@/components/svg";


export default function CourseDetailsReviewForm() {
  return (
    <form>
      <div className="tp-course-details-2-comment-star">
        <span><StarTwo /></span>
        <span><StarTwo /></span>
        <span><StarTwo /></span>
        <span><StarTwo /></span>
        <span><StarTwo clr="#BFC5CA" /></span>
      </div>

      <div className="tp-contact-input-form">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-contact-input p-relative">
              <label>Review Title</label>
              <input type="text" />
            </div>
          </div>
          <div className="col-xl-12">
            <div className="tp-contact-input p-relative">
              <label>Review Content</label>
              <textarea></textarea>
            </div>
          </div>
          <div className="tp-contact-btn">
            <button className="tp-btn-inner">Submit Review</button>
          </div>
        </div>
      </div>
    </form>
  )
}
