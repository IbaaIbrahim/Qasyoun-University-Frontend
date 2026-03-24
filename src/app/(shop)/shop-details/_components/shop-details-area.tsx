import Image from "next/image";
import { IBookDT } from "@/types/book-d-t";
import ShopDetailsBottom from "./shop-details-bottom";
import ShopDetailsActions from "./shop-details-actions";
import { formatPrice } from "@/lib/format-price";
import payment_img from "@/assets/img/shop/product/payment.png";	


type IProps = {
   product:IBookDT
}

export default function ShopDetailsArea({product}:IProps) {
   const {category,title,image,short_desc,stock,price} = product || {};
   return (
      <section className="tp-product-details-area pt-100">
         <div className="tp-product-details-top pb-115">
            <div className="container">
               <div className="row">
                  <div className="col-lg-6">
                     <div className="tp-product-details-thumb" style={{backgroundColor:'#F8F8F8'}}>
                        <Image src={image} alt={title} width={589} height={750} style={{height:"auto"}} />
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="tp-product-details-wrapper">
                        <div className="tp-product-details-category">
                           <span>{category}</span>
                        </div>
                        <h3 className="tp-product-details-title">{title}</h3>

                        <div className="tp-product-details-inventory d-flex align-items-center mb-10">
                           <div className="tp-product-details-stock mb-10">
                              <span>{stock > 0 ? 'In Stock' : 'Out of Stock'}</span>
                           </div>
                           <div className="tp-product-details-rating-wrapper d-flex align-items-center mb-10">
                              <div className="tp-product-details-rating">
                                 <span><i className="fa-solid fa-star"></i></span>
                                 <span><i className="fa-solid fa-star"></i></span>
                                 <span><i className="fa-solid fa-star"></i></span>
                                 <span><i className="fa-solid fa-star"></i></span>
                                 <span><i className="fa-solid fa-star"></i></span>
                              </div>
                              <div className="tp-product-details-reviews">
                                 <span>(36 Reviews)</span>
                              </div>
                           </div>
                        </div>
                        <p>{short_desc}</p>

                        {/* price */}
                        <div className="tp-product-details-price-wrapper mb-20">
                           <span className="tp-product-details-price new-price">
                              {formatPrice(price,true)}
                           </span>
                        </div>

                        {/* actions */}
                        <ShopDetailsActions />

                        <div className="tp-product-details-query">
                           <div className="tp-product-details-query-item d-flex align-items-center">
                              <span>Book Type: </span>
                              <p>{category}</p>
                           </div>
                           <div className="tp-product-details-query-item d-flex align-items-center">
                              <span>Publishe:  </span>
                              <p>Luminous Publishing</p>
                           </div>
                           <div className="tp-product-details-query-item d-flex align-items-center">
                              <span>Language:</span>
                              <p>English</p>
                           </div>
                        </div>
                        <div className="tp-product-details-social">
                           <span>Share: </span>
                           <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                           <a href="#"><i className="fa-brands fa-twitter"></i></a>
                           <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                           <a href="#"><i className="fa-brands fa-vimeo-v"></i></a>
                        </div>
                        <div className="tp-product-details-msg mb-15">
                           <ul>
                              <li>30 days easy returns</li>
                              <li>Order yours before 2.30pm for same day dispatch</li>
                           </ul>
                        </div>
                        <div className="tp-product-details-payment d-flex align-items-center flex-wrap justify-content-between">
                           <p>Guaranteed safe <br /> & secure checkout</p>
                           <Image src={payment_img} alt="payment-img" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>


         {/* shop details bottom area start */}
         <ShopDetailsBottom product={product}/>
         {/* shop details bottom area end */}
      </section>
   )
}
