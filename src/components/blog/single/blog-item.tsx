import Image from "next/image";
import { AuthorSvg, ClockSvg, NextArrow } from "@/components/svg";
import { IBlogDT } from "@/types/blog-d-t";
import Link from "next/link";

// type
type IProps = {
  blog: IBlogDT;
};

export default function BlogItem({ blog }: IProps) {
  return (
    <div
      className="tp-blog-item text-center mb-40 wow fadeInLeft"
      data-wow-delay=".4s"
    >
      <div className="tp-blog-thumb fix">
        <Link href={`/blog-details/${blog.id}`}>
          <Image
            src={blog.img}
            alt="blog-thumb"
            width={559}
            height={350}
            style={{ height: "auto" }}
          />
        </Link>
      </div>
      <div className="tp-blog-content">
        <span className="tp-blog-tag">{blog.tag}</span>
        <h4 className="tp-blog-title">
          <Link href={`/blog-details/${blog.id}`}>{blog.title}</Link>
        </h4>
        <div className="tp-blog-meta">
          <span>
            <span>
              <AuthorSvg />
              {blog.author}
            </span>
          </span>
          <span>
            <span>
              <ClockSvg />
              {blog.date}
            </span>
          </span>
        </div>
        <div className="tp-blog-btn">
          <Link href={`/blog-details/${blog.id}`}>
            <span className="tp-blog-btn-bg blog-btn-bg"></span>
            <span className="tp-blog-btn-border blog-btn-border"></span>
            <span className="icon">
              <NextArrow />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
