import SocialLinks from '@/components/social/social-links';
import { CalenderTwoSvg, ClockSvgThree,LocationThree, MinusSvg, Ongoing, PlusTwoSvg } from '@/components/svg';

export default function EventBox() {
  return (
    <div className="tp-event-details-box">
        <div className="tp-event-details-details">
            <h4 className="tp-event-details-box-title">Event Detail</h4>
            <div className="tp-event-details-list d-flex align-items-center justify-content-between">
                <h5><span>
                <CalenderTwoSvg/>
                    </span> Start Date</h5>
                <span>30 Nov 2024</span>
            </div>
            <div className="tp-event-details-list d-flex align-items-center justify-content-between">
                <h5><span><ClockSvgThree/></span> Start Time</h5>
                <span>02:00 PM</span>
            </div>
            <div className="tp-event-details-list d-flex align-items-center justify-content-between">
                <h5><span><CalenderTwoSvg/></span> End Date</h5>
                <span>02 Dec 2024</span>
            </div>
            <div className="tp-event-details-list d-flex align-items-center justify-content-between">
                <h5><span><ClockSvgThree/></span> End Time</h5>
                <span>05:00 PM</span>
            </div>
            <div className="tp-event-details-list d-flex align-items-center justify-content-between">
                <h5><span><Ongoing/></span> Ongoing</h5>
                <span>520</span>
            </div>
            <div className="tp-event-details-list d-flex align-items-center justify-content-between">
                <h5><span><LocationThree/></span> Location</h5>
                <span>IAC Building, New York,</span>
            </div>
        </div>
        <div className="tp-event-details-ticket">
            <h4 className="tp-event-details-box-title">Purchase Ticket</h4>
            <div className="tp-event-details-ticket-box mb-30">
                <p><span>DEFAULT</span> (99974 seats remaining)</p>
                <div className="tp-event-details-quantity d-flex align-items-center justify-content-between">
                    <h5 className="tp-event-details-amount">$40.00</h5>
                    <div className="tp-event-details-plus">
                    <span className="tp-cart-minus">
                        <MinusSvg/>
                    </span>
                    <input className="tp-cart-input" type="text" defaultValue="1" readOnly/>
                    <span className="tp-cart-plus">
                        <PlusTwoSvg/>
                    </span>
                    </div>
                </div>
            </div>
            <div className="tp-event-details-price">
                <div className="tp-event-details-price-Quantity d-flex justify-content-between align-items-center">
                    <p>Total Quantity</p>
                    <span>2</span>
                </div>
                <div className="tp-event-details-price-Quantity d-flex justify-content-between align-items-center">
                    <p>Total Price</p>
                    <span>$80.00</span>
                </div>
            </div>
            <div className="tp-event-details-btn mb-30">
                <a className="tp-btn-inner w-100 text-center" href="#">Buy ticket</a>
            </div>
            <div className="tp-event-details-social text-center">
                <SocialLinks/>
            </div>
        </div>
    </div>
  )
}
