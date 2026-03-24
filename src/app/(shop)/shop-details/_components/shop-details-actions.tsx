'use client';
import { MinusTwoSvg, PlusFourSvg } from '@/components/svg';
import { useState } from 'react';

export default function ShopDetailsActions() {
  const [count, setCount] = useState(1);
  function handleCount() {
    if(count > 1) {
      setCount(count - 1);
    } else {
      setCount(1);
    }
  }
  return (
    <>
      <div className="tp-product-details-action-wrapper">
        <h3 className="tp-product-details-action-title">Quantity</h3>
        <div className="tp-product-details-action-item-wrapper d-flex align-items-center">
          <div className="tp-product-details-quantity">
            <div className="tp-product-quantity mb-15 mr-15">
              <span onClick={handleCount} className="tp-cart-minus">
                <MinusTwoSvg />
              </span>
              <input className="tp-cart-input" type="text" value={count} readOnly />
              <span onClick={()=> setCount(count + 1)} className="tp-cart-plus">
                <PlusFourSvg />
              </span>
            </div>
          </div>
          <div className="tp-product-details-add-to-cart mb-15 w-100">
            <button className="tp-product-details-add-to-cart-btn w-100">Add To Cart</button>
          </div>
        </div>
        <button className="tp-product-details-buy-now-btn w-100">Buy Now</button>
      </div>
    </>
  )
}
