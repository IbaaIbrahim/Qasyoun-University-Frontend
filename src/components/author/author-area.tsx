import Image from "next/image";
import { RightSmArrow } from "../svg";
import Link from "next/link";

const authors = [
  {
    id: 1,
    name: "Leslie Alexander",
    image: "/assets/img/shop/author/shop-author-1.png",
    booksCount: "1,65",
  },
  {
    id: 2,
    name: "Robert Fox",
    image: "/assets/img/shop/author/shop-author-2.png",
    booksCount: "1,78",
  },
  {
    id: 3,
    name: "Darrell Steward",
    image: "/assets/img/shop/author/shop-author-3.png",
    booksCount: "1,98",
  },
  {
    id: 4,
    name: "Dianne Russell",
    image: "/assets/img/shop/author/shop-author-4.png",
    booksCount: "2,50",
  },
];

export default function AuthorArea() {
  return (
    <section className="tp-shop-author-area pb-90">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tp-shop-author-wrap d-flex flex-wrap justify-content-between align-items-center mb-50">
              <div className="tp-shop-author-heading">
                <h4 className="tp-shop-author-title">Top Author</h4>
                <p>Unravel secrets with author’s brilliant plot twists.</p>
              </div>
              <div className="tp-shop-author-btn">
                <Link href="/instructor">
                  All Authors{" "}
                  <span>
                    <RightSmArrow />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {authors.map((a) => (
            <div key={a.id} className="col-lg-3 col-sm-6">
              <div className="tp-shop-author-item text-center mb-30">
                <div className="tp-shop-author-thumb">
                  <Image
                    src={a.image}
                    alt={a.name}
                    width={282}
                    height={282}
                    style={{ height: "auto" }}
                  />
                </div>
                <div className="tp-shop-author-content">
                  <span>{a.booksCount} Books</span>
                  <h4 className="tp-shop-author-item-title">
                    <Link href="/my-profile">{a.name}</Link>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
