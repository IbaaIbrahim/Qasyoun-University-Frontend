import Image from "next/image";
import instructor_thumb from "@/assets/img/instructor/instructor-thumb-contact.png";
import InstructorApplyForm from "@/components/form/instructor-apply-form";


export default function InstructorApplyArea() {
  return (
    <section className="tp-instructor-apply-area pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tp-instructor-apply-box wow fadeInUp" data-wow-delay=".3s">
              <div className="row">
                <div className="col-lg-4">
                  <div className="tp-instructor-apply-thumb">
                    <Image src={instructor_thumb} alt="instructor-thumb" style={{ height: "auto" }} />
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="tp-instructor-apply-from">
                    <InstructorApplyForm/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
