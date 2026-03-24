import Link from "next/link";
import bookData from "@/data/book-shop-data";
import WishlistItem from "./wishlist-item";

const cartItems = bookData.map((item) => ({
   id: item.id,
   title: item.title,
   price: item.price,
   img: item.image,
   stock: item.stock
})).slice(0, 2)

export default function WishlistArea() {
   return (
      <div className="tp-cart-area pt-120 pb-120">
         <div className="container">
            <div className="row">
               <div className="col-xl-12">
                  <div className="tp-cart-list mb-45 mr-30">
                     <table className="table">
                        <thead>
                           <tr>
                              <th colSpan={2} className="tp-cart-header-product">Product</th>
                              <th className="tp-cart-header-price">Price</th>
                              <th>Action</th>
                              <th></th>
                           </tr>
                        </thead>
                        <tbody>

                           {cartItems.map((item) => (
                              <WishlistItem key={item.id} item={item} />
                           ))}

                        </tbody>
                     </table>
                  </div>
                  <div className="tp-cart-bottom">
                     <div className="row align-items-end">
                        <div className="col-xl-6 col-md-4">
                           <div className="tp-cart-update">
                              <Link href="/cart" className="tp-cart-update-btn">Go To Cart</Link>
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
