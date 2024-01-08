// import React from "react";
// import "./AssetTableCard.scss";

// const AssetTableCard = () => {
//   // Example data for the table
//   const tableData = [
//     {
//       macAddress: "00:11:22:33:44:55",
//       vendor: "Vendor A",
//       devices: 5,
//       protocol: "TCP",
//       count: 20,
//     },
//     {
//       macAddress: "66:77:88:99:AA:BB",
//       vendor: "Vendor B",
//       devices: 8,
//       protocol: "UDP",
//       count: 15,
//     },
//     // Add more rows as needed
//   ];

//   return (
//     <div className="asset-table-card">
//       <h2>Asset Table</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Mac Address</th>
//             <th>Vendor</th>
//             <th>Devices</th>
//             <th>Protocol</th>
//             <th>Count</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tableData.map((row, index) => (
//             <tr key={index}>
//               <td>{row.macAddress}</td>
//               <td>{row.vendor}</td>
//               <td>{row.devices}</td>
//               <td>{row.protocol}</td>
//               <td>{row.count}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AssetTableCard;

// import React, { useState, useEffect } from "react";
// import "./AssetTableCard.scss";

// const AssetTableCard = () => {
//   const [macData, setMacData] = useState([]);

//   // Example data for the table
//   const initialTableData = [
//     {
//       macAddress: "00:11:22:33:44:55",
//       vendor: "Vendor A",
//       devices: 5,
//       protocol: "TCP",
//       count: 20,
//     },
//     {
//       macAddress: "66:77:88:99:AA:BB",
//       vendor: "Vendor B",
//       devices: 8,
//       protocol: "UDP",
//       count: 15,
//     },
//     // Add more rows as needed
//   ];

//   useEffect(() => {
//     // Replace this with the actual API endpoint used to fetch MAC OUI lookup results
//     // For example, if your Flask endpoint returns MAC OUI lookup results at '/mac-oui-lookup':
//     fetch("http://127.0.0.1:5000/mac-oui-lookup")
//       .then((response) => response.json())
//       .then((data) => {
//         // Update state with the received MAC OUI lookup data
//         setMacData(data.mac_lookup);
//       })
//       .catch((error) => console.error("Error fetching MAC OUI lookup:", error));
//   }, []);

//   const tableData = macData.length > 0 ? macData : initialTableData;

//   return (
//     <div className="asset-table-card">
//       <h2>Asset Table</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Mac Address</th>
//             <th>Vendor</th>
//             {/* <th>Devices</th>
//             <th>Protocol</th>
//             <th>Count</th> */}
//           </tr>
//         </thead>
//         <tbody>
//           {tableData.map((row, index) => (
//             <tr key={index}>
//               <td>{row.macAddress}</td>
//               <td>{row.vendor}</td>
//               {/* <td>{row.devices}</td>
//               <td>{row.protocol}</td>
//               <td>{row.count}</td> */}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AssetTableCard;

// import React, { useState, useEffect } from "react";
// import "./AssetTableCard.scss";

// const AssetTableCard = () => {
//   const [macData, setMacData] = useState([]);

//   // useEffect(() => {
//   //   // Make a POST request to the '/mac-oui-lookup' endpoint to fetch data
//   //   fetch("http://127.0.0.1:5000/mac-oui-lookup", {
//   //     method: "POST",
//   //   })
//   //     .then((response) => response.json())
//   //     .then((data) => {
//   //       // Update state with the received MAC OUI lookup data
//   //       setMacData(data.mac_lookup);
//   //     })
//   //     .catch((error) => console.error("Error fetching MAC OUI lookup:", error));
//   // }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch("http://127.0.0.1:5000/mac-oui-lookup", {
//         method: "POST",
//       });
//       const data = await response.json();
//       setMacData(data.mac_lookup);
//     } catch (error) {
//       console.error("Error fetching MAC OUI lookup:", error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="asset-table-card">
//       <h2>Asset Table</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Mac Address</th>
//             <th>Vendor</th>
//           </tr>
//         </thead>
//         <tbody>
//           {macData.map((row, index) => (
//             <tr key={index}>
//               <td>{row.macAddress}</td>
//               <td>{row.vendor}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AssetTableCard;

import React, { useState, useEffect } from "react";
import "./AssetTableCard.scss";

const AssetTableCard = () => {
  const [macData, setMacData] = useState([]);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch("http://127.0.0.1:5000/mac-oui-lookup", {
  //       method: "POST",
  //     });
  //     const data = await response.json();

  //     // Check if data is an array before updating the state
  //     if (Array.isArray(data.mac_lookup)) {
  //       setMacData(data.mac_lookup);
  //     } else {
  //       console.error("Invalid data format:", data);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching MAC OUI lookup:", error);
  //   }
  // };

  const fetchData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/mac-oui-lookup", {
        method: "POST",
      });
      const data = await response.json();

      // Check if mac_lookup is an object and convert it to an array
      const macDataArray = Object.entries(data.mac_lookup).map(
        ([macAddress, vendor]) => ({
          macAddress,
          vendor,
        })
      );

      setMacData(macDataArray);
    } catch (error) {
      console.error("Error fetching MAC OUI lookup:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="asset-table-card">
      <h2>Asset Table</h2>
      <table>
        <thead>
          <tr>
            <th>Mac Address</th>
            <th>Vendor</th>
          </tr>
        </thead>
        <tbody>
          {/* Check if macData is an array before mapping over it */}
          {Array.isArray(macData) &&
            macData.map((row, index) => (
              <tr key={index}>
                <td>{row.macAddress}</td>
                <td>{row.vendor}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssetTableCard;
