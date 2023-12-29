import React, { useState } from "react";
import "./AssetIdentification.scss";

const AssetIdentification = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    // Handle file selection
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleBrowseClick = () => {
    // Trigger file input click
    document.getElementById("fileInput").click();
  };

  const handleAnalyzeClick = () => {
    // Handle analyze logic using the selected file
    if (selectedFile) {
      console.log("Analyzing file:", selectedFile);
      // Add your analyze logic here
    } else {
      console.log("No file selected.");
    }
  };

  return (
    <div className="asset-card">
      <h2>Asset Identification</h2>
      <div className="file-upload">
        <div className="file-input-container">
          <input
            type="file"
            accept=".pcap"
            id="fileInput"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />

          <label htmlFor="fileInput">Upload File</label>
        </div>
        <button onClick={handleBrowseClick}>Browse</button>
      </div>
      <button className="analyze-btn" onClick={handleAnalyzeClick}>
        Analyze
      </button>
    </div>
  );
};

export default AssetIdentification;
