import Link from "next/link";
import CartItem from "./cart-item";
import bookData from "@/data/book-shop-data";

const cartItems = bookData.map((item) => ({
  id: item.id,
  title: item.title,
  price: item.price,
  img: item.image,
  stock: item.stock
})).slice(0, 2)

export default function CartArea() {
  return (
    <section className="tp-cart-area pt-120  pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 col-lg-8">
            <div className="tp-cart-list mb-25 mr-30">
              <table className="table">
                <thead>
                  <tr>
                    <th colSpan={2} className="tp-cart-header-product">Product</th>
                    <th className="tp-cart-header-price">Price</th>
                    <th className="tp-cart-header-quantity">Quantity</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </tbody>
              </table>
            </div>
            <div className="tp-cart-bottom">
              <div className="row align-items-end">
                <div className="col-xl-6 col-md-8">
                  <div className="tp-cart-coupon">
                    <form action="#">
                      <div className="tp-cart-coupon-input-box">
                        <label>Coupon Code:</label>
                        <div className="tp-cart-coupon-input d-flex align-items-center">
                          <input type="text" placeholder="Enter Coupon Code" />
                          <button type="submit">Apply</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-xl-6 col-md-4">
                  <div className="tp-cart-update text-md-end mr-30">
                    <button type="button" className="tp-cart-update-btn">Update Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="tp-cart-checkout-wrapper">
              <div className="tp-cart-checkout-top d-flex align-items-center justify-content-between">
                <span className="tp-cart-checkout-top-title">Subtotal</span>
                <span className="tp-cart-checkout-top-price">$742</span>
              </div>
              <div className="tp-cart-checkout-shipping">
                <h4 className="tp-cart-checkout-shipping-title">Shipping</h4>

                <div className="tp-cart-checkout-shipping-option-wrapper">
                  <div className="tp-cart-checkout-shipping-option">
                    <input id="flat_rate" type="radio" name="shipping" />
                    <label htmlFor="flat_rate">Flat rate: <span>$20.00</span></label>
                  </div>
                  <div className="tp-cart-checkout-shipping-option">
                    <input id="local_pickup" type="radio" name="shipping" />
                    <label htmlFor="local_pickup">Local pickup: <span> $25.00</span></label>
                  </div>
                  <div className="tp-cart-checkout-shipping-option">
                    <input id="free_shipping" type="radio" name="shipping" />
                    <label htmlFor="free_shipping">Free shipping</label>
                  </div>
                </div>
              </div>
              <div className="tp-cart-checkout-total d-flex align-items-center justify-content-between">
                <span>Total</span>
                <span>$724</span>
              </div>
              <div className="tp-cart-checkout-proceed">
                <Link href="/checkout" className="tp-cart-checkout-btn w-100">Proceed to Checkout</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
