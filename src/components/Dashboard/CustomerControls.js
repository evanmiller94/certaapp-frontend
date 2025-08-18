import React from "react";
import PropTypes from "prop-types";

function CustomerControls({
  searchTerm,
  onSearchChange,
  sortKey,
  onSortChange,
}) {
  return (
    <div style={{ marginBottom: 12, display: "flex", gap: 8 }}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        style={{ flex: 1, padding: 6 }}
      />
      <select
        value={sortKey}
        onChange={(e) => onSortChange(e.target.value)}
        style={{ padding: 6 }}
      >
        <option value="name">Sort by Name</option>
        <option value="property">Sort by Property</option>
      </select>
    </div>
  );
}

CustomerControls.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  sortKey: PropTypes.string.isRequired,
  onSortChange: PropTypes.func.isRequired,
};

export default CustomerControls;
