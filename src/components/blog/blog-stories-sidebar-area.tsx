'use client';
import { blog_stories_data } from "@/data/blog-data";
import usePagination from "@/hooks/use-pagination";
import BlogSidebarArea from "./sidebar/blog-sidebar-area";
import Pagination from "../ui/pagination";
import BlogStoriesItem from "./single/blog-stories-item";

export default function BlogStoriesSidebarArea() {
  const { currentItems, handlePageClick, pageCount } = usePagination(
    blog_stories_data,
    6
  );
  return (
    <section className="tp-blog-stories-area p-relative pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              {currentItems.map((blog) => (
                <div key={blog.id} className="col-lg-6 col-md-6">
                  <BlogStoriesItem blog={blog} />
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-4">
            {/* blog sidebar area */}
            <BlogSidebarArea />
            {/* blog sidebar area */}
          </div>
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
