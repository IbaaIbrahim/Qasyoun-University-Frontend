import Image from "next/image";
import Link from "next/link";
import feature_img_1 from "@/assets/img/shop/feature/shop-feature-1.jpg";
import feature_img_2 from "@/assets/img/shop/feature/shop-feature-2.jpg";
import feature_img_3 from "@/assets/img/shop/feature/shop-feature-3.jpg";
import feature_img_4 from "@/assets/img/shop/feature/shop-feature-4.jpg";
import { RightSmArrow } from "../svg";

const featuredCategories = [
  {
    id: 1,
    imgSrc: feature_img_1,
    category: "FICTION",
    title: "Huge Sale! Don't miss Out",
  },
  {
    id: 2,
    sm_categories: [
      {
        id: 2,
        imgSrc: feature_img_2,
        category: "NOVEL",
        title: "Summer Sale bozana",
      },
      {
        id: 3,
        imgSrc: feature_img_3,
        category: "NOVEL",
        title: "Summer Sale bozana",
      },
    ],
  },
  {
    id: 4,
    imgSrc: feature_img_4,
    category: "NOVEL",
    title: "Summer Sale bozana",
  },
];

export default function CategoryAreaThree() {
  return (
    <section className="tp-shop-feature-area pt-100 pb-95">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tp-shop-feature-heading text-center">
              <h3 className="tp-shop-feature-title">Featured Categories</h3>
              <p>
                Aliens, tech marvels, and cosmic wonders await in these
                mind-bending sagas.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {featuredCategories.map((c) => (
            <div key={c.id} className="col-lg-4 col-md-6">
              {c.sm_categories ? (
                c.sm_categories.map((sc) => (
                  <div
                    key={sc.id}
                    className="tp-shop-feature-thumb p-relative mb-25"
                  >
                    <Image
                      src={sc.imgSrc}
                      alt={sc.category}
                      style={{ height: "auto" }}
                    />
                    <div className="tp-shop-feature-content">
                      <span>{sc.category}</span>
                      <h4>{sc.title}</h4>
                    </div>
                    <div className="tp-shop-feature-btn">
                      <Link href="/shop-grid">
                        Shop Now{" "}
                        <span>
                          <RightSmArrow />
                        </span>
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="tp-shop-feature-thumb p-relative mb-25">
                  <Image
                    src={c.imgSrc}
                    alt={c.category}
                    style={{ height: "auto" }}
                  />
                  <div className="tp-shop-feature-content">
                    <span>{c.category}</span>
                    <h4>{c.title}</h4>
                  </div>
                  <div className="tp-shop-feature-btn">
                    <Link href="/shop-grid">
                      Shop Now{" "}
                      <span>
                        <RightSmArrow />
                      </span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
