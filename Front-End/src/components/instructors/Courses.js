import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddNewCourse from "./AddNewCourse";
import GitAllCourse from "./GitAllCourse";
export default function Courses() {
  const [courses, setCourses] = useState();
  // [
  //   {
  //     id: "1",
  //     name: "React",
  //     price: "50",
  //     decription: "info",
  //     category: "web",
  //     image: "../images/page_1.jpg",
  //   },
  //   {
  //     id: "2",
  //     name: "React",
  //     price: "50",
  //     decription: "info",
  //     category: "web",
  //     image: "../images/reinsurance-service-solution-banner-mob.jpg",
  //   },
  //   {
  //     id: "3",
  //     name: "React",
  //     price: "50",
  //     decription: "info",
  //     category: "web",
  //     image: "../images/reinsurance-service-solution-banner-mob.jpg",
  //   },
  //   {
  //     id: "4",
  //     name: "React",
  //     price: "50",
  //     decription: "info",
  //     category: "web",
  //     image: "../images/reinsurance-service-solution-banner-mob.jpg",
  //   },
  // ]
  useEffect(() => {
    axios
      .get("http://localhost:5000/instructors/courses")
      .then((res) => {
        setCourses(res.data);
      })
      .catch((err) => {});
  }, []);
  return (
    <Router>
      <div>
        <div>
          <ul style={unOrderListStyle}>
            <li style={listItemStyle}>
              <Link style={linkStyle} to="/courses" href="#about">
                Get All courses
              </Link>
            </li>
            <li style={listItemStyle}>
              <Link style={linkStyle} to="/newcourse" href="#about">
                Add Course
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <Route path="/courses">
          <div>
            <GitAllCourse courses={courses}></GitAllCourse>
          </div>
        </Route>
        <Route path="/newcourse">
          <AddNewCourse></AddNewCourse>
        </Route>
      </div>
    </Router>
  );
}

const unOrderListStyle = {
  listStyleType: "none",
  margin: "0",
  padding: "0",
  overflow: "hidden",
  backgroundColor: "#333333",
};

const listItemStyle = {
  float: "left",
};

const linkStyle = {
  display: "block",
  color: "white",
  textAlign: "center",
  padding: "16px",
  textDecoration: "none",
};
