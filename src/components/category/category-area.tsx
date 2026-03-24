import Image from "next/image";
import category_data from "@/data/category-data";
import shape_line from "@/assets/img/shape/bottom-line/line-2-category.svg";
import category_shape from "@/assets/img/shape/category-2-shape-1.png";
import Link from "next/link";

export default function CategoryArea() {
  return (
    <section className="category-area mb-80 mt-95">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div
              className="tp-section mb-40 text-center wow fadeInUp"
              data-wow-delay=".4s"
            >
              <h5 className="tp-section-3-subtitle">Top Categories</h5>
              <h3 className="tp-section-3-title">
                Most demanding{" "}
                <span>
                  Categories
                  <Image
                    className="tp-underline-shape-5 wow bounceIn"
                    data-wow-duration="1.5s"
                    data-wow-delay=".4s"
                    src={shape_line}
                    alt="shape"
                  />
                </span>
                .
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          {category_data.map((item) => (
            <div key={item.id} className="col-lg-3 col-md-4 col-sm-6">
              <Link
                href="/course-categories"
                className="tp-category-item mb-25 wow fadeInUp"
                data-wow-delay={`.${item.id}s`}
              >
                <div className="tp-category-icon">
                  <span className={item.color}>
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={25}
                      height={25}
                    />
                  </span>
                </div>
                <div className="tp-category-content">
                  <h4 className="tp-category-title">{item.title}</h4>
                  <span>{item.description}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div
              className="tp-category-banner d-flex align-items-center justify-content-between tp-category-banner-bg mt-35"
              data-background="assets/img/bg/category-bg.jpg"
              style={{ backgroundImage: `url(/assets/img/bg/category-bg.jpg)` }}
            >
              <div className="tp-category-banner-content d-flex align-items-center">
                <div className="tp-category-banner-shape">
                  <Image src={category_shape} alt="category_shape" />
                </div>
                <div className="tp-category-banner-text">
                  <span>Let Us Help</span>
                  <h4 className="tp-category-banner-title">
                    Finding Your Right Courses
                  </h4>
                </div>
              </div>
              <div className="tp-category-banner-btn">
                <Link className="tp-btn-2" href="/contact">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
