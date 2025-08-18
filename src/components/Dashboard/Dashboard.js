import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { Routes, Route, Navigate } from "react-router-dom";
import UploadView from "./UploadView";
import CustomerListView from "./CustomerListView";
import NavBar from "../NavBar";

function Dashboard({ username, onLogout }) {
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
    setCustomers(uploadedCustomers || []);
  };

  const handleSortChange = (newSortKey) => {
    setSortKey(newSortKey);
    setSearchTerm(""); // reset search
  };

  return (
    <div style={{ maxWidth: 800, margin: "auto", padding: 20 }}>
      <NavBar username={username} onLogout={onLogout} />

      <main style={{ border: "1px solid #ddd", padding: 20 }}>
        <Routes>
          <Route
            path="/upload"
            element={<UploadView onUpload={handleUploadComplete} />}
          />
          <Route
            path="/customers"
            element={
              <CustomerListView
                customers={customers}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                sortKey={sortKey}
                onSortChange={handleSortChange}
              />
            }
          />
          <Route path="/" element={<Navigate to="/customers" />} />
        </Routes>
      </main>
    </div>
  );
}

Dashboard.propTypes = {
  username: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default Dashboard;
