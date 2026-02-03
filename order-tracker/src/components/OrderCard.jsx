import { Link } from 'react-router-dom';

export default function OrderCard({ order }) {
  const getStatusBadge = (status) => {
    const badges = {
      pending: { text: 'Pending', color: '#ffa500' },
      processing: { text: 'Processing', color: '#2196F3' },
      shipped: { text: 'Shipped', color: '#9C27B0' },
      delivered: { text: 'Delivered', color: '#4CAF50' }
    };
    return badges[status] || badges.pending;
  };

  const badge = getStatusBadge(order.status);

  return (
    <div className="order-card">
      <div className="order-header">
        <div>
          <h3>Order #{order.id}</h3>
          <p className="order-date">{new Date(order.date).toLocaleDateString()}</p>
        </div>
        <span 
          className="status-badge" 
          style={{ backgroundColor: badge.color }}
        >
          {badge.text}
        </span>
      </div>

      <div className="order-body">
        <div className="order-items">
          <h4>Items:</h4>
          {order.items.map((item, index) => (
            <div key={index} className="order-item">
              <span>{item.name}</span>
              <span className="item-quantity">x{item.quantity}</span>
            </div>
          ))}
        </div>

        <div className="order-details">
          <div className="detail-row">
            <span>Total Amount:</span>
            <strong>${order.total.toFixed(2)}</strong>
          </div>
          <div className="detail-row">
            <span>Shipping Address:</span>
            <span>{order.shippingAddress}</span>
          </div>
          {order.trackingNumber && (
            <div className="detail-row">
              <span>Tracking Number:</span>
              <code>{order.trackingNumber}</code>
            </div>
          )}
        </div>
      </div>

      <div className="order-footer">
        <Link to={`/track?orderId=${order.id}`} className="track-button">
          Track Order
        </Link>
      </div>
    </div>
  );
}
