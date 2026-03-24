import Image from "next/image";
import { LinkSvg, QuoteSvg } from "@/components/svg";
import { IBlogDT } from "@/types/blog-d-t";
import blog_shape_1 from "@/assets/img/blog/blog-standard/blog-standard-shape.png";
import blog_shape_2 from "@/assets/img/blog/blog-standard/blog-standard-shape-2.png";

type IProps = {
  blog: IBlogDT;
};

export function BlogQuoteItemOne({ blog }: IProps) {
  return (
    <div className="tp-postbox-quote mb-40">
      <div className="tp-postbox-quote-box p-relative d-flex">
        <div className="tp-postbox-quote-icon">
          <span>
            <QuoteSvg />
          </span>
        </div>
        <div className="tp-postbox-quote-content">
          <h3 className="tp-postbox-quote-title">{blog.desc}</h3>
          <div className="tp-postbox-quote-sub">
            <span>{blog.author}</span>
            {blog.author_location && (
              <span className="p">{blog.author_location}</span>
            )}
          </div>
        </div>
        <div className="tp-postbox-quote-shape">
          <Image src={blog_shape_1} alt="blog-shape" />
        </div>
      </div>
    </div>
  );
}

export function BlogQuoteItemTwo({ blog }: IProps) {
  return (
    <div key={blog.id} className="tp-postbox-quote-2 mb-40">
      <div className="tp-postbox-quote-2-box p-relative d-flex align-items-center">
        <div className="tp-postbox-quote-2-icon">
          <span>
            <LinkSvg />
          </span>
        </div>
        <h3 className="tp-postbox-quote-2-title">{blog.desc}</h3>
        <div className="tp-postbox-quote-2-shape">
          <Image src={blog_shape_2} alt="blog-shape" />
        </div>
      </div>
    </div>
  );
}
