import React from "react";
import PropTypes from "prop-types";

function CustomerListView({ customers }) {
  //
  // TODO: add call to get from DB and won't take in param or anything
  // Will change up this view, just temp placeholder of return data for testing
  if (!customers.length) return <p>No customers uploaded yet.</p>;

  return (
    <div>
      {customers.map((cust, index) => {
        return (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              padding: 10,
              marginBottom: 8,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <strong>{cust.displayName}</strong> — {cust.property}
            </div>
            <button
              onClick={() => {
                // For now just console.log, later hook up email/text
                alert(
                  "Send communication to: " + cust.email + "\n" + cust.phone
                );
              }}
              style={{ padding: "6px 12px" }}
            >
              Send communication
            </button>
          </div>
        );
      })}
    </div>
  );
}

CustomerListView.propTypes = {
  customers: PropTypes.array.isRequired,
};

export default CustomerListView;
