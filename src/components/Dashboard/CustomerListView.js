import React, { useMemo } from "react";
import PropTypes from "prop-types";
import CustomerCard from "./CustomerCard";
import CustomerControls from "./CustomerControls";

function CustomerListView({
  customers,
  searchTerm,
  setSearchTerm,
  sortKey,
  onSortChange,
}) {
  //
  // TODO: add call to get from DB and won't take in param or anything
  // Will change up this view, just temp placeholder of return data for testing
  if (!customers.length) return <p>No customers uploaded yet.</p>;

  const handleSendCommunication = (customer) => {
    alert("Send communication to: " + customer.email + "\n" + customer.phone);
    // TODO: trigger backend API for email/SMS
  };

  const filteredCustomers = useMemo(() => {
    let filtered = customers;

    if (searchTerm.trim()) {
      filtered = filtered.filter((c) => {
        const field = sortKey === "property" ? c.property : c.displayName;
        return field.toLowerCase().includes(searchTerm.toLowerCase());
      });
    }

    return [...filtered].sort((a, b) => {
      if (sortKey === "name") return a.displayName.localeCompare(b.displayName);
      if (sortKey === "property") return a.property.localeCompare(b.property);
      return 0;
    });
  }, [customers, searchTerm, sortKey]);

  return (
    <div>
      <CustomerControls
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        sortKey={sortKey}
        onSortChange={onSortChange}
      />
      {filteredCustomers.map((cust) => (
        <CustomerCard
          key={`${cust.displayName}-${cust.property}`}
          cust={cust}
          onSend={handleSendCommunication}
        />
      ))}
    </div>
  );
}

CustomerListView.propTypes = {
  customers: PropTypes.array.isRequired,
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  sortKey: PropTypes.string.isRequired,
  setSortKey: PropTypes.func.isRequired,
  onSendCommunication: PropTypes.func.isRequired,
  onSortChange: PropTypes.func.isRequired,
};

export default CustomerListView;
