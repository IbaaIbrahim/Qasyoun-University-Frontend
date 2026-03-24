import Link from "next/link";
import { CheckTwoSvg, UnCheckSvg } from "@/components/svg";

const membershipData = [
    {
      id: 1,
      title: 'Silver Membership',
      price: 24,
      validity: 'Valid for 2 months',
      features: [
        { text: 'Unlimited Classes', active: true },
        { text: 'Fitness Assessment', active: true },
        { text: 'Locker room with showers', active: true },
        { text: 'Guest Privileges', active: false },
        { text: 'Free parking', active: false },
      ],
      btnText: 'Join Course Plan',
      delay: '.3s',
      active: false
    },
    {
      id: 2,
      title: 'Gold Membership',
      price: 54,
      validity: 'Valid for 12 months',
      features: [
        { text: 'Unlimited Classes', active: true },
        { text: 'Fitness Assessment', active: true },
        { text: 'Locker room with showers', active: true },
        { text: 'Guest Privileges', active: true },
        { text: 'Free parking', active: false },
      ],
      btnText: 'Join Course Plan',
      delay: '.5s',
      active: true
    },
    {
      id: 3,
      title: 'Platinum Membership',
      price: 64,
      validity: 'Perfect for committed trainers',
      features: [
        { text: 'Unlimited Classes', active: true },
        { text: 'Fitness Assessment', active: true },
        { text: 'Locker room with showers', active: true },
        { text: 'Guest Privileges', active: true },
        { text: 'Free parking', active: true },
      ],
      btnText: 'Join Course Plan',
      delay: '.7s',
      active: false
    },
  ];
  
  export default function MembershipArea() {
    return (
      <section className="tp-membership-area pt-120 pb-60">
        <div className="container">
          <div className="row">
            {membershipData.map((plan) => (
              <div className="col-lg-4 col-md-6" key={plan.id}>
                <div className={`tp-pricing-5-item ${plan.active ? 'active tp-pricing-inner-head' : ''} mb-40 wow fadeInUp`} data-wow-delay={plan.delay}>
                  <div className={`tp-pricing-5-head ${plan.active ? '' : 'tp-pricing-inner-head'}`}>
                    <div className="tp-pricing-5-head-text">
                      <h4 className="tp-pricing-5-head-title">{plan.title}</h4>
                      <span>{plan.validity}</span>
                    </div>
                    <h2 className="tp-pricing-5-price">
                      <span>$</span> {plan.price} <b>/ Month</b>
                    </h2>
                  </div>
                  <div className="tp-pricing-5-list">
                    <ul>
                      {plan.features.map((feature, index) => (
                        <li key={index} className={feature.active ? '' : 'inactive'}>
                          <span>{feature.active ? <CheckTwoSvg /> : <UnCheckSvg />}</span>
                          {feature.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="tp-pricing-inner-btn">
                    <Link className="tp-btn-4" href="/contact">{plan.btnText}</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
