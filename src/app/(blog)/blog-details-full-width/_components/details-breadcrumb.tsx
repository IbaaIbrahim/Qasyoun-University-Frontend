import Link from "next/link";
import Image from "next/image";
import { PrevArrow } from "@/components/svg";
import user_img from '@/assets/img/blog/blog-stories/blog-stories-user-2.jpg';

export default function DetailsBreadcrumb() {
  return (
    <section className="tp-blog-full-width-area tp-blog-full-width-pl fix p-relative pt-180">
      <div
        className="tp-blog-stories-bg"
        style={{ backgroundImage: "url(/assets/img/blog/blog-stories/blog-stories-bg.png)" }}
      ></div>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-12">
            <div className="tp-breadcrumb__content text-center">
              <h3 className="tp-blog-full-width-title">
                Brilliant analysis. <br />
                thank you for the education.
              </h3>
              <div className="tp-blog-full-width-box d-flex justify-content-between">
                <div className="tp-blog-full-width-back">
                  <Link href="/blog-stories">
                    <span>
                      <PrevArrow />
                    </span>
                    Back to main blog
                  </Link>
                </div>

                <div className="tp-blog-details-user order-3 order-lg-2">
                  <span>
                    <Image
                      src={user_img}
                      alt="user-img"
                      style={{ height: "auto" }}
                    />{" "}
                    Eleanor Pena
                  </span>
                  <span>August 24, 2023</span>
                  <span>2 Comments</span>
                </div>

                <div className="tp-blog-details-user-social order-2 order-lg-3">
                  <div className="tp-postbox-details-social text-end">
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa-solid fa-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
