import React from "react";
import { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState(null); // logged-in username
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check localStorage for token on page load
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");

    if (token && username) {
      setUser(username);
    }
    setLoading(false);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setUser(null);
  };

  if (loading) {
    // Keep screen blank while checking token
    return null;
  }

  if (user) {
    // Logged-in dashboard
    return <Dashboard username={user} onLogout={handleLogout} />;
  }

  // Login form
  return <Login setUser={setUser} />;
}

export default App;
