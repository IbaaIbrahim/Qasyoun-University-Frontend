import Image from "next/image";
import { RightArrow } from "../svg";
import Link from "next/link";

const category_data = [
  {
    id: 1,
    image: "/assets/img/category/category-5-thumb-1.jpg",
    title: "Strength Training",
  },
  {
    id: 2,
    image: "/assets/img/category/category-5-thumb-2.jpg",
    title: "Functional Fitness",
  },
  {
    id: 3,
    image: "/assets/img/category/category-5-thumb-3.jpg",
    title: "Powerful and Strong",
  },
  {
    id: 4,
    image: "/assets/img/category/category-5-thumb-4.jpg",
    title: "Youth & Teen Fitness",
  },
  {
    id: 5,
    image: "/assets/img/category/category-5-thumb-5.jpg",
    title: "Online Coaching",
  },
  {
    id: 6,
    image: "/assets/img/category/category-5-thumb-6.jpg",
    title: "Core & Flexibility",
  },
  {
    id: 7,
    image: "/assets/img/category/category-5-thumb-7.jpg",
    title: "Mind-Body Balance",
  },
  {
    id: 8,
    image: "/assets/img/category/category-5-thumb-8.jpg",
    title: "Mind-Body Balance",
  },
];

export default function CategoryAreaTwo() {
  return (
    <section className="category-area pb-60">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div className="tp-section text-center mb-65">
              <h5 className="tp-section-5-subtitle mb-10">Unique Categories</h5>
              <h3 className="tp-section-5-title">Browse by Categories</h3>
            </div>
          </div>
        </div>
        <div className="row wow fadeInUp" data-wow-delay=".3s">
          {category_data.map((item) => (
            <div key={item.id} className="col-xl-3 col-lg-4 col-md-6">
              <div className="tp-category-5-item mb-60">
                <div className="tp-category-5-hover"></div>
                <div className="tp-category-5-thumb">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={282}
                    height={200}
                    style={{ height: "auto" }}
                  />
                </div>
                <div className="tp-category-5-content">
                  <h4 className="tp-category-5-title">
                    <Link href="/course-with-filter">
                      {item.title}
                      <span>
                        <RightArrow clr="currentColor" />
                      </span>
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
