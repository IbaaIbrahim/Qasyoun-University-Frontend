import { CategoryTwoSvg } from "@/components/svg";
import Link from "next/link";


const categories = [
   { title: "Development", courseCount: 15, colorClass: "", delay: ".3s" },
   { title: "UI/UX Design", courseCount: 10, colorClass: "color-1", delay: ".5s" },
   { title: "Business", courseCount: 9, colorClass: "color-2", delay: ".7s" },
   { title: "Lifestyle", courseCount: 12, colorClass: "color-3", delay: ".9s" },
   { title: "Photography", courseCount: 17, colorClass: "color-4", delay: ".3s" },
   { title: "Music", courseCount: 20, colorClass: "color-5", delay: ".5s" },
   { title: "Business", courseCount: 25, colorClass: "color-6", delay: ".7s" },
   { title: "Lifestyle", courseCount: 30, colorClass: "color-7", delay: ".9s" },
   { title: "Accounting", courseCount: 22, colorClass: "color-8", delay: ".3s" },
   { title: "Marketing", courseCount: 18, colorClass: "color-9", delay: ".5s" },
   { title: "Architecture", courseCount: 29, colorClass: "color-10", delay: ".7s" },
   { title: "Art & Design", courseCount: 26, colorClass: "color-11", delay: ".9s" }
];


export default function CategoryArea() {
   return (
      <section className="tp-course-categories-area pt-100 pb-75">
         <div className="container">
            <div className="row">
               {categories.map((category, index) => (
                  <div key={index} className="col-lg-3 col-sm-6">
                     <Link
                        href="/course-with-filter"
                        className="tp-course-categories-item p-relative mb-25 wow fadeInUp"
                        data-wow-delay={category.delay}
                     >
                        <div className="tp-course-categories-icon">
                           <span className={category.colorClass}>
                              <CategoryTwoSvg />
                           </span>
                        </div>
                        <h3 className="tp-course-categories-title">{category.title}</h3>
                        <p>{category.courseCount} Courses</p>
                     </Link>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}
