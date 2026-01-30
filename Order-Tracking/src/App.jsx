import { useState } from "react";
import Navbar from "./components/Navbar";
import OrderSearch from "./components/OrderSearch";
import Login from "./components/Login";
import Signup from "./components/Signup";
import "./index.css";

function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [showSignup, setShowSignup] = useState(false);

  if (!user) {
    return (
      <div className="container">
        {showSignup ? (
          <>
            <Signup setUser={setUser} />
            <p>
              Already have an account?{" "}
              <button onClick={() => setShowSignup(false)}>Login</button>
            </p>
          </>
        ) : (
          <>
            <Login setUser={setUser} />
            <p>
              Don't have an account?{" "}
              <button onClick={() => setShowSignup(true)}>Signup</button>
            </p>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="container">
      <Navbar user={user} setUser={setUser} />
      <OrderSearch />
    </div>
  );
}

export default App;
