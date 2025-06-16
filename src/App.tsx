import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import DBSchema from "./components/SRS/DBSchema";
import Diagram from "./components/SRS/Diagram";
import DfdDocs from "./components/SRS/DfdDocs";
import Stack from "./components/Development/Stack";
import Sidebar from "./components/Sidebar";
import MOU from "./components/MOU";

function App() {
  const [sideMenuIsExpand, setSideMenuIsExpand] = useState(true);

  return (
    <div className="relative min-h-screen md:flex">
      <Sidebar setExpand={setSideMenuIsExpand} />
      <div
        className={`flex-1 min-h-screen mx-0 bg-slate-100 transition-all duration-300 ease-in-out ${
          sideMenuIsExpand ? "md:ml-72" : "md:ml-20"
        }`}
      >
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/SRS/dfd" element={<Diagram />} />
          <Route path="/SRS/dfddocs" element={<DfdDocs />} />
          <Route path="/SRS/dbschema" element={<DBSchema />} />
          <Route path="/development/stack" element={<Stack />} />
          <Route path="/mou" element={<MOU />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
