import React from "react";
import AssetIdentification from "./Asses_Identification/AssetIdentification";
import FilterCard from "./Filter/FilterCard";
import "./Home.scss";
import AssetTableCard from "./Asset_Table/AssetTableCard";

const Home = () => {
  return (
    <div className="home-container">
      <AssetIdentification />
      <FilterCard />
      <AssetTableCard />
    </div>
  );
};

export default Home;
