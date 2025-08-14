import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

function Dashboard({ username, onLogout }) {
  const [activeTab, setActiveTab] = useState("upload"); // 'upload' or 'customers'

  return (
    <div style={{ maxWidth: 800, margin: "auto", padding: 20 }}>
      {/* Header / Navbar */}
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

      {/* Content */}
      <main style={{ border: "1px solid #ddd", padding: 20 }}>
        {activeTab === "upload" && <UploadView />}
        {activeTab === "customers" && <CustomerListView />}
      </main>
    </div>
  );
}

function UploadView() {
  return <div>Upload Excel functionality goes here.</div>;
}

function CustomerListView() {
  return <div>Customer list with statuses and alerts goes here.</div>;
}

Dashboard.propTypes = {
  username: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default Dashboard;
