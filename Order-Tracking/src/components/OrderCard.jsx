function OrderCard({ order }) {
  return (
    <div className="order-card">
      <div className="order-top">
        <span className="order-id">{order.id}</span>
        <span className={`status ${order.status.toLowerCase()}`}>
          {order.status}
        </span>
        <span className="price">${order.price}</span>
      </div>

      <p>{order.name}</p>
      <div className="order-info">
        <span>{order.items} items</span>
        <span>{order.city}</span>
        <span>{order.date}</span>
      </div>
    </div>
  );
}

export default OrderCard;
