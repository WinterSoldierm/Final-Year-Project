// import React, { useState } from "react";
// import "./AssetIdentification.scss";

// const AssetIdentification = () => {
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileChange = (event) => {
//     // Handle file selection
//     const file = event.target.files[0];
//     setSelectedFile(file);
//   };

//   const handleBrowseClick = () => {
//     // Trigger file input click
//     document.getElementById("fileInput").click();
//   };

//   const handleAnalyzeClick = () => {
//     // Handle analyze logic using the selected file
//     if (selectedFile) {
//       console.log("Analyzing file:", selectedFile);
//       // Add your analyze logic here
//     } else {
//       console.log("No file selected.");
//     }
//   };

//   return (
//     <div className="asset-card">
//       <h2>Asset Identification</h2>
//       <div className="file-upload">
//         <div className="file-input-container">
//           <input
//             type="file"
//             accept=".pcap"
//             id="fileInput"
//             onChange={handleFileChange}
//             style={{ display: "none" }}
//           />

//           <label htmlFor="fileInput">Upload File</label>
//         </div>
//         <button onClick={handleBrowseClick}>Browse</button>
//       </div>
//       <button className="analyze-btn" onClick={handleAnalyzeClick}>
//         Analyze
//       </button>
//     </div>
//   );
// };

// export default AssetIdentification;

// import React, { useState } from "react";
// import axios from "axios";
// import "./AssetIdentification.scss";

// const AssetIdentification = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [fileUploaded, setFileUploaded] = useState(false);
//   const [organization, setOrganization] = useState(null);
//   const [error, setError] = useState("");

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     setSelectedFile(file);
//     setFileUploaded(false);
//   };

//   const handleBrowseClick = () => {
//     document.getElementById("fileInput").click();
//   };

//   const handleAnalyzeClick = async () => {
//     if (selectedFile) {
//       await uploadFile();
//       setFileUploaded(true);

//       try {
//         const response = await axios.post(
//           "http://127.0.0.1:5000/mac-oui-lookup",
//           { mac_address: selectedFile }
//         );
//         setOrganization(response.data.organization);
//       } catch (error) {
//         setError("Error performing MAC OUI lookup");
//       }

//       console.log("Analyzing file:", selectedFile);
//     } else {
//       console.log("No file selected.");
//     }
//   };

//   const uploadFile = async () => {
//     const formData = new FormData();
//     formData.append("file", selectedFile);

//     try {
//       await axios.post("http://127.0.0.1:5000/upload", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       console.log("File uploaded successfully");
//     } catch (error) {
//       console.error("Error uploading file:", error);
//     }
//   };

//   return (
//     <div className="asset-card">
//       <h2>Asset Identification</h2>
//       <div className="file-upload">
//         <div className="file-input-container">
//           <input
//             type="file"
//             accept=".pcap"
//             id="fileInput"
//             onChange={handleFileChange}
//             style={{ display: "none" }}
//           />
//           <label htmlFor="fileInput">Upload File</label>
//         </div>
//         <button onClick={handleBrowseClick}>Browse</button>
//       </div>
//       <button className="analyze-btn" onClick={handleAnalyzeClick}>
//         Analyze
//       </button>
//       {fileUploaded && (
//         <div>
//           <p>File Uploaded Successfully!</p>
//           {organization && <p>Organization: {organization}</p>}
//           {error && <p>{error}</p>}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AssetIdentification;


// import React, { useState } from "react";
// import axios from "axios";
// import "./AssetIdentification.scss";

// const AssetIdentification = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [fileUploaded, setFileUploaded] = useState(false);
//   const [macData, setMacData] = useState([]);
//   const [error, setError] = useState("");

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     setSelectedFile(file);
//     setFileUploaded(false);
//   };

//   const handleBrowseClick = () => {
//     document.getElementById("fileInput").click();
//   };

//   const handleAnalyzeClick = async () => {
//     if (selectedFile) {
//       await uploadFile();
//       setFileUploaded(true);

//       try {
//         const response = await axios.post(
//           "http://127.0.0.1:5000/mac-oui-lookup",
//           { mac_address: selectedFile.name }
//         );

//         // Update state with the received MAC OUI lookup data
//         setMacData(response.data.mac_lookup);
//       } catch (error) {
//         setError("Error performing MAC OUI lookup");
//       }

//       console.log("Analyzing file:", selectedFile);
//     } else {
//       console.log("No file selected.");
//     }
//   };

//   const uploadFile = async () => {
//     const formData = new FormData();
//     formData.append("file", selectedFile);

//     try {
//       await axios.post("http://127.0.0.1:5000/upload", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       console.log("File uploaded successfully");
//     } catch (error) {
//       console.error("Error uploading file:", error);
//     }
//   };

//   return (
//     <div className="asset-card">
//       <h2>Asset Identification</h2>
//       <div className="file-upload">
//         <div className="file-input-container">
//           <input
//             type="file"
//             accept=".pcap"
//             id="fileInput"
//             onChange={handleFileChange}
//             style={{ display: "none" }}
//           />
//           <label htmlFor="fileInput">Upload File</label>
//         </div>
//         <button onClick={handleBrowseClick}>Upload</button>
//       </div>
//       <button className="analyze-btn" onClick={handleAnalyzeClick}>
//         Analyze
//       </button>
//       {fileUploaded && (
//         <div>
//           <p>File Uploaded Successfully!</p>
//           {macData.length > 0 && (
//             <div>
//               <h3>MAC OUI Lookup Results:</h3>
//               <ul>
//                 {macData.map((mac, index) => (
//                   <li key={index}>{mac}</li>
//                 ))}
//               </ul>
//             </div>
//           )}
//           {error && <p>{error}</p>}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AssetIdentification;


// AssetIdentification.jsx

// import React, { useState } from "react";
// import axios from "axios";
// import "./AssetIdentification.scss";

// const AssetIdentification = ({ onFileUpload }) => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [fileUploaded, setFileUploaded] = useState(false);
//   const [macData, setMacData] = useState([]);
//   const [error, setError] = useState("");

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     setSelectedFile(file);
//     setFileUploaded(false);
//   };

//   const handleBrowseClick = () => {
//     document.getElementById("fileInput").click();
//   };

//   const handleAnalyzeClick = async () => {
//     if (selectedFile) {
//       await uploadFile();
//       setFileUploaded(true);

//       try {
//         const response = await axios.post(
//           "http://127.0.0.1:5000/mac-oui-lookup",
//           { mac_address: selectedFile.name }
//         );

//         // Update state with the received MAC OUI lookup data
//         setMacData(response.data.mac_lookup);
//       } catch (error) {
//         setError("Error performing MAC OUI lookup");
//       }
//     } else {
//       console.log("No file selected.");
//     }
//   };

//   const uploadFile = async () => {
//     const formData = new FormData();
//     formData.append("file", selectedFile);

//     try {
//       await axios.post("http://127.0.0.1:5000/upload", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       console.log("File uploaded successfully");
//       onFileUpload(); // Notify the parent component that the file is uploaded
//     } catch (error) {
//       console.error("Error uploading file:", error);
//     }
//   };

//   return (
//     <div className="asset-card">
//       <h2>Asset Identification</h2>
//       <div className="file-upload">
//         <div className="file-input-container">
//           <input
//             type="file"
//             accept=".pcap"
//             id="fileInput"
//             onChange={handleFileChange}
//             style={{ display: "none" }}
//           />
//           <label htmlFor="fileInput">Upload File</label>
//         </div>
//         <button onClick={handleBrowseClick}>Upload</button>
//       </div>
//       <button className="analyze-btn" onClick={handleAnalyzeClick}>
//         Analyze
//       </button>
//       {fileUploaded && (
//         <div>
//           <p>File Uploaded Successfully!</p>
//           {macData.length > 0 && (
//             <div>
//               <h3>MAC OUI Lookup Results:</h3>
//               <ul>
//                 {macData.map((mac, index) => (
//                   <li key={index}>{mac}</li>
//                 ))}
//               </ul>
//             </div>
//           )}
//           {error && <p>{error}</p>}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AssetIdentification;


import React, { useState } from "react";
import axios from "axios";
import "./AssetIdentification.scss";

const AssetIdentification = ({ onFileUpload, onMacDataUpdate }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setFileUploaded(false);
  };

  const handleBrowseClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleAnalyzeClick = async () => {
    if (selectedFile) {
      await uploadFile();
      setFileUploaded(true);

      try {
        const response = await axios.post(
          "http://127.0.0.1:5000/mac-oui-lookup",
          { mac_address: selectedFile.name }
        );

        // Update state with the received MAC OUI lookup data
        onMacDataUpdate(response.data.mac_lookup);
      } catch (error) {
        setError("Error performing MAC OUI lookup");
      }
    } else {
      console.log("No file selected.");
    }
  };

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      await axios.post("http://127.0.0.1:5000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("File uploaded successfully");
      onFileUpload(); // Notify the parent component that the file is uploaded
    } catch (error) {
      console.error("Error uploading file:", error);
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
        <button onClick={handleBrowseClick}>Upload</button>
      </div>
      <button className="analyze-btn" onClick={handleAnalyzeClick}>
        Analyze
      </button>
      {fileUploaded && (
        <div>
          <p>File Uploaded Successfully!</p>
          {error && <p>{error}</p>}
        </div>
      )}
    </div>
  );
};

export default AssetIdentification;
