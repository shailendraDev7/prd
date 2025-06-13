import React, { useState } from "react";
import Sidebar from "../../prd/src/components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import DBSchema from "./components/prd/DBSchema";
import Diagram from "./components/prd/Diagram";
import DfdDocs from "./components/prd/DfdDocs";

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
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/dfd" element={<Diagram/>} />
          <Route path="/dashboard/dfddocs" element={<DfdDocs/>} />
          <Route path="/dashboard/dbschema" element={<DBSchema/>} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
