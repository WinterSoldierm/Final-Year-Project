// AssetTableCard.js

import React from "react";
import "./AssetTableCard.scss";

const AssetTableCard = () => {
  // Example data for the table
  const tableData = [
    {
      macAddress: "00:11:22:33:44:55",
      vendor: "Vendor A",
      devices: 5,
      protocol: "TCP",
      count: 20,
    },
    {
      macAddress: "66:77:88:99:AA:BB",
      vendor: "Vendor B",
      devices: 8,
      protocol: "UDP",
      count: 15,
    },
    // Add more rows as needed
  ];

  return (
    <div className="asset-table-card">
      <h2>Asset Table</h2>
      <table>
        <thead>
          <tr>
            <th>Mac Address</th>
            <th>Vendor</th>
            <th>Devices</th>
            <th>Protocol</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.macAddress}</td>
              <td>{row.vendor}</td>
              <td>{row.devices}</td>
              <td>{row.protocol}</td>
              <td>{row.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssetTableCard;
