

const notificationData = [
  { id: "like", label: "Like & Follows Notifications", checked: true },
  { id: "post", label: "Post, Comments & Replies Notifications", checked: true },
  { id: "new", label: "New Product Notifications", checked: true },
  { id: "sale", label: "Product on sale Notifications", checked: true },
  { id: "payment", label: "Payment Notifications", checked: true },
];

export default function ProfileNotification() {
  return (
    <div className="profile__notification">
      <div className="profile__notification-top mb-30">
        <h3 className="profile__notification-title">My activity settings</h3>
        <p>
          Stay up to date with notifications on activity that involves you,
          including mentions, messages, replies to your bids, new items, sales,
          and administrative updates.
        </p>
      </div>
      <div className="profile__notification-wrapper">
        {notificationData.map((notification) => (
          <div className="profile__notification-item mb-20" key={notification.id}>
            <div className="form-check form-switch d-flex align-items-center">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id={notification.id}
                defaultChecked={notification.checked}
              />
              <label className="form-check-label" htmlFor={notification.id}>
                {notification.label}
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
