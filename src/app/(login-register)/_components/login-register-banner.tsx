import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/img/logo/logo-white.png";
import shape_1 from "@/assets/img/login/login-register-shape-1.png";
import shape_2 from "@/assets/img/login/login-register-shape-2.png";
import shape_3 from "@/assets/img/login/login-register-shape-3.png";

export default function LoginRegisterBanner() {
  return (
    <div
      className="tp-login-register-banner-box p-relative"
      style={{ backgroundImage: "url(/assets/img/login/login-register-bg.jpg)" }}
    >
      <div className="tp-login-register-logo tp-header-logo">
        <Link href="/">
          <Image src={logo} alt="logo" style={{ height: "auto" }} />
        </Link>
      </div>
      <div className="tp-login-register-heading">
        <h3 className="tp-login-register-title">
          Discover world <br /> best online courses here.
        </h3>
      </div>
      <div className="tp-login-register-shape">
        <div className="shape-1">
          <Image src={shape_2} alt="shape" />
        </div>
        <div className="shape-2">
          <Image src={shape_1} alt="shape" />
        </div>
        <div className="shape-3">
          <Image src={shape_3} alt="shape" />
        </div>
      </div>
    </div>
  );
}
