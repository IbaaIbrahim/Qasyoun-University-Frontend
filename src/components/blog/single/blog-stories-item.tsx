import Image from "next/image";
import { IBlogDT } from "@/types/blog-d-t";
import Link from "next/link";

type IProps = {
  blog: IBlogDT;
};
export default function BlogStoriesItem({ blog }: IProps) {
  return (
    <div className="tp-blog-stories-item p-relative mb-50">
      <div className="tp-blog-stories-thumb">
        <Link href={`/blog-details/${blog.id}`}>
          <Image src={blog.img} width={384} height={220} alt={blog.title} />
        </Link>
      </div>
      <div className="tp-blog-stories-content">
        <div className="tp-blog-stories-tag-wrap d-flex">
          <a href="#">{blog.tag}</a>
          <span>{blog.date}</span>
        </div>
        <h4 className="tp-blog-stories-title">
          <Link href={`/blog-details/${blog.id}`}>{blog.title}</Link>
        </h4>
        <div className="tp-blog-stories-user-box d-flex align-items-center">
          {blog.author_img && (
            <div className="tp-blog-stories-user-thumb">
              <Image
                src={blog.author_img}
                alt={blog.author}
                width={44}
                height={44}
              />
            </div>
          )}
          <span>{blog.author}</span>
        </div>
      </div>
    </div>
  );
}
