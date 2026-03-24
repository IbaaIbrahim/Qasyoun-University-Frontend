import Image from "next/image";
import file_icon from '@/assets/img/dashboard/bg/select-file-icon.png';
import { InfoTwoSvg, PenThreeSvg, SettingTwoSvg } from "@/components/svg";
import CourseInfoSelectCategory from "./course-info-select-category";


export default function CourseInfoArea() {
   return (
      <div className="accordion-item">
         <h2 className="accordion-header">
            <button className="accordion-button tpd-new-course-heading-title" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
               Course Info
            </button>
         </h2>
         <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
            <div className="accordion-body">
               <div className="tpd-new-course-box-1">
                  <div className="tpd-input">
                     <label>Course Title</label>
                     <input type="text" placeholder="New Course" />
                  </div>
                  <div className="tpd-input">
                     <label>Course Slug</label>
                     <input type="text" placeholder="new course" />
                  </div>
                  <p>Permalink: <a href="#">https://demo.themepure.net/acadia/new-course</a></p>
                  <div className="tpd-input about-height">
                     <label>About Course</label>
                     <textarea placeholder="About Course"></textarea>
                  </div>
               </div>
               <div className="tpd-new-course-box-2">
                  <h4 className="tpd-new-course-setting-title">Course Settings</h4>
                  <div className="tp-dashboard-tab-list">
                     <ul>
                        <li>
                           <a className="active" href="#"><span><SettingTwoSvg /></span> General</a>
                        </li>
                        <li>
                           <a href="#"><span><PenThreeSvg /></span> Content Drip</a>
                        </li>
                     </ul>
                  </div>
                  <div className="tpd-input">
                     <label>Maximum Students</label>
                     <input type="number" placeholder="4" />
                     <p><span><InfoTwoSvg /></span>Number of students that can enrol in this course. Set 0 for no limits.</p>
                  </div>
                  <div className="tpd-input">
                     <label>Difficulty Level</label>
                     <input type="text" placeholder="Intermediate" />
                     <p><span><InfoTwoSvg /></span>Course difficulty level</p>
                  </div>
                  <div className="tpd-input">
                     <label>Public Course</label>
                     <div className="switcher">
                        <label htmlFor="toggle-0">
                           <input type="checkbox" id="toggle-0" />
                           <span><small></small></span>
                        </label>
                     </div>
                     <p><span><InfoTwoSvg /></span>Make This Course Public. No enrollment required.</p>
                  </div>
                  <div className="tpd-input">
                     <label>Q&A</label>
                     <div className="switcher">
                        <label htmlFor="toggle-1">
                           <input type="checkbox" id="toggle-1" />
                           <span><small></small></span>
                        </label>
                     </div>
                     <p className="m-0"><span><InfoTwoSvg /></span>Enable Q&A section for your course</p>
                  </div>
               </div>
               <div className="tpd-new-course-box-3">
                  <div className="tpd-new-course-categories">
                     <div className="tpd-new-course-select2">
                        <div className="tpd-input">
                           <label>Choose a Category</label>
                           <CourseInfoSelectCategory/>
                        </div>
                     </div>
                     <div className="tpd-input mt-35">
                        <label className="font">Course Price</label>
                        <div className="tpd-order-filter tpd-redio-style tmy-tab">
                           <ul className="nav nav-tabs" id="myTab" role="tablist">
                              <li className="nav-item p-relative" role="presentation">
                                 <button className="nav-link" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-selected="false" tabIndex={-1}>
                                    <span className="tpd-redio-style-span"></span>
                                    <span>Free</span>
                                 </button>
                              </li>
                              <li className="nav-item p-relative" role="presentation">
                                 <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-selected="false" tabIndex={-1}>
                                    <span className="tpd-redio-style-span"></span>
                                    <span>Paid</span>
                                 </button>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div className="tpd-input-box d-flex">
                        <div className="tpd-input">
                           <label>Regular Price ($)</label>
                           <input type="text" placeholder="Set course price" />
                        </div>
                        <div className="tpd-input">
                           <label>Discounted Price ($)</label>
                           <input type="number" placeholder="20" />
                        </div>
                     </div>
                     <div className="tpd-input course-file">
                        <label>Course Thumbnail</label>
                        <div className="tpd-new-course-file-content text-center" style={{ backgroundImage: "url(/assets/img/dashboard/bg/select-file.png)" }}>
                           <div className="tpd-new-course-file-thumb mb-15">
                              <Image src={file_icon} alt="file-icon" />
                           </div>
                           <span className="upload-btn">
                              <input id="tpd-new-course-file-input" type="file" accept="image/png, image/jpeg" />
                              <label htmlFor="tpd-new-course-file-input">Choose Image to Upload</label>
                           </span>
                           <p>Size: 700x430 pixels</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
