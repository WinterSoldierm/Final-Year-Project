import React, { useState } from "react";
import AssetIdentification from "./Asses_Identification/AssetIdentification";
import FilterCard from "./Filter/FilterCard";
import "./Home.scss";
import AssetTableCard from "./Asset_Table/AssetTableCard";

const Home = () => {
  const [fileUploaded, setFileUploaded] = useState();
  const [macData, setMacData] = useState([]);

  const handleFileUpload = () => {
    setFileUploaded(true);
  };

  const handleMacDataUpdate = (data) => {
    setMacData(data);
  };

  return (
    <div className="home-container">
      <AssetIdentification
        onFileUpload={handleFileUpload}
        onMacDataUpdate={handleMacDataUpdate}
      />
      {fileUploaded && <AssetTableCard macData={macData} />}
      <FilterCard />
    </div>
  );
};

export default Home;
