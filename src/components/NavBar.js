import React from "react";
import PropTypes from "prop-types";

function NavBar({ username, onLogout, activeTab, setActiveTab }) {
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
        <button
          style={{
            flex: 1,
            padding: 10,
            backgroundColor: activeTab === "upload" ? "#ccc" : "#eee",
          }}
          onClick={() => setActiveTab("upload")}
        >
          Upload Excel
        </button>
        <button
          style={{
            flex: 1,
            padding: 10,
            backgroundColor: activeTab === "customers" ? "#ccc" : "#eee",
          }}
          onClick={() => setActiveTab("customers")}
        >
          Customer List
        </button>
      </nav>
    </>
  );
}

NavBar.propTypes = {
  username: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default NavBar;
