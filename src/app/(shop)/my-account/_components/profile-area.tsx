import ProfileInfoUpdateForm from "@/components/form/profile-info-update-form";
import ProfileMainDashboard from "./profile-main-dashboard";
import ChangePasswordForm from "@/components/form/change-password-form";
import ProfileAddress from "./profile-address";
import MyOrders from "./my-orders";
import ProfileNotification from "./profile-notification";
import ProfileNavTabs from "./profile-navs";



export default function ProfileArea() {
  return (
    <section className="profile__area pt-120 pb-120">
    <div className="container">
       <div className="profile__inner p-relative">
          <div className="row">
             <div className="col-xxl-4 col-lg-4">
                <div className="profile__tab mr-40">
                   {/* nav tabs for profile area */}
                   <ProfileNavTabs/>
                   {/* nav tabs for profile area */}
                </div>
             </div>
             <div className="col-xxl-8 col-lg-8">
                <div className="profile__tab-content">
                   <div className="tab-content" id="profile-tabContent">

                      <div className="tab-pane fade show active" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                         {/* Profile main dashboard */}
                         <ProfileMainDashboard/>
                         {/* Profile main dashboard */}
                      </div>

                      <div className="tab-pane fade" id="nav-information" role="tabpanel" aria-labelledby="nav-information-tab">
                         <div className="profile__info">
                            <h3 className="profile__info-title">Personal Details</h3>
                            <div className="profile__info-content">
                               {/* profile info update form  */}
                               <ProfileInfoUpdateForm/>
                               {/* profile info update form  */}
                            </div>
                         </div>
                      </div>

                      <div className="tab-pane fade" id="nav-password" role="tabpanel" aria-labelledby="nav-password-tab">
                         <div className="profile__password">
                            {/* change password form */}
                            <ChangePasswordForm/>
                            {/* change password form */}
                         </div>
                      </div>

                      <div className="tab-pane fade" id="nav-address" role="tabpanel" aria-labelledby="nav-address-tab">
                         <ProfileAddress/>
                      </div>

                      <div className="tab-pane fade" id="nav-order" role="tabpanel" aria-labelledby="nav-order-tab">
                         {/* my orders area */}
                         <MyOrders/>
                         {/* my orders area */}
                      </div>

                      <div className="tab-pane fade" id="nav-notification" role="tabpanel" aria-labelledby="nav-notification-tab">
                         {/* notification area */}
                         <ProfileNotification/>
                         {/* notification area */}
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
