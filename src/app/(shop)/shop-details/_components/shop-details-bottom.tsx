import RatingBar from "./rating-bar";
import ReviewItem from "./review-item";
import { IBookDT } from "@/types/book-d-t";
import { formatKey } from "@/utils";
import ShopReviewForm from "@/components/form/shop-review-form";

// rating data
const ratings = [
  { stars: 5, percentage: 82 },
  { stars: 4, percentage: 30 },
  { stars: 3, percentage: 15 },
  { stars: 2, percentage: 6 },
  { stars: 1, percentage: 10 },
];
// review data
const reviews = [
  {
    id: 1,
    name: "Eleanor Fant",
    date: "06 March, 2024",
    comment: "Designed very similarly to the nearly double priced Galaxy tab S6, with the only removal being.",
    rating: 5,
    avatar: "/assets/img/shop/product/shop-product-user-1.png",
  },
  {
    id: 2,
    name: "Theodore Handle",
    date: "06 March, 2024",
    comment: "This review is for the Samsung Tab S6 Lite, 64gb wifi in blue. purchased this product performed.",
    rating: 5,
    avatar: "/assets/img/shop/product/shop-product-user-2.png",
  },
];

type IProps = {
  product: IBookDT;
}
export default function ShopDetailsBottom({ product }: IProps) {
  const {additional_info,description} = product || {};
  return (
    <div className="tp-product-details-bottom">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-product-details-tab-nav tp-tab">
              <nav>
                <div className="nav nav-tabs justify-content-center p-relative tp-product-tab" id="navPresentationTab" role="tablist">

                  <button className="nav-link" id="nav-description-tab" data-bs-toggle="tab" data-bs-target="#nav-description" type="button" role="tab" aria-controls="nav-description" aria-selected="false" tabIndex={-1}>Description</button>

                  <button className="nav-link active" id="nav-addInfo-tab" data-bs-toggle="tab" data-bs-target="#nav-addInfo" type="button" role="tab" aria-controls="nav-addInfo" aria-selected="true" tabIndex={0}>Additional information</button>

                  <button className="nav-link" id="nav-review-tab" data-bs-toggle="tab" data-bs-target="#nav-review" type="button" role="tab" aria-controls="nav-review" aria-selected="false" tabIndex={-1}>Reviews (2)</button>
                  
                </div>
              </nav>
              <div className="tab-content" id="navPresentationTabContent">
                <div className="tab-pane fade" id="nav-description" role="tabpanel" aria-labelledby="nav-description-tab">
                  <div className="tp-product-details-additional-p">
                    <div className="row">
                      <div className="col-xl-12">
                        <p>{description}</p>
                        <p>For years, rumours of the {'Marsh Girl'} have haunted Barkley Cove, a quiet town on the North Carolina coast. So in late 1969, <br /> when handsome Chase Andrews is found dead.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade show active" id="nav-addInfo" role="tabpanel" aria-labelledby="nav-addInfo-tab">
                  <div className="tp-product-details-additional-info">
                    <div className="row justify-content-center">
                      <div className="col-xl-10">
                        <table>
                          <tbody>
                            {additional_info && Object.entries(additional_info).map(([key, value]) => (
                              <tr key={key}>
                                <td>{formatKey(key)}</td>
                                <td>{value}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="nav-review" role="tabpanel" aria-labelledby="nav-review-tab">
                  <div className="tp-product-details-review-wrapper pt-60">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="tp-product-details-review-statics">
                          {/* number */}
                          <div className="tp-product-details-review-number d-inline-block mb-50">
                            <h3 className="tp-product-details-review-number-title">Customer reviews</h3>
                            <div className="tp-product-details-review-summery d-flex align-items-center">
                              <div className="tp-product-details-review-summery-value">
                                <span>4.5</span>
                              </div>
                              <div className="tp-product-details-review-summery-rating d-flex align-items-center">
                                <span><i className="fa-solid fa-star"></i></span>
                                <span><i className="fa-solid fa-star"></i></span>
                                <span><i className="fa-solid fa-star"></i></span>
                                <span><i className="fa-solid fa-star"></i></span>
                                <span><i className="fa-solid fa-star"></i></span>
                                <p>(36 Reviews)</p>
                              </div>
                            </div>
                            <div className="tp-product-details-review-rating-list">
                              {ratings.map((rating) => (
                                <RatingBar
                                  key={rating.stars}
                                  stars={rating.stars}
                                  percentage={rating.percentage}
                                />
                              ))}
                            </div>
                          </div>

                          {/* reviews */}
                          <div className="tp-product-details-review-list pr-110">
                            <h3 className="tp-product-details-review-title">Rating & Review</h3>
                            {reviews.map((review) => (
                              <ReviewItem key={review.id} review={review} />
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="tp-product-details-review-form">
                          <h3 className="tp-product-details-review-form-title">Review this product</h3>
                          <p>Your email address will not be published. Required fields are marked *</p>
                          {/* shop review form */}
                          <ShopReviewForm />
                          {/* shop review form */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
