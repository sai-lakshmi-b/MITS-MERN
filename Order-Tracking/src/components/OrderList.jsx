import { useState } from "react";
import { orders } from "../data";
import OrderCard from "./OrderCard";

const filters = ["All", "Pending", "Processing", "Shipped", "Delivered", "Cancelled"];

function OrderList() {
  const [filter, setFilter] = useState("All");

  const filteredOrders =
    filter === "All"
      ? orders
      : orders.filter(order => order.status === filter);

  return (
    <div>
      <div className="filters">
        {filters.map(f => (
          <button
            key={f}
            className={filter === f ? "active" : ""}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <h3>Orders ({filteredOrders.length})</h3>

      {filteredOrders.map(order => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
}

export default OrderList;
