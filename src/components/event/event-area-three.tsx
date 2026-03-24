import Image from "next/image";
import { high_school_events } from "@/data/event-data";
import location_svg from '@/assets/img/icon/location.svg';
import people_shape from '@/assets/img/event/event-4-shape-1.png';
import Link from "next/link";


export default function EventAreaThree() {
   return (
      <section className="event-area tp-event-4 grey-bg pt-115 pb-90">
         <div className="container">
            <div className="row align-items-end">
               <div className="col-lg-6">
                  <div className="tp-event-4-section mb-60">
                     <h5 className="tp-section-subtitle">Events</h5>
                     <h3 className="tp-section-4-title">Upcoming <span> Events
                        <svg xmlns="http://www.w3.org/2000/svg" width="130" height="10" viewBox="0 0 130 10" fill="none">
                           <path fillRule="evenodd" clipRule="evenodd" d="M125.062 8.93792C70.1883 -2.76192 22.1358 4.10077 5.29024 8.85108C3.83077 9.26264 1.75893 9.15211 0.66266 8.6042C-0.433612 8.0563 -0.139185 7.2785 1.32028 6.86694C19.892 1.62988 70.7793 -5.48976 128.327 6.7801C129.914 7.11852 130.47 7.8759 129.568 8.47177C128.667 9.06763 126.649 9.27634 125.062 8.93792Z" fill="#161613" />
                        </svg>
                     </span></h3>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="tp-event-4-all-btn text-lg-end mb-70">
                     <Link className="tp-btn-3" href="/event">See More Events</Link>
                  </div>
               </div>
            </div>
            <div className="row">
               {high_school_events.map((item, i) => (
                  <div key={item.id} className="col-lg-4 col-md-6">
                     <div className="tp-event-4-item mb-30 wow fadeInUp" data-wow-delay={`.${i+1}s`}>
                        <div className="tp-event-4-thumb-wrap text-center">
                           <div className="tp-event-4-thumb fix">
                              <Image src={item.image} alt={item.title} width={300} height={200} style={{height:'auto'}} />
                           </div>
                        </div>
                        <div className="tp-event-4-box">
                           <div className="tp-event-4-content">
                              <p>{`${item.date.day} ${item.date.month}, ${item.date.year}`}</p>
                              <h4 className="tp-event-4-title">
                                 <Link href={`/event-details/${item.id}`}>{item.title}</Link>
                              </h4>
                              <span>
                                 <Image src={location_svg} alt="location" /> {item.location}
                              </span>
                           </div>
                           <div className="tp-event-4-info d-flex align-items-center justify-content-between">
                              <div className="tp-event-4-people">
                                 <Image src={people_shape} alt="people-shape" />
                              </div>
                              <div className="tp-event-4-btn">
                                 <Link href={`/event-details/${item.id}`}>Get Ticket</Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}
