import Image from "next/image";
import user_img from '@/assets/img/course/details/user.png';
import { Star, UserSvgTwo, VideoPlayerThreeSvg } from "@/components/svg";
import SocialLinks from "@/components/social/social-links";


export default function CourseDetailsInstructor() {
    return (
        <div className="tp-course-details-2-instructor d-flex">
            <div className="tp-course-details-2-instructor-thumb mr-40">
                <Image src={user_img} alt="user-img" />
            </div>
            <div className="tp-course-details-2-instructor-content">
                <h5>Undon Xie</h5>
                <span className="pre">President of Sales</span>
                <div className="tp-course-details-2-instructor-sub d-flex">
                    <span><Star /> 4.4 Rating</span>
                    <span><VideoPlayerThreeSvg /> 58 Courses</span>
                    <span><UserSvgTwo clr="#6C7275" /> 45 Student</span>
                </div>
                <div className="tp-course-details-2-instructor-text">
                    <p>I am also the founder of a large local design organization, Salt Lake <br />
                        Designers, where I and other local influencers help cultivate the talents <br />
                        of up and coming UX designers through workshops and panel discussions.</p>
                    <p>Undon Xie is a brilliant educator, whose life was spent for computer <br />
                        science and love of nature.</p>
                </div>
                <div className="tp-course-details-2-instructor-social">
                    <SocialLinks/>
                </div>
            </div>
        </div>
    )
}
