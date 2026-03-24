import { BillingAddress, ShippingAddress } from "@/components/svg";

const addressData = [
  {
    type: "Billing Address",
    icon: <BillingAddress />,
    details: {
      street: "3576 Glen Street",
      city: "Summer Shade",
      state: "Kentucky",
      phone: "270-428-8378",
      zip: "42166",
      countryCode: "+1",
      country: "United States",
    },
  },
  {
    type: "Shipping Address",
    icon: <ShippingAddress />,
    details: {
      street: "3133 Lewis Street",
      city: "Naperville",
      state: "Illinois",
      phone: "630-857-9127",
      zip: "60563",
      countryCode: "+1",
      country: "United States",
    },
  },
];

export default function ProfileAddress() {
  return (
    <div className="profile__address">
      <div className="row">
        {addressData.map((address, index) => (
          <div key={index} className="col-md-6">
            <div className="profile__address-item d-sm-flex align-items-start">
              <div className="profile__address-icon">
                <span>{address.icon}</span>
              </div>
              <div className="profile__address-content">
                <h3 className="profile__address-title">{address.type}</h3>
                <p><span>Street:</span> {address.details.street}</p>
                <p><span>City:</span> {address.details.city}</p>
                <p><span>State/province/area:</span> {address.details.state}</p>
                <p><span>Phone number:</span> {address.details.phone}</p>
                <p><span>Zip code:</span> {address.details.zip}</p>
                <p><span>Country calling code:</span> {address.details.countryCode}</p>
                <p><span>Country:</span> {address.details.country}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
