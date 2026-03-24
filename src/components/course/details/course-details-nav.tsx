'use client';
import useScrollSpy from "@/hooks/use-scroll-spy";


export default function CourseDetailsNav() {
    const sections = ["info", "curriculum", "instructors", "reviews"];
    const activeSection = useScrollSpy(sections);
    return (
        <nav>
            <ul id="course_details2_nav">
                <li className={activeSection === "info" ? "current" : ""}>
                    <a href="#info">Course Info</a>
                </li>
                <li className={activeSection === "curriculum" ? "current" : ""}>
                    <a href="#curriculum">Curriculum</a>
                </li>
                <li className={activeSection === "instructors" ? "current" : ""}>
                    <a href="#instructors">Instructors</a>
                </li>
                <li className={activeSection === "reviews" ? "current" : ""}>
                    <a href="#reviews">Reviews</a>
                </li>
            </ul>
        </nav>
    )
}
