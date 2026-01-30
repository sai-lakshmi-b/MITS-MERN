function Navbar({ user, setUser }) {
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <span>📦</span>
        <span>Order Tracking System</span>
      </div>

      <div className="navbar-right">
        <span>👤 {user?.name}</span>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
