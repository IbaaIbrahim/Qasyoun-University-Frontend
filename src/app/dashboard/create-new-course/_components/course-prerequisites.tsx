'use client';
import dynamic from "next/dynamic";
import React, { useState } from "react";
const Select = dynamic(() => import("react-select"), { ssr: false });
import { MultiValue } from "react-select";

type OptionType = {
    value: string;
    label: string;
};

export default function CoursePrerequisites() {
   // Defining state for selected prerequisite courses
   const [selectedCourses, setSelectedCourses] = useState<OptionType[]>([
      { value: "en", label: "The Science Behind Drawing" },
      { value: "fr", label: "Art" },
   ]);

   // Course options for prerequisites
   const courseOptions = [
      { value: "en", label: "The Science Behind Drawing" },
      { value: "fr", label: "Art" },
      { value: "de", label: "Music" },
      { value: "pt", label: "Photography" }
   ];

   // Handle change for course prerequisites select
   const handleSelectChange = (newValue: unknown) => {
      const selectedOptions = newValue as MultiValue<OptionType>;
      setSelectedCourses([...selectedOptions] as OptionType[]);
   };

   return (
      <div className="accordion-item">
         <h2 className="accordion-header">
            <button
               className="accordion-button collapsed tpd-new-course-heading-title"
               type="button"
               data-bs-toggle="collapse"
               data-bs-target="#panelsStayOpen-collapseSeven"
               aria-expanded="false"
               aria-controls="panelsStayOpen-collapseSeven"
            >
               Course Prerequisites
            </button>
         </h2>
         <div id="panelsStayOpen-collapseSeven" className="accordion-collapse collapse">
            <div className="accordion-body">
               <div className="tpd-new-course-select2">
                  <div className="tpd-input">
                     <label>Select course</label>
                     <Select
                        isMulti
                        name="prerequisiteCourses"
                        options={courseOptions}
                        value={selectedCourses}
                        onChange={handleSelectChange}
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
