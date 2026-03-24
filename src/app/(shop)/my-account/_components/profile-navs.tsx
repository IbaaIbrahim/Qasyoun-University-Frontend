const navItems = [
  { id: "nav-profile-tab", target: "#nav-profile", icon: "fa-regular fa-user-pen", label: "Profile", active: true },
  { id: "nav-information-tab", target: "#nav-information", icon: "fa-regular fa-circle-info", label: "Information", active: false },
  { id: "nav-address-tab", target: "#nav-address", icon: "fa-light fa-location-dot", label: "Address", active: false },
  { id: "nav-order-tab", target: "#nav-order", icon: "fa-light fa-clipboard-list-check", label: "My Orders", active: false },
  { id: "nav-notification-tab", target: "#nav-notification", icon: "fa-regular fa-bell", label: "Notification", active: false },
  { id: "nav-password-tab", target: "#nav-password", icon: "fa-regular fa-lock", label: "Change Password", active: false },
];

export default function ProfileNavTabs() {
  return (
    <nav>
      <div className="nav nav-tabs tp-tab-menu flex-column" id="profile-tab" role="tablist">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`nav-link ${item.active ? "active" : ""}`}
            id={item.id}
            data-bs-toggle="tab"
            data-bs-target={item.target}
            type="button"
            role="tab"
            aria-controls={item.target.slice(1)}
            aria-selected={item.active ? "true" : "false"}
            tabIndex={item.active ? 0 : -1}
          >
            <span><i className={item.icon}></i></span> {item.label}
          </button>
        ))}
        <span id="marker-vertical" className="tp-tab-line d-none d-sm-inline-block"></span>
      </div>
    </nav>
  );
}
