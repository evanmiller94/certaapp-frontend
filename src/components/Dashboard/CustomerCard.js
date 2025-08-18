import React from "react";
import PropTypes from "prop-types";

function CustomerCard({ cust, onSend }) {
  return (
    <div
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
      <button onClick={() => onSend(cust)} style={{ padding: "6px 12px" }}>
        Send communication
      </button>
    </div>
  );
}

CustomerCard.propTypes = {
  cust: PropTypes.shape({
    displayName: PropTypes.string.isRequired,
    property: PropTypes.string.isRequired,
  }).isRequired,
  onSend: PropTypes.func.isRequired,
};

export default CustomerCard;
