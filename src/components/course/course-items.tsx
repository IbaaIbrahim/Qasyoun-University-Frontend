"use client";

import useCourse from "@/hooks/use-course";
import CourseItem from "./single/course-item";

export default function CourseItems() {
  const { filterCourse } = useCourse();
  return (
    <>
      {filterCourse.map((item) => (
        <div key={item.id} className="col-lg-4 col-md-6">
          <CourseItem course={item} />
        </div>
      ))}
    </>
  );
}
