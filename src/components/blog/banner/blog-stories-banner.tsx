import Link from "next/link";
import Image from "next/image";
import { HomeSvg, SearchSvg } from "@/components/svg";
import banner_img from '@/assets/img/blog/blog-stories/blog-stories-banner.jpg';
import user_img from '@/assets/img/blog/blog-stories/blog-stories-user.jpg';

export default function BlogStoriesBanner() {
  return (
    <section className="tp-blog-stories-area fix p-relative pt-120 pb-60">
      <div
        className="tp-blog-stories-bg"
        style={{
          backgroundImage:
            "url(/assets/img/blog/blog-stories/blog-stories-bg.png)",
        }}
      ></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12">
            <div className="tp-breadcrumb__content">
              <div className="tp-breadcrumb__list">
                <span>
                  <Link href="/">
                    <HomeSvg />
                  </Link>
                </span>
                <span className="color">Blog & Stories</span>
              </div>
              <h3 className="tp-breadcrumb__title">Blog & Stories</h3>
              <p className="tp-blog-stories-p">
                Discover articles and tutorials to help you build better.
              </p>
              <div className="tp-blog-stories-btn-box mb-60">
                <a className="active" href="#">
                  Art & Design
                </a>
                <a href="#">Business</a>
                <a href="#">Data Science</a>
                <a href="#">Data Science</a>
                <a href="#">Finance</a>
                <a href="#">Lifestyle</a>
                <a href="#">Marketing</a>
                <span className="tp-search-open-btn">
                  <SearchSvg />
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="tp-blog-stories-banner-wrap p-relative">
              <div className="tp-blog-stories-banner-thumb p-relative">
                <Image
                  src={banner_img}
                  alt="banner-img"
                  style={{ height: "auto" }}
                />
              </div>
              <div className="tp-blog-stories-banner-content">
                <a className="tp-blog-stories-banner-sub" href="#">
                  Art & Design
                </a>
                <h3 className="tp-blog-stories-banner-title">
                  <Link href="/blog-details/1">
                    The Importance of Intrinsic <br />
                    Motivation for Students
                  </Link>
                </h3>
                <div className="tp-blog-stories-banner-user d-flex align-items-center">
                  <div className="tp-blog-stories-user-thumb">
                    <Image
                      src={user_img}
                      alt="user-img"
                      style={{ height: "auto" }}
                    />
                  </div>
                  <div className="tp-blog-stories-user-content">
                    <h6>Oliver Knight</h6>
                    <span>July 14, 2024</span>
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
