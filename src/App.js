import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Inner from "./pages/Inner/Inner";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { setEducations } from "./features/education/educationSlice";
import { setSkills, addSkill } from "./features/skills/skillsSlice";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inner" element={<Inner />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
