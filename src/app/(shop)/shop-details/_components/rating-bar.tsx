

interface RatingBarProps {
  stars: number;
  percentage: number;
}

const RatingBar: React.FC<RatingBarProps> = ({ stars, percentage }) => {
  return (
    <div className="tp-product-details-review-rating-item d-flex align-items-center">
      <span>{stars} Stars</span>
      <div className="tp-product-details-review-rating-bar">
        <span
          className="tp-product-details-review-rating-bar-inner"
          style={{ width: `${percentage}%` }}
        ></span>
      </div>
      <div className="tp-product-details-review-rating-percent">
        <span>{percentage}%</span>
      </div>
    </div>
  );
};

export default RatingBar;
