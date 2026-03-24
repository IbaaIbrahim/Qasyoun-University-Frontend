import { blog_stories_data } from "@/data/blog-data";
import BlogStoriesItem from "../single/blog-stories-item";

const related_blogs = [...blog_stories_data].slice(0, 3);

export default function BlogDetailsRelatedBlogs() {
  return (
    <section className="tp-postbox-details-bottom p-relative pt-90 pb-60">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="tp-postbox-details-bottom-title">
              You may also like
            </h3>
          </div>
          {related_blogs.map((blog) => (
            <div key={blog.id} className="col-lg-4 col-md-6">
              <BlogStoriesItem blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
