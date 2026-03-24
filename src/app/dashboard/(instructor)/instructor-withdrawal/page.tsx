import Image from "next/image";
import { Metadata } from "next";
import DashboardBanner from "@/components/dashboard/dashboard-banner";
import DashboardContentWrapper from "@/components/dashboard/dashboard-content-wrapper";
import { InfoSvg } from "@/components/svg";
import announce_icon from '@/assets/img/dashboard/icon/announcement-icon.svg';
import no_data_bg from '@/assets/img/dashboard/bg/withdrawal-bg.png';

export const metadata: Metadata = {
   title: "Instructor Withdrawal - Acadia",
}

export default function InstructorWithdrawalPage() {
   return (
      <main className="tp-dashboard-body-bg">

         {/* dashboard banner area start */}
         <DashboardBanner />
         {/* dashboard banner area end */}

         {/* dashboard content area start */}
         <DashboardContentWrapper>
            <section className="tpd-order-area">
               <div className="row">
                  <div className="col-lg-6">
                     <div className="tp-dashboard-section">
                        <h2 className="tp-dashboard-title">Withdrawal</h2>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-12">
                     <div className="tpd-withdraw-wrap mb-85">
                        <div className="tpd-announcement tpd-common-shadow d-flex align-items-center justify-content-between mb-25">
                           <div className="tpd-announcement-info d-flex align-items-center">
                              <div className="tpd-announcement-icon">
                                 <span><Image src={announce_icon} alt="announcement-icon" /></span>
                              </div>
                              <div className="tpd-announcement-notification">
                                 <span>Current Balance is $0.00</span>
                                 <h4 className="tpd-withdraw-title">You have <span>$0.00</span> and this is insufficient balance to withdrawe</h4>
                              </div>
                           </div>
                        </div>
                        <div className="tpd-withdraw-notification">
                           <p>
                              <span>
                                 <InfoSvg />
                              </span>
                              The preferred payment method is selected as E-Check. You can change your <a href="#"> Withdraw Preference</a></p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-12">
                     <div className="tpd-withdraw-bg text-center">
                        <Image src={no_data_bg} alt="no-data-bg" style={{height:'auto'}} />
                        <p>No Data Available in this Section</p>
                     </div>
                  </div>
               </div>
            </section>
         </DashboardContentWrapper>
         {/* dashboard content area end */}

      </main>
   )
}
