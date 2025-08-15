import React, { useState } from "react";
import PropTypes from "prop-types";

function UploadView({ onUpload }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  //
  // TODO: Add and area for manual single upload?
  //

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setStatus(null);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setStatus("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch("/api/upload-excel", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const uploadedCustomers = await response.json(); // Expect backend to send parsed list

        setStatus("Upload successful!");
        if (onUpload) onUpload(uploadedCustomers);
      } else {
        const errorText = await response.text();
        setStatus(`Upload failed: ${errorText}`);
      }
    } catch (err) {
      console.error(err);
      setStatus("An error occurred while uploading.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h3>Upload Excel File</h3>
      <input
        type="file"
        accept=".xlsx,.xls"
        onChange={handleFileChange}
        style={{ margin: "10px 0" }}
      />
      <br />
      {selectedFile && <p>Selected: {selectedFile.name}</p>}
      <button
        onClick={handleUpload}
        style={{ padding: "8px 16px" }}
        disabled={loading}
      >
        {loading ? "Uploading..." : "Upload"}
      </button>
      {status && <p>{status}</p>}
    </div>
  );
}

UploadView.propTypes = {
  onUpload: PropTypes.func,
};

export default UploadView;
