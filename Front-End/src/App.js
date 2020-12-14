import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Instructors from "./components/Instructors";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Instructors />
    </Router>
  );
};

export default App;
