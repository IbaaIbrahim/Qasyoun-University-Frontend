import { Link } from "@/i18n/navigation";
import { HomeSvg } from "../svg";

type IProps = {
  title: string;
  subtitle: string;
  admission?: boolean;
  bgImg?: string | null;
}

export default function BreadcrumbTwo({
  title,
  subtitle,
  admission,
  bgImg = "/assets/img/breadcrumb/campus-breadcrumb.jpg"
}: IProps) {
  const isDifferentTrail = subtitle && subtitle.trim().toLowerCase() !== title.trim().toLowerCase();
  const effectiveBgImg = bgImg && bgImg.trim() ? bgImg : "/assets/img/breadcrumb/campus-breadcrumb.jpg";

  return (
    <section className="tp-breadcrumb__area p-relative z-index-1 fix">
      <div
        className="tp-breadcrumb__bg overlay"
        style={{
          backgroundImage: `url(${effectiveBgImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }}
      ></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12">
            <div className="tp-breadcrumb__content">
              <div className="tp-breadcrumb__list inner-after">
                <span className="white">
                  <Link href="/">
                    <HomeSvg />
                  </Link>
                </span>
                {admission && <span className="white">Admission</span>}
                {isDifferentTrail && <span className="white">{subtitle}</span>}
                <span className="white">{title}</span>
              </div>
              <h3 className="tp-breadcrumb__title color">
                {title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
