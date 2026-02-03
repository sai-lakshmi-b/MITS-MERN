import { useState } from "react";
import { orders } from "../data";

function OrderSearch() {
  const [platform, setPlatform] = useState("Amazon");
  const [orderId, setOrderId] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = () => {
    // ✅ CLEAN USER INPUT
    const cleanedOrderId = orderId.trim().toUpperCase();

    // ✅ FIND ORDER BASED ON PLATFORM + ORDER ID
    const found = orders.find(
      (order) =>
        order.platform === platform &&
        order.id.toUpperCase() === cleanedOrderId
    );

    if (found) {
      setResult(found);
      setError("");
    } else {
      setResult(null);
      setError("❌ Order ID not available in selected platform");
    }
  };

  return (
    <div className="search-box">
      <h2>🔎 Track Your Order</h2>

      <div className="search-input">
        {/* Platform selection */}
        <select
          value={platform}
          onChange={(e) => {
            setPlatform(e.target.value);
            setOrderId("");
            setResult(null);
            setError("");
          }}
        >
          <option value="Amazon">Amazon</option>
          <option value="Flipkart">Flipkart</option>
          <option value="Zomato">Zomato</option>
          <option value="Swiggy">Swiggy</option>
        </select>

        {/* Order ID input */}
        <input
          type="text"
          placeholder="Enter Order ID (e.g. A101)"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
        />

        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Error message */}
      {error && <p className="error-text">{error}</p>}

      {/* Order details */}
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
