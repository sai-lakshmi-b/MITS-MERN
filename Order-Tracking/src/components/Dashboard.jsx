import { orders } from "../data";

function Dashboard() {
  const total = orders.length;
  const pending = orders.filter(o => o.status === "Pending").length;
  const shipped = orders.filter(o => o.status === "Shipped").length;
  const delivered = orders.filter(o => o.status === "Delivered").length;

  return (
    <div className="dashboard">
      <div className="card">Total Orders<br /><b>{total}</b></div>
      <div className="card">Pending<br /><b>{pending}</b></div>
      <div className="card">Shipped<br /><b>{shipped}</b></div>
      <div className="card">Delivered<br /><b>{delivered}</b></div>
    </div>
  );
}

export default Dashboard;
