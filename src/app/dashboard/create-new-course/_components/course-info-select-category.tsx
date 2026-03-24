'use client';
import dynamic from 'next/dynamic';

// Dynamically import react-select with SSR disabled
const Select = dynamic(() => import("react-select"), { ssr: false });

const options = [
    { value: "en", label: "The Science Behind Drawing" },
    { value: "fr", label: "Art" },
    { value: "de", label: "Music" },
    { value: "pt", label: "Photography" }
];

export default function CourseInfoSelectCategory() {
    return (
        <Select
            placeholder="Search Course Category. ex. Design, Development, Business"
            className="tpd-select2"
            options={options}
            isMulti
        />
    );
}
