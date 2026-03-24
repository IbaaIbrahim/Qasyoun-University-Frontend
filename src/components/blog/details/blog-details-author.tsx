import Image from 'next/image';
import details_review_img from '@/assets/img/blog/deatils/review.png';

// prop type 
type IProps = {
  author: string;
}

export default function BlogDetailsAuthor({ author }: IProps) {
  return (
    <div className="tp-postbox-details-author-box mb-60 p-relative">
      <div className="tp-postbox-details-author-wrap d-flex align-items-center">
        <div className="tp-postbox-details-author-avata">
          <Image src={details_review_img} alt="review-img" />
        </div>
        <div className="tp-postbox-details-author-content">
          <h4>{author}</h4>
          <p>Digital content wrangler I UX enthusiast I Recovering educator I <br />
            Shameless nerd &amp; GIF connoisseur I Hockey fan.</p>
        </div>
      </div>
      <div className="tp-postbox-details-author-social">
        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
        <a href="#"><i className="fa-brands fa-twitter"></i></a>
        <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
      </div>
    </div>
  )
}
