'use client';
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { MultiValue } from "react-select";

// Dynamically import the react-select component with SSR disabled
const Select = dynamic(() => import("react-select"), { ssr: false });

type OptionType = {
  value: string;
  label: string;
};

export default function CourseAdditionalInfo() {
  // Defining initial state for additionalData
  const [additionalData, setAdditionalData] = useState({
    whatYouWillLearn: "",
    targetedAudience: "",
    courseDurationHours: "",
    courseDurationMinutes: "",
    materialsIncluded: "",
    requirements: "",
    courseTags: [] as MultiValue<OptionType>, // Updated type here
  });

  // Course tag options for react-select
  const tagOptions: OptionType[] = [
    { value: "en", label: "The Science Behind Drawing" },
    { value: "fr", label: "Art" },
    { value: "de", label: "Music" },
    { value: "pt", label: "Photography" }
  ];

  // Handle input change for text areas and inputs
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setAdditionalData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

// Handle change for react-select
const handleSelectChange = (newValue: unknown) => {
  const selectedOptions = newValue as MultiValue<OptionType>;
  setAdditionalData((prevState) => ({
    ...prevState,
    courseTags: selectedOptions || []
  }));
};


  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed tpd-new-course-heading-title"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseSix"
          aria-expanded="false"
          aria-controls="panelsStayOpen-collapseSix"
        >
          Additional Data
        </button>
      </h2>
      <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse">
        <div className="accordion-body">
          <div className="tpd-new-course-box-1">
            <div className="tpd-input">
              <label>What Will I Learn?</label>
              <textarea
                name="whatYouWillLearn"
                value={additionalData.whatYouWillLearn}
                onChange={handleChange}
                placeholder="Write here the course benefits (One per line)"
              />
            </div>
            <div className="tpd-input">
              <label>Targeted Audience</label>
              <textarea
                name="targetedAudience"
                value={additionalData.targetedAudience}
                onChange={handleChange}
                placeholder="Specify the target audience that will benefit the most from the course."
              />
            </div>
            <div className="tpd-new-course-box-duration d-flex align-items-end">
              <div className="tpd-input mr-20">
                <label className="font">Total Course Duration</label>
                <input
                  type="number"
                  name="courseDurationHours"
                  value={additionalData.courseDurationHours}
                  onChange={handleChange}
                  placeholder="00"
                />
                <p>Hour</p>
              </div>
              <div className="tpd-input">
                <input
                  type="number"
                  name="courseDurationMinutes"
                  value={additionalData.courseDurationMinutes}
                  onChange={handleChange}
                  placeholder="00"
                />
                <p>Minute</p>
              </div>
            </div>
            <div className="tpd-input height-auto">
              <label>Materials Included</label>
              <textarea
                name="materialsIncluded"
                value={additionalData.materialsIncluded}
                onChange={handleChange}
                placeholder="A list of assets you will be providing for the students in this course (One per line)"
              />
            </div>
            <div className="tpd-input">
              <label>Requirements/Instructions</label>
              <textarea
                name="requirements"
                value={additionalData.requirements}
                onChange={handleChange}
                placeholder="A list of assets you will be providing for the students in this course (One per line)"
              />
            </div>
            <div className="tpd-new-course-select2">
              <div className="tpd-input">
                <label>Course Tag</label>
                <Select
                  isMulti
                  name="courseTags"
                  options={tagOptions}
                  value={additionalData.courseTags}
                  onChange={handleSelectChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
