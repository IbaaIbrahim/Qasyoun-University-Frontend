import Link from "next/link";
import { HomeSvg } from "@/components/svg";

type IProps = {
    title: string;
}

export default function DetailsBreadcrumb({ title }: IProps) {
  return (
    <div className="tp-breadcrumb__area pt-15 pb-15 p-relative z-index-1 fix">
      <div
        className="tp-breadcrumb__bg"
        style={{ backgroundImage: "url(/assets/img/breadcrumb/breadcrumb-bg.jpg)" }}
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
                <span>Our Blog</span>
                <span>{title}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
