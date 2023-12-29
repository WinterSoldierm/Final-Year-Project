// FilterCard.js

import React, { useState, useEffect } from "react";
import "./FilterCard.scss";

const FilterCard = () => {
  const [protocols, setProtocols] = useState([]);
  const [sources, setSources] = useState([]);
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    // Fetch data from JSON files
    fetch("/protocol.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProtocols(data);
      });

    fetch("/source.json")
      .then((response) => response.json())
      .then((data) => setSources(data));

    fetch("/destination.json")
      .then((response) => response.json())
      .then((data) => setDestinations(data));
  }, []);

  return (
    <div className="filter-card">
      <h2>Filter</h2>
      <div className="dropdown-container">
        <select>
          <option value="">Select Protocol</option>
          {protocols.map((protocol) => (
            <option key={protocol.id} value={protocol.value}>
              {protocol.label}
            </option>
          ))}
        </select>
        <select>
          <option value="">Select Source</option>
          {sources.map((source) => (
            <option key={source.id} value={source.value}>
              {source.label}
            </option>
          ))}
        </select>
        <select>
          <option value="">Select Destination</option>
          {destinations.map((destination) => (
            <option key={destination.id} value={destination.value}>
              {destination.label}
            </option>
          ))}
        </select>
      </div>
      <button className="apply-btn">Apply</button>
    </div>
  );
};

export default FilterCard;
