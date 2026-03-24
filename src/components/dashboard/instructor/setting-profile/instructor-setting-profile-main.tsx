'use client';
import { useState } from "react";
import InstructorSettingContentWrapper from "./instructor-setting-content-wrapper";
import InstructorSettingProfilePage from "./instructor-setting-profile-area";
import InstructorSettingPassword from "./instructor-setting-password";
import InstructorSettingProfileWithdraw from "./instructor-setting-profile-withdraw";
import InstructorSettingProfileSocials from "./instructor-setting-profile-socials";

const tabs = ['Profile', 'Password', 'Withdraw', 'Social Profile'];

type IProps = {
   studentProfile?: boolean;
}
export default function InstructorSettingProfileMainArea({studentProfile=false}: IProps) {
   const [activeTab, setActiveTab] = useState(tabs[0]);
   return (
      <>
         <div className="row">
            <div className="col-12">
               <div className="tp-dashboard-tab mb-25">
                  <h2 className="tp-dashboard-tab-title">Settings</h2>
                  <div className="tp-dashboard-tab-list">
                     <ul>
                        {tabs.map((tab) => (
                           <li
                              key={tab}
                              onClick={() => setActiveTab(tab)}
                           >
                              <a className={`${tab === activeTab ? 'active' : ''} pointer`}>
                                 {tab}
                              </a>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>
         </div>

         {/* instructor setting content */}
         <InstructorSettingContentWrapper>
            {activeTab === 'Profile' && <InstructorSettingProfilePage studentProfile={studentProfile} />}
            {activeTab === 'Password' && <InstructorSettingPassword />}
            {activeTab === 'Withdraw' && <InstructorSettingProfileWithdraw />}
            {activeTab === 'Social Profile' && <InstructorSettingProfileSocials/>}
         </InstructorSettingContentWrapper>
         {/* instructor setting content */}
      </>
   )
}
