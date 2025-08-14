import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import UploadView from "./UploadView";
import CustomerListView from "./CustomerListView";
import NavBar from "../NavBar";

function Dashboard({ username, onLogout }) {
  const [activeTab, setActiveTab] = useState("upload"); // 'upload' or 'customers'

  return (
    <div style={{ maxWidth: 800, margin: "auto", padding: 20 }}>
      <NavBar
        username={username}
        onLogout={onLogout}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Content */}
      <main style={{ border: "1px solid #ddd", padding: 20 }}>
        {activeTab === "upload" && <UploadView />}
        {activeTab === "customers" && <CustomerListView />}
      </main>
    </div>
  );
}

Dashboard.propTypes = {
  username: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default Dashboard;
