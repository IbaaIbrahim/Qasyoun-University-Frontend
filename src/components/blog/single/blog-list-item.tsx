import Link from "next/link";
import Image from "next/image";
import { RightArrowSeven } from "@/components/svg";
import { IBlogDT } from "@/types/blog-d-t";

type IProps = {
  blog: IBlogDT;
};

export default function BlogListItem({ blog }: IProps) {
  return (
    <div className="tp-postbox-item p-relative mb-40">
      <div className="tp-postbox-item-list-box d-flex align-items-center">
        <div className="tp-postbox-item-list-thumb">
          <Link href={`/blog-details/${blog.id}`}>
            <Image
              src={blog.img}
              alt={blog.title}
              width={270}
              height={340}
              style={{ height: "auto" }}
            />
          </Link>
        </div>

        <div className="tp-postbox-content">
          <div className="tp-blog-stories-tag-wrap d-flex">
            <a href="#">{blog.tag}</a>
            <span>{blog.date}</span>
          </div>
          <h3 className="tp-postbox-item-list-title">
            <Link href={`/blog-details/${blog.id}`}>{blog.title}</Link>
          </h3>
          <p>{blog.desc} […]</p>
          <div className="tp-postbox-btn">
            <Link href={`/blog-details/${blog.id}`}>
              Read More{" "}
              <span>
                <RightArrowSeven />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
