import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import UploadView from "./UploadView";
import CustomerListView from "./CustomerListView";
import NavBar from "../NavBar";

function Dashboard({ username, onLogout }) {
  const [activeTab, setActiveTab] = useState("upload"); // 'upload' or 'customers'
  const [customers, setCustomers] = useState([]);

  // Persisted UI states for CustomerListView
  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState("name");

  //
  // TODO: This will not be necessary since the customer
  // list view will just pull from DB each time
  //
  // Receives the new customers from UploadView
  const handleUploadComplete = (uploadedCustomers) => {
    setCustomers(uploadedCustomers || []); // store them
    setActiveTab("customers"); // show list
  };

  const handleSortChange = (newSortKey) => {
    setSortKey(newSortKey);
    setSearchTerm(""); // reset search
  };

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
        {activeTab === "upload" && (
          <UploadView onUpload={handleUploadComplete} />
        )}
        {activeTab === "customers" && (
          <CustomerListView
            customers={customers}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            sortKey={sortKey}
            onSortChange={handleSortChange}
          />
        )}
      </main>
    </div>
  );
}

Dashboard.propTypes = {
  username: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default Dashboard;
