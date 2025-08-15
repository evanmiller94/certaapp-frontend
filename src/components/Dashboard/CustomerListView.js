import React from "react";
import PropTypes from "prop-types";

function CustomerListView({ customers }) {
  //
  // TODO: add call to get from DB and won't take in param or anything
  // Will change up this view, just temp placeholder of return data for testing
  if (!customers.length) return <p>No customers uploaded yet.</p>;

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "0.85rem",
  };

  const thTdStyle = {
    border: "1px solid #ccc",
    padding: "4px 8px",
    textAlign: "left",
  };

  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={thTdStyle}>Occupant</th>
          <th style={thTdStyle}>Occupant Email</th>
          <th style={thTdStyle}>Occupant Phone</th>
          <th style={thTdStyle}>Owner</th>
          <th style={thTdStyle}>Property</th>
          <th style={thTdStyle}>Phone</th>
          <th style={thTdStyle}>Email</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((c, i) => (
          <tr key={i}>
            <td style={thTdStyle}>{c.occupant}</td>
            <td style={thTdStyle}>{c.occupantEmail}</td>
            <td style={thTdStyle}>{c.occupantPhone}</td>
            <td style={thTdStyle}>{c.owner}</td>
            <td style={thTdStyle}>{c.property}</td>
            <td style={thTdStyle}>{c.phone}</td>
            <td style={thTdStyle}>{c.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

CustomerListView.propTypes = {
  customers: PropTypes.array.isRequired,
};

export default CustomerListView;
