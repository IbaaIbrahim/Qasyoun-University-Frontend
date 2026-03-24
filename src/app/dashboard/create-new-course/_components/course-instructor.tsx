'use client';
import Image from "next/image";
import { UserSvgSix } from "@/components/svg";
import useGlobalContext from "@/hooks/use-global-context";
import profile_img from '@/assets/img/dashboard/profile/reviews-profile-4.png';


export default function CourseInstructor() {
    const { handleAnnounceAddEditModal } = useGlobalContext();
    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed tpd-new-course-heading-title" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                    Instructors
                </button>
            </h2>
            <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse">
                <div className="accordion-body">
                    <div className="tpd-new-course-instructor">
                        <div className="tpd-new-course-instructor-user d-flex align-items-center">
                            <Image src={profile_img} alt="profile-img" style={{height:'auto'}} />
                            <span>Indigo Violet</span>
                        </div>
                        {/* modal-announcement-btn */}
                        <button type="button" className="btn btn-primary" onClick={() => handleAnnounceAddEditModal()} data-bs-whatever="@fat"><span>
                            <UserSvgSix/></span> Add Instructor
                        </button>
                        {/* modal-announcement-btn-end */}
                    </div>
                </div>
            </div>
        </div>
    )
}
