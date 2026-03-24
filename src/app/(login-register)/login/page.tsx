import { Metadata } from "next";
import LoginRegisterBanner from "../_components/login-register-banner";
import LoginForm from "@/components/form/login-form";
import Link from "next/link";

export const metadata: Metadata = {
   title: "Login - Acadia",
};

export default function LoginPage() {
   return (
      <main>

         {/* login area start */}
         <section className="tp-login-area">
            <div className="tp-login-register-box d-flex align-items-center">
               <LoginRegisterBanner />
               <div className="tp-login-register-wrapper d-flex justify-content-center align-items-center">
                  <div className="tp-login-from-box">
                     <div className="tp-login-from-heading text-center">
                        <h4 className="tp-login-from-title">Sign in</h4>
                        <p>Dont have an account? <Link href="/register">Create Now</Link></p>
                     </div>
                     {/* login form start */}
                     <LoginForm />
                     {/* login form end */}
                  </div>
               </div>
            </div>
         </section>
         {/* login area end */}

      </main>
   );
}
