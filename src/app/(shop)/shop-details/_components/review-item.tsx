import Image from "next/image";

type IProps = {
    review: {
        id: number;
        name: string;
        date: string;
        comment: string;
        rating: number;
        avatar: string;
    }
}
export default function ReviewItem({ review }: IProps) {
    return (
        <div className="tp-product-details-review-avater d-flex align-items-start" key={review.id}>
            <div className="tp-product-details-review-avater-thumb">
                <a href="#">
                    <Image src={review.avatar} alt={review.name} width={60 } height={60} />
                </a>
            </div>
            <div className="tp-product-details-review-avater-content">
                <div className="tp-product-details-review-avater-rating d-flex align-items-center">
                    {[...Array(review.rating)].map((_, i) => (
                        <span key={i}>
                            <i className="fa-solid fa-star"></i>
                        </span>
                    ))}
                </div>
                <h3 className="tp-product-details-review-avater-title">{review.name}</h3>
                <span className="tp-product-details-review-avater-meta">{review.date}</span>
                <div className="tp-product-details-review-avater-comment">
                    <p>{review.comment}</p>
                </div>
            </div>
        </div>
    )
}
