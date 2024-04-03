import React from "react";
import { Routes, Route, NavLink, BrowserRouter } from "react-router-dom";

// import './important.js';
import { MdAssessment, MdDashboard, MdGroups2 } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import Mail from "./components/pages/mail";
import Analystics from "./components/pages/analyistics";
import Friends from "./components/pages/friend";
import Home from "./components/pages/home";
import Dashboard from "./components/pages/dashboard";
import Layout from "./components/pages/layout";
import NoPage from "./components/pages/notfound";

function App() {
  return (
    <div className="app">
      
      
        <Routes>
          
          <Route path="/" element={<Layout />}>
            <Route path="/Home" element={<Home />}></Route>
            <Route path="/Friends" element={<Friends />}></Route>
            <Route path="/Analystics" element={<Analystics />}></Route>
            <Route path="/Dashboard" element={<Dashboard />}></Route>
            <Route path="/Mail" element={<Mail />}></Route>
            <Route path="*" element={<NoPage/>}/>
            
          </Route>
        </Routes>
    </div>
  );
}

export default App;
