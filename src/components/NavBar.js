import React from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

function NavBar({ username, onLogout }) {
  const location = useLocation();
  const activeTab = location.pathname.includes("upload")
    ? "upload"
    : "customers";

  return (
    <>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <h2>Hello, {username}!</h2>
        <button onClick={onLogout} style={{ padding: 8 }}>
          Logout
        </button>
      </header>

      {/* Tabs */}
      <nav style={{ display: "flex", marginBottom: 20 }}>
        <Link
          to="/upload"
          style={{
            flex: 1,
            padding: 10,
            backgroundColor: activeTab === "upload" ? "#ccc" : "#eee",
            textAlign: "center",
            textDecoration: "none",
            color: "black",
          }}
        >
          Upload Excel
        </Link>
        <Link
          to="/customers"
          style={{
            flex: 1,
            padding: 10,
            backgroundColor: activeTab === "customers" ? "#ccc" : "#eee",
            textAlign: "center",
            textDecoration: "none",
            color: "black",
          }}
        >
          Customer List
        </Link>
      </nav>
    </>
  );
}

NavBar.propTypes = {
  username: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default NavBar;
