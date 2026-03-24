import { Metadata } from "next";
import CreateNewCourseArea from "./_components/create-new-course-area";

export const metadata: Metadata = {
   title: "Create New Course - Acadia",
}

export default function CreateNewCoursePage() {
   return (
      <main className="tp-dashboard-body-bg">

         {/* create new course area start */}
         <CreateNewCourseArea/>
         {/* create new course area end */}

      </main>
   )
}
