import Image from "next/image";
import dashboard_shape from '@/assets/img/dashboard/bg/dashboard-bg-shape-1.jpg';
import dashboard_profile from '@/assets/img/dashboard/profile/dashboard-profile.jpg';

export default function ProfileBannerArea() {
   return (
      <section className="tp-dashboard-banner-wrap">
         <div className="tp-dashboard-banner-shape">
            <Image src={dashboard_shape} alt="shape" />
         </div>
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="tp-dashboard-banner-bg mt-30" style={{ backgroundImage: "url(/assets/img/dashboard/bg/dashboard-bg-1.jpg)" }}>
                     <div className="tp-instructor-wrap d-flex justify-content-between">
                        <div className="tp-instructor-info d-flex">
                           <div className="tp-instructor-avatar">
                              <Image src={dashboard_profile} alt="dashboard-profile" style={{ height: "auto" }} />
                           </div>
                           <div className="tp-instructor-content">
                              <h4 className="tp-instructor-title">Indigo Violet</h4>
                              <div className="tp-instructor-rate d-flex align-items-center">
                                 <span className="profile">20 Courses</span>
                                 <span className="profile">37 Students</span>
                              </div>
                           </div>
                        </div>
                        <div className="tp-profile-social">
                           <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                           <a href="#"><i className="fa-brands fa-twitter"></i></a>
                           <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                           <a href="#"><i className="fa-brands fa-youtube"></i></a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}
