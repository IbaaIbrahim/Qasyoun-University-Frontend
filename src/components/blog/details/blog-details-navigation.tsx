import { DotsSvg, NextArrowTwo, PrevArrowTwo } from "@/components/svg";

export default function BlogDetailsNavigation() {
  return (
    <div className="tp-postbox-details-navigation mb-60">
      <div className="row align-items-center">
        <div className="col-xl-4 col-lg-4 col-md-4 col-12">
          <div className="tp-postbox-details-navigation-content text-start text-md-start">
            <a className="tp-postbox-details-navigation-btn" href="#">
              <span>
                <PrevArrowTwo />
              </span>
              PREVIOUS
            </a>
            <h4 className="tp-postbox-details-navigation-title">
              <a href="#">Make you love and hate Education.</a>
            </h4>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 col-12">
          <div className="tp-postbox-details-navigation-bar text-start text-md-center">
            <a href="#">
              <span>
                <DotsSvg />
              </span>
            </a>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 col-12">
          <div className="tp-postbox-details-navigation-content next text-start text-md-end">
            <a className="tp-postbox-details-navigation-btn" href="#">
              Next
              <span>
                <NextArrowTwo />
              </span>
            </a>
            <h4 className="tp-postbox-details-navigation-title">
              <a href="#">The definition of synchronous Learning.</a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
