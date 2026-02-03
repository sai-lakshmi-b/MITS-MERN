export default function OrderStatus({ status }) {
  const statuses = [
    { key: 'pending', label: 'Order Placed', icon: '📝' },
    { key: 'processing', label: 'Processing', icon: '⚙️' },
    { key: 'shipped', label: 'Shipped', icon: '🚚' },
    { key: 'delivered', label: 'Delivered', icon: '✅' }
  ];

  const currentIndex = statuses.findIndex(s => s.key === status);

  return (
    <div className="order-status">
      <div className="status-timeline">
        {statuses.map((step, index) => (
          <div key={step.key} className="status-step">
            <div className={`status-icon ${index <= currentIndex ? 'active' : ''}`}>
              {step.icon}
            </div>
            <div className="status-label">{step.label}</div>
            {index < statuses.length - 1 && (
              <div className={`status-line ${index < currentIndex ? 'active' : ''}`}></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
