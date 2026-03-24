const orderData = [
  {
    id: "#2245",
    title: "How can I share?",
    status: "Pending",
    action: "Invoice",
  },
  {
    id: "#2220",
    title: "Send money, but not working",
    status: "Need your reply",
    action: "Reply",
  },
  {
    id: "#2125",
    title: "Balance error",
    status: "Resolved",
    action: "Invoice",
  },
  {
    id: "#2124",
    title: "How to decline bid",
    status: "On Hold",
    action: "Status",
  },
  {
    id: "#2121",
    title: "How to contact",
    status: "Resolved",
    action: "Invoice",
  },
];

export default function MyOrders() {
  return (
    <div className="profile__ticket table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Order Id</th>
            <th scope="col">Product Title</th>
            <th scope="col">Status</th>
            <th scope="col">View</th>
          </tr>
        </thead>
        <tbody>
          {orderData.map((order, index) => {
            let statusClass = '';
            switch (order.status.toLowerCase()) {
              case 'pending':
                statusClass = 'pending';
                break;
              case 'need your reply':
                statusClass = 'reply';
                break;
              case 'resolved':
                statusClass = 'done';
                break;
              case 'on hold':
                statusClass = 'hold';
                break;
              default:
                statusClass = 'pending';
            }

            return (
              <tr key={index}>
                <th scope="row">{order.id}</th>
                <td data-info="title">{order.title}</td>
                <td data-info={`status ${statusClass}`}>{order.status}</td>
                <td>
                  <a href="#" className="tp-logout-btn">{order.action}</a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
