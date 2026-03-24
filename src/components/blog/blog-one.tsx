import { ShapeLineTwo } from "../svg";
import BlogItem from "./single/blog-item";
import { university_blogs } from "@/data/blog-data";

export default function BlogOne() {
  return (
    <section className="blog-area grey-bg pt-110 pb-95">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div
              className="tp-event-section text-center mb-60 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="tp-section">
                <h5 className="tp-section-subtitle">BLOG UPDATES</h5>
                <h3 className="tp-section-2-title">
                  Lates News &
                  <span>
                    Articles.
                    <ShapeLineTwo />
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {university_blogs.map((blog) => (
            <div key={blog.id} className="col-lg-6">
              <BlogItem blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
