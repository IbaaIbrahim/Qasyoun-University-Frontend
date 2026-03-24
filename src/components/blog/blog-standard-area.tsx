'use client';
import usePagination from "@/hooks/use-pagination";
import BlogSidebarArea from "./sidebar/blog-sidebar-area";
import { blog_standard_data } from "@/data/blog-data";
import Pagination from "../ui/pagination";
import { BlogQuoteItemOne, BlogQuoteItemTwo } from "./single/blog-quote-item";
import BlogStandardItem from "./single/blog-standard-item";

export default function BlogStandardArea() {
  const { currentItems, handlePageClick, pageCount } = usePagination(
    blog_standard_data,
    5
  );
  return (
    <section className="tp-blog-standard-area p-relative pt-100 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="tp-postbox-wrapper">
              {currentItems.map((blog) =>
                blog.postboxQuote1 ? (
                  <BlogQuoteItemOne key={blog.id} blog={blog} />
                ) : blog.postboxQuote2 ? (
                  <BlogQuoteItemTwo key={blog.id} blog={blog} />
                ) : (
                  <BlogStandardItem key={blog.id} blog={blog} />
                )
              )}
            </div>
            <div className="tp-event-inner-pagination tp-postbox-item-pagination">
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
          <div className="col-lg-4">
            {/* blog sidebar area */}
            <BlogSidebarArea />
            {/* blog sidebar area */}
          </div>
        </div>
      </div>
    </section>
  );
}
