'use client';
import { useState } from "react";
import ProductList from "./product-list";
import ShippingOptions from "./shipping-options";
import PaymentOptions from "./payment-options";
import CheckoutVerifyArea from "./checkout-verify-area";
import NiceSelect from "@/components/ui/nice-select";


const products = [
   { name: "Nar Allt Ar Over", quantity: 2, price: 76 },
   { name: "Under en rosa Himmel", quantity: 1, price: 74 },
   { name: "Michael Connelly", quantity: 3, price: 362 },
   { name: "Body Works Mens Collection", quantity: 1, price: 145 }
];

const shippingOptions = [
   { id: "flat_rate", label: "Flat rate", price: 20 },
   { id: "local_pickup", label: "Local pickup", price: 25 },
   { id: "free_shipping", label: "Free shipping", price: 0 }
];

const paymentOptions = [
   { id: "back_transfer", label: "Direct Bank Transfer", description: "Make your payment directly into our bank account. Please use your Order ID as the payment reference." },
   { id: "cheque_payment", label: "Cheque Payment", description: "Make your payment directly into our bank account." },
   { id: "cod", label: "Cash on Delivery", description: "Make your payment directly into our bank account." }
];

export default function CheckoutArea() {
   const [shipping, setShipping] = useState("flat_rate");
   const [paymentMethod, setPaymentMethod] = useState("back_transfer");


   const totalPrice = products.reduce((acc, product) => acc + product.price * product.quantity, 0);

   function handleCountry(item: { value: string; label: string }) {
      console.log(item);
   }

   return (
      <section className="tp-checkout-area pt-120 pb-120" style={{ backgroundColor: "#EFF1F5" }}>
         <div className="container">
            <div className="row">
               <div className="col-xl-7 col-lg-7">
                  <CheckoutVerifyArea />
               </div>
            </div>

            {/* <form action="#">
               <div className="row">
                  <div className="col-lg-7">
                     <div className="tp-checkout-bill-area">
                        <h3 className="tp-checkout-bill-title">Billing Details</h3>

                        <div className="tp-checkout-bill-form">
                           <div className="tp-checkout-bill-inner">
                              <div className="row">
                                 <div className="col-md-6">
                                    <div className="tp-checkout-input">
                                       <label>First Name <span>*</span></label>
                                       <input type="text" placeholder="First Name">
                                    </div>
                                 </div>
                                 <div className="col-md-6">
                                    <div className="tp-checkout-input">
                                       <label>Last Name <span>*</span></label>
                                       <input type="text" placeholder="Last Name">
                                    </div>
                                 </div>
                                 <div className="col-md-12">
                                    <div className="tp-checkout-input">
                                       <label>Company name (optional)</label>
                                       <input type="text" placeholder="Example LTD.">
                                    </div>
                                 </div>
                                 <div className="col-md-12">
                                    <div className="tp-checkout-input">
                                       <label>Country / Region </label>
                                       <input type="text" placeholder="United States (US)">
                                    </div>
                                 </div>
                                 <div className="col-md-12">
                                    <div className="tp-checkout-input">
                                       <label>Street address</label>
                                       <input type="text" placeholder="House number and street name">
                                    </div>

                                    <div className="tp-checkout-input">
                                       <input type="text" placeholder="Apartment, suite, unit, etc. (optional)">
                                    </div>
                                 </div>
                                 <div className="col-md-12">
                                    <div className="tp-checkout-input">
                                       <label>Town / City</label>
                                       <input type="text" placeholder="">
                                    </div>
                                 </div>
                                 <div className="col-md-6">
                                    <div className="tp-checkout-input">
                                       <label>State / County</label>
                                       <select>
                                          <option>New York US</option>
                                          <option>Berlin Germany</option>
                                          <option>Paris France</option>
                                          <option>Tokiyo Japan</option>
                                       </select>
                                    </div>
                                 </div>
                                 <div className="col-md-6">
                                    <div className="tp-checkout-input">
                                       <label>Postcode ZIP</label>
                                       <input type="text" placeholder="">
                                    </div>
                                 </div>
                                 <div className="col-md-12">
                                    <div className="tp-checkout-input">
                                       <label>Phone <span>*</span></label>
                                       <input type="text" placeholder="">
                                    </div>
                                 </div>
                                 <div className="col-md-12">
                                    <div className="tp-checkout-input">
                                       <label>Email address <span>*</span></label>
                                       <input type="email" placeholder="">
                                    </div>
                                 </div>
                                 <div className="col-md-12">
                                    <div className="tp-checkout-option-wrapper">
                                       <div className="tp-checkout-option">
                                          <input id="create_free_account" type="checkbox">
                                             <label for="create_free_account">Create an account?</label>
                                       </div>
                                       <div className="tp-checkout-option">
                                          <input id="ship_to_diff_address" type="checkbox">
                                             <label for="ship_to_diff_address">Ship to a different address?</label>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="col-md-12">
                                    <div className="tp-checkout-input">
                                       <label>Order notes (optional)</label>
                                       <textarea placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-5">
                     <div className="tp-checkout-place white-bg">
                        <h3 className="tp-checkout-place-title">Your Order</h3>

                        <div className="tp-order-info-list">
                           <ul>

                              <!-- header -->
                              <li className="tp-order-info-list-header">
                                 <h4>Product</h4>
                                 <h4>Total</h4>
                              </li>

                              <!-- item list -->
                              <li className="tp-order-info-list-desc">
                                 <p>Nar Allt Ar Over <span> x 2</span></p>
                                 <span>$76:00</span>
                              </li>
                              <li className="tp-order-info-list-desc">
                                 <p> 	Under en rosa Himmel <span> x 1</span></p>
                                 <span>$74:00</span>
                              </li>
                              <li className="tp-order-info-list-desc">
                                 <p>Michael Connelly  <span> x 3</span></p>
                                 <span>$362:00</span>
                              </li>
                              <li className="tp-order-info-list-desc">
                                 <p>Body Works Mens Collection <span> x 1</span></p>
                                 <span>$145:00</span>
                              </li>

                              <!-- subtotal -->
                              <li className="tp-order-info-list-subtotal">
                                 <span>Subtotal</span>
                                 <span>$507.00</span>
                              </li>

                              <!-- shipping -->
                              <li className="tp-order-info-list-shipping">
                                 <span>Shipping</span>
                                 <div className="tp-order-info-list-shipping-item d-flex flex-column align-items-end">
                                    <span>
                                       <input id="flat_rate" type="radio" name="shipping">
                                          <label for="flat_rate">Flat rate: <span>$20.00</span></label>
                                    </span>
                                    <span>
                                       <input id="local_pickup" type="radio" name="shipping">
                                          <label for="local_pickup">Local pickup: <span>$25.00</span></label>
                                    </span>
                                    <span>
                                       <input id="free_shipping" type="radio" name="shipping">
                                          <label for="free_shipping">Free shipping</label>
                                    </span>
                                 </div>
                              </li>

                              <!-- total -->
                              <li className="tp-order-info-list-total">
                                 <span>Total</span>
                                 <span>$1,476.00</span>
                              </li>
                           </ul>
                        </div>
                        <div className="tp-checkout-payment">
                           <div className="tp-checkout-payment-item">
                              <input type="radio" id="back_transfer" name="payment">
                                 <label for="back_transfer" data-bs-toggle="direct-bank-transfer">Direct Bank Transfer</label>
                                 <div className="tp-checkout-payment-desc direct-bank-transfer">
                                    <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                                 </div>
                           </div>
                           <div className="tp-checkout-payment-item">
                              <input type="radio" id="cheque_payment" name="payment">
                                 <label for="cheque_payment">Cheque Payment</label>
                                 <div className="tp-checkout-payment-desc cheque-payment">
                                    <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                                 </div>
                           </div>
                           <div className="tp-checkout-payment-item">
                              <input type="radio" id="cod" name="payment">
                                 <label for="cod">Cash on Delivery</label>
                                 <div className="tp-checkout-payment-desc cash-on-delivery">
                                    <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                                 </div>
                           </div>
                           <div className="tp-checkout-payment-item paypal-payment">
                              <input type="radio" id="paypal" name="payment">
                                 <label for="paypal">PayPal <img src="assets/img/shop/payment-option.png" alt=""> <a href="#">What is PayPal?</a></label>
                           </div>
                        </div>
                        <div className="tp-checkout-agree">
                           <div className="tp-checkout-option">
                              <input id="read_all" type="checkbox">
                                 <label for="read_all">I have read and agree to the website.</label>
                           </div>
                        </div>
                        <div className="tp-checkout-btn-wrapper">
                           <a href="#" className="tp-checkout-btn w-100">Place Order</a>
                        </div>
                     </div>
                  </div>
               </div>
            </form> */}
            <form>
               <div className="row">
                  <div className="col-lg-7">
                     <div className="tp-checkout-bill-area">
                        <h3 className="tp-checkout-bill-title">Billing Details</h3>

                        <div className="tp-checkout-bill-form">
                           <div className="tp-checkout-bill-inner">
                              <div className="row">
                                 {/* Billing Input Fields */}
                                 <InputField col="6" label="First Name" required />
                                 <InputField col="6" label="Last Name" required />
                                 <InputField label="Company name (optional)" />
                                 <InputField label="Country / Region" />
                                 <InputField label="Street address" />
                                 <InputField label="" placeholder="Apartment, suite, unit, etc. (optional)" />
                                 <InputField label="Town / City" />
                                 <SelectField label="State / County" options={[{ value: 'us', label: "New York US" }, { value: 'de', label: "Berlin Germany" }, { value: 'fr', label: "Paris France" }, { value: 'jp', label: "Tokyo Japan" }]} onChange={handleCountry} />
                                 <InputField col="6" label="Postcode ZIP" />
                                 <InputField label="Phone" required />
                                 <InputField label="Email address" type="email" required />

                                 {/* Checkbox Options */}
                                 <div className="tp-checkout-option-wrapper">
                                    <CheckboxOption id="create_free_account" label="Create an account?" />
                                    <CheckboxOption id="ship_to_diff_address" label="Ship to a different address?" />
                                 </div>

                                 {/* Order Notes */}
                                 <TextAreaField label="Order notes (optional)" placeholder="Notes about your order, e.g. special notes for delivery." />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="col-lg-5">
                     <div className="tp-checkout-place white-bg">
                        <h3 className="tp-checkout-place-title">Your Order</h3>
                        <div className="tp-order-info-list">
                           <ul>


                              {/* Product List */}
                              <ProductList products={products} />

                              {/* Subtotal */}
                              <li className="tp-order-info-list-subtotal">
                                 <span>Subtotal</span>
                                 <span>${totalPrice.toFixed(2)}</span>
                              </li>

                              {/* Shipping Options */}
                              <ShippingOptions options={shippingOptions} selectedOption={shipping} onOptionChange={setShipping} />

                              {/* Total */}
                              <li className="tp-order-info-list-total">
                                 <span>Total</span>
                                 <span>
                                    ${(
                                       totalPrice +
                                       (shippingOptions.find(opt => opt.id === shipping)?.price || 0)
                                    ).toFixed(2)}
                                 </span>
                              </li>
                           </ul>
                        </div>

                        {/* Payment Options */}
                        <PaymentOptions options={paymentOptions} selectedOption={paymentMethod} onOptionChange={setPaymentMethod} />

                        {/* Agreement Checkbox */}
                        <div className="tp-checkout-agree">

                        <CheckboxOption id="read_all" label="I have read & agree to the website terms." />
                        </div>

                        {/* Place Order Button */}
                        <div className="tp-checkout-btn-wrapper">
                           <button type="submit" className="tp-checkout-btn w-100">Place Order</button>
                        </div>
                     </div>
                  </div>
               </div>
            </form>
         </div>
      </section>
   )
}




const InputField = ({ col = '12', label, placeholder, required, type = "text" }: { col?: string, label?: string, placeholder?: string, required?: boolean, type?: string }) => (
   <div className={`col-md-${col}`}>
      <div className="tp-checkout-input">
         {label && <label>{label} {required && <span>*</span>}</label>}
         <input type={type} placeholder={placeholder || label} required={required} />
      </div>
   </div>
);

const SelectField = ({ label, options, onChange }: { label: string, options: { value: string, label: string }[], onChange: (item: { value: string, label: string }) => void }) => (
   <div className="col-md-6">
      <div className="tp-checkout-input">
         <label>{label}</label>
         <NiceSelect
            options={[{ value: '', label: 'Select Country' }, ...options]}
            defaultCurrent={0}
            onChange={onChange}
            name="Country"
         />
      </div>
   </div>
);

const CheckboxOption = ({ id, label }: { id: string, label: string }) => (
   <div className="tp-checkout-option">
      <input id={id} type="checkbox" />
      <label htmlFor={id}>{label}</label>
   </div>
);

const TextAreaField = ({ label, placeholder }: { label: string, placeholder: string }) => (
   <div className="col-md-12">
      <div className="tp-checkout-input">
         <label>{label}</label>
         <textarea placeholder={placeholder}></textarea>
      </div>
   </div>
);