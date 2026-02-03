import { useState, useEffect } from 'react';
import OrderCard from '../components/OrderCard';

export default function Dashboard() {
  const [orders, setOrders] = useState([]);
  const [filterStatus, setFilterStatus] = useState('all');
  const username = localStorage.getItem('username');
  const userEmail = localStorage.getItem('currentUserEmail');

  useEffect(() => {
    // Initialize sample orders if none exist for this user
    const allOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    const userOrders = allOrders.filter(order => order.userEmail === userEmail);
    
    if (userOrders.length === 0) {
      const sampleOrders = [
        {
          id: 'ORD' + Date.now(),
          userEmail: userEmail,
          date: new Date().toISOString(),
          status: 'shipped',
          items: [
            { name: 'Wireless Headphones', quantity: 1 },
            { name: 'Phone Case', quantity: 2 }
          ],
          total: 89.99,
          shippingAddress: '123 Main St, New York, NY 10001',
          trackingNumber: 'TRK' + Math.random().toString(36).substr(2, 9).toUpperCase()
        },
        {
          id: 'ORD' + (Date.now() + 1),
          userEmail: userEmail,
          date: new Date(Date.now() - 86400000).toISOString(),
          status: 'processing',
          items: [
            { name: 'Laptop Stand', quantity: 1 }
          ],
          total: 45.50,
          shippingAddress: '123 Main St, New York, NY 10001',
          trackingNumber: 'TRK' + Math.random().toString(36).substr(2, 9).toUpperCase()
        },
        {
          id: 'ORD' + (Date.now() + 2),
          userEmail: userEmail,
          date: new Date(Date.now() - 172800000).toISOString(),
          status: 'delivered',
          items: [
            { name: 'USB-C Cable', quantity: 3 },
            { name: 'Wireless Mouse', quantity: 1 }
          ],
          total: 67.25,
          shippingAddress: '123 Main St, New York, NY 10001',
          trackingNumber: 'TRK' + Math.random().toString(36).substr(2, 9).toUpperCase()
        }
      ];
      
      const updatedOrders = [...allOrders, ...sampleOrders];
      localStorage.setItem('orders', JSON.stringify(updatedOrders));
      setOrders(sampleOrders);
    } else {
      setOrders(userOrders);
    }
  }, [userEmail]);

  const filteredOrders = filterStatus === 'all' 
    ? orders 
    : orders.filter(order => order.status === filterStatus);

  const getOrderStats = () => {
    return {
      total: orders.length,
      pending: orders.filter(o => o.status === 'pending').length,
      processing: orders.filter(o => o.status === 'processing').length,
      shipped: orders.filter(o => o.status === 'shipped').length,
      delivered: orders.filter(o => o.status === 'delivered').length
    };
  };

  const stats = getOrderStats();

  return (
    <div className="page-container">
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h1>Welcome back, {username}!</h1>
          <p>Manage and track all your orders in one place</p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">📦</div>
            <div className="stat-info">
              <h3>{stats.total}</h3>
              <p>Total Orders</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">⚙️</div>
            <div className="stat-info">
              <h3>{stats.processing}</h3>
              <p>Processing</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🚚</div>
            <div className="stat-info">
              <h3>{stats.shipped}</h3>
              <p>Shipped</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">✅</div>
            <div className="stat-info">
              <h3>{stats.delivered}</h3>
              <p>Delivered</p>
            </div>
          </div>
        </div>

        <div className="orders-section">
          <div className="section-header">
            <h2>Your Orders</h2>
            <div className="filter-buttons">
              <button 
                className={filterStatus === 'all' ? 'active' : ''}
                onClick={() => setFilterStatus('all')}
              >
                All
              </button>
              <button 
                className={filterStatus === 'pending' ? 'active' : ''}
                onClick={() => setFilterStatus('pending')}
              >
                Pending
              </button>
              <button 
                className={filterStatus === 'processing' ? 'active' : ''}
                onClick={() => setFilterStatus('processing')}
              >
                Processing
              </button>
              <button 
                className={filterStatus === 'shipped' ? 'active' : ''}
                onClick={() => setFilterStatus('shipped')}
              >
                Shipped
              </button>
              <button 
                className={filterStatus === 'delivered' ? 'active' : ''}
                onClick={() => setFilterStatus('delivered')}
              >
                Delivered
              </button>
            </div>
          </div>

          <div className="orders-grid">
            {filteredOrders.length > 0 ? (
              filteredOrders.map(order => (
                <OrderCard key={order.id} order={order} />
              ))
            ) : (
              <div className="empty-state">
                <p>No orders found with status: {filterStatus}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
