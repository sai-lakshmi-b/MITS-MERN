import { useState } from "react";
import { orders } from "../data";

function OrderSearch() {
  const [orderId, setOrderId] = useState("");
  const [platform, setPlatform] = useState("Amazon");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = () => {
    const found = orders.find(
      (o) => o.id === orderId && o.platform === platform
    );

    if (found) {
      setResult(found);
      setError("");
    } else {
      setResult(null);
      setError("❌ Order not found for selected website");
    }
  };

  return (
    <div className="search-box">
      <h2>🔎 Track Your Order</h2>

      <div className="search-input">
        {/* Website Selection */}
        <select value={platform} onChange={(e) => setPlatform(e.target.value)}>
          <option>Amazon</option>
          <option>Flipkart</option>
          <option>Zomato</option>
          <option>Swiggy</option>
        </select>

        {/* Order ID Input */}
        <input
          type="text"
          placeholder="Enter Order ID"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
        />

        <button onClick={handleSearch}>Search</button>
      </div>

      {error && <p className="error-text">{error}</p>}

      {result && (
        <div className="order-details">
          <h3>📦 Order Details</h3>
          <p><b>Platform:</b> {result.platform}</p>
          <p><b>Order ID:</b> {result.id}</p>
          <p><b>Status:</b> {result.status}</p>
          <p><b>Customer:</b> {result.name}</p>
          <p><b>Price:</b> ₹{result.price}</p>
        </div>
      )}
    </div>
  );
}

export default OrderSearch;
