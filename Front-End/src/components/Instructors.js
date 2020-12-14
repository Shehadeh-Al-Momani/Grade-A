import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Account from "./instructors/Account";
import Courses from "./instructors/Courses";
import Lesson from "./instructors/Lesson";

export default function Instructors() {
  return (
    <Router>
      <div>
        <p>instructor</p>
        <div style={sidenav}>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link to="/account" style={linkStyle} href="#about">
                Account
              </Link>
            </li>
            <li>
              <Link to="/mycourse" style={linkStyle} href="#clients">
                My Courses
              </Link>
            </li>
            <li>
              <Link to="/lesson" style={linkStyle} href="#contact">
                Lesson
              </Link>
            </li>
            <li>
              <Link to="/logout" style={linkStyle} href="#services">
                LogOut
              </Link>
            </li>
          </ul>
        </div>
        <div style={main}>
          <Route path="/account">
            <div>
              <Account></Account>
            </div>
          </Route>
          <Route path="/Logout">
            <div>
              <p>LogOut</p>
            </div>
          </Route>
          <Route path="/mycourse">
            <div>
              <Courses></Courses>
            </div>
          </Route>
          <Route path="/lesson">
            <div>
              <Lesson></Lesson>
            </div>
          </Route>
        </div>
      </div>
    </Router>
  );
}

const sidenav = {
  height: "100%",
  width: "260px",
  position: "fixed",
  zIndex: "1",
  top: "0",
  left: "0",
  backgroundColor: " #111",
  overflowX: "hidden",
  paddingTop: "20px",
};

const linkStyle = {
  padding: "6px 8px 6px 16px",
  textDecoration: "none",
  fontSize: "25px",
  color: "#818181",
  display: "block",
};

const main = {
  marginLeft: "260px" /* Same as the width of the sidenav */,
  fontSize: "28px", //ncreased text to enable scrolling */
  padding: "0px 10px",
};
