'use client';
import { blog_stories_data } from "@/data/blog-data";
import usePagination from "@/hooks/use-pagination";
import BlogStoriesItem from "./single/blog-stories-item";
import Pagination from "../ui/pagination";

export default function BlogStoriesArea() {
  const { currentItems, handlePageClick, pageCount } = usePagination(
    blog_stories_data,
    6
  );
  return (
    <section className="tp-blog-stories-area p-relative pb-120">
      <div className="container">
        <div className="row">
          {currentItems.map((blog) => (
            <div key={blog.id} className="col-lg-4 col-md-6">
              <BlogStoriesItem blog={blog} />
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="tp-event-inner-pagination">
              <div className="tp-dashboard-pagination">
                <div className="tp-pagination">
                  <Pagination
                    handlePageClick={handlePageClick}
                    pageCount={pageCount}
                    isCenter={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
