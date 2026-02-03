import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import OrderStatus from '../components/OrderStatus';

export default function TrackOrder() {
  const [searchParams] = useSearchParams();
  const [orderId, setOrderId] = useState(searchParams.get('orderId') || '');
  const [order, setOrder] = useState(null);
  const [error, setError] = useState('');
  const userEmail = localStorage.getItem('currentUserEmail');

  useEffect(() => {
    if (searchParams.get('orderId')) {
      handleTrack(searchParams.get('orderId'));
    }
  }, [searchParams]);

  const handleTrack = (id = orderId) => {
    setError('');
    setOrder(null);

    if (!id.trim()) {
      setError('Please enter an order ID');
      return;
    }

    const allOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    const foundOrder = allOrders.find(o => o.id === id && o.userEmail === userEmail);

    if (foundOrder) {
      setOrder(foundOrder);
    } else {
      setError('Order not found. Please check your order ID.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleTrack();
  };

  const getEstimatedDelivery = (status) => {
    const statuses = {
      pending: 'Processing within 24 hours',
      processing: '3-5 business days',
      shipped: '2-3 business days',
      delivered: 'Delivered'
    };
    return statuses[status] || 'Unknown';
  };

  return (
    <div className="page-container">
      <div className="track-container">
        <div className="track-header">
          <h1>Track Your Order</h1>
          <p>Enter your order ID to see real-time tracking information</p>
        </div>

        <form onSubmit={handleSubmit} className="track-form">
          <div className="search-group">
            <input
              type="text"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              placeholder="Enter Order ID (e.g., ORD123456789)"
              className="track-input"
            />
            <button type="submit" className="track-button">
              Track Order
            </button>
          </div>
        </form>

        {error && (
          <div className="error-box">
            <p>{error}</p>
          </div>
        )}

        {order && (
          <div className="tracking-result">
            <div className="result-header">
              <h2>Order #{order.id}</h2>
              <p className="order-date">
                Placed on {new Date(order.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>

            <OrderStatus status={order.status} />

            <div className="tracking-details">
              <div className="detail-section">
                <h3>Order Details</h3>
                <div className="detail-grid">
                  <div className="detail-item">
                    <span className="detail-label">Status:</span>
                    <span className="detail-value">
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Tracking Number:</span>
                    <span className="detail-value">
                      <code>{order.trackingNumber}</code>
                    </span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Estimated Delivery:</span>
                    <span className="detail-value">{getEstimatedDelivery(order.status)}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Total Amount:</span>
                    <span className="detail-value">${order.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="detail-section">
                <h3>Shipping Address</h3>
                <p className="address">{order.shippingAddress}</p>
              </div>

              <div className="detail-section">
                <h3>Items in This Order</h3>
                <div className="items-list">
                  {order.items.map((item, index) => (
                    <div key={index} className="item-row">
                      <span className="item-name">{item.name}</span>
                      <span className="item-qty">Quantity: {item.quantity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {order.status === 'shipped' && (
                <div className="detail-section tracking-updates">
                  <h3>Tracking Updates</h3>
                  <div className="timeline">
                    <div className="timeline-item">
                      <div className="timeline-dot"></div>
                      <div className="timeline-content">
                        <p className="timeline-title">Out for Delivery</p>
                        <p className="timeline-time">Today, 8:00 AM</p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-dot"></div>
                      <div className="timeline-content">
                        <p className="timeline-title">Arrived at Local Facility</p>
                        <p className="timeline-time">Yesterday, 6:30 PM</p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-dot"></div>
                      <div className="timeline-content">
                        <p className="timeline-title">In Transit</p>
                        <p className="timeline-time">2 days ago, 2:15 PM</p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-dot"></div>
                      <div className="timeline-content">
                        <p className="timeline-title">Shipped</p>
                        <p className="timeline-time">3 days ago, 10:00 AM</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {order.status === 'delivered' && (
                <div className="success-box">
                  <h3>✅ Order Delivered Successfully!</h3>
                  <p>Your order was delivered on {new Date(order.date).toLocaleDateString()}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
