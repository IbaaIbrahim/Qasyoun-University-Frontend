'use client';
import React, { useState } from 'react';

export default function CheckoutVerifyArea() {
   // State to control form visibility
   const [showLoginForm, setShowLoginForm] = useState(false);
   const [showCouponForm, setShowCouponForm] = useState(false);

   const toggleLoginForm = () => {
      setShowLoginForm(prevState => !prevState);
   };

   const toggleCouponForm = () => {
      setShowCouponForm(prevState => !prevState);
   };

   return (
      <div className="tp-checkout-verify">
         {/* Login Section */}
         <div className="tp-checkout-verify-item">
            <p className="tp-checkout-verify-reveal">
               Returning customer?{' '}
               <button
                  type="button"
                  className="tp-checkout-login-form-reveal-btn"
                  onClick={toggleLoginForm}
               >
                  Click here to login
               </button>
            </p>

            {showLoginForm && (
               <div id="tpReturnCustomerLoginForm" className="tp-return-customer">
                  <form action="#">
                     <div className="tp-return-customer-input">
                        <label>Email</label>
                        <input type="text" placeholder="Your Email" />
                     </div>
                     <div className="tp-return-customer-input">
                        <label>Password</label>
                        <input type="password" placeholder="Password" />
                     </div>

                     <div className="tp-return-customer-suggestions d-sm-flex align-items-center justify-content-between mb-20">
                        <div className="tp-return-customer-remember">
                           <input id="remember" type="checkbox" />
                           <label htmlFor="remember">Remember me</label>
                        </div>
                        <div className="tp-return-customer-forgot">
                           <a href="#">Forgot Password?</a>
                        </div>
                     </div>
                     <button type="submit" className="tp-return-customer-btn tp-checkout-btn">
                        Login
                     </button>
                  </form>
               </div>
            )}
         </div>

         {/* Coupon Section */}
         <div className="tp-checkout-verify-item">
            <p className="tp-checkout-verify-reveal">
               Have a coupon?{' '}
               <button
                  type="button"
                  className="tp-checkout-coupon-form-reveal-btn"
                  onClick={toggleCouponForm}
               >
                  Click here to enter your code
               </button>
            </p>

            {showCouponForm && (
               <div id="tpCheckoutCouponForm" className="tp-return-customer">
                  <form action="#">
                     <div className="tp-return-customer-input">
                        <label>Coupon Code :</label>
                        <input type="text" placeholder="Coupon" />
                     </div>
                     <button type="submit" className="tp-return-customer-btn tp-checkout-btn">
                        Apply
                     </button>
                  </form>
               </div>
            )}
         </div>
      </div>
   );
}
