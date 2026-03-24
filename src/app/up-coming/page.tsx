import { Metadata } from "next";
import Image from "next/image";
import logo from '@/assets/img/logo/logo-white.png';
import Timer from "@/components/timer";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Up-Coming - Acadia",
};

export default function UpComingPage() {
    return (
        <section className="tp-upcoming-area tp-upcoming-gap p-relative tp-upcoming-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-upcoming-box text-center">
                            <div className="tp-upcoming-logo tp-header-logo">
                                <Link href="/">
                                    <Image src={logo} alt="logo" style={{ height: "auto" }} />
                                </Link>
                            </div>
                            <div className="tp-upcoming-heading">
                                <h2 className="tp-upcoming-title">The site is currently <br /> down for maintenance</h2>
                                <p className="tp-upcoming-subtitle">We apologize for any inconveniences caused. <br /> we’ve almost done.</p>
                            </div>
                            <div className="tp-upcoming-countdwon">
                                <div className="tp-event-details-countdown">
                                    <Timer expiryTimestamp={new Date("march 10 2025 00:29:22")} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
