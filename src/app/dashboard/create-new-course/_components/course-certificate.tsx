import Image from "next/image";
import React from "react";

export default function CourseCertificate() {
   const certificateData = [
      { id: 1, imgSrc: "/assets/img/dashboard/cartificate/cartificate-1.png"},
      { id: 2, imgSrc: "/assets/img/dashboard/cartificate/cartificate-2.png"},
      { id: 3, imgSrc: "/assets/img/dashboard/cartificate/cartificate-3.png"},
      { id: 4, imgSrc: "/assets/img/dashboard/cartificate/cartificate-4.png"},
      { id: 5, imgSrc: "/assets/img/dashboard/cartificate/cartificate-5.png"}
   ];

   return (
      <div className="accordion-item">
         <h2 className="accordion-header">
            <button
               className="accordion-button collapsed tpd-new-course-heading-title"
               type="button"
               data-bs-toggle="collapse"
               data-bs-target="#panelsStayOpen-collapseEight"
               aria-expanded="false"
               aria-controls="panelsStayOpen-collapseEight"
            >
               Certificate Template
            </button>
         </h2>
         <div id="panelsStayOpen-collapseEight" className="accordion-collapse collapse">
            <div className="accordion-body">
               <div className="tpd-new-course-instructor">
                  <div className="row">
                     {certificateData.map((certificate) => (
                        <div key={certificate.id} className="col-lg-4 col-sm-6">
                           <div className="tpd-new-course-cartificate mb-30">
                              <Image src={certificate.imgSrc} alt={`certificate-${certificate.id}`} width={215} height={276} style={{height:'auto'}} />
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
