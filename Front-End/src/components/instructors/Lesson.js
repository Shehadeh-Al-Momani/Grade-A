import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddNewCourse from "./AddNewLesson";
import GitAllLessons from "./GitAllLessons";
export default function Lesson() {
  const [lessons, setLessons] = useState([]);

  // [
  //   {
  //     id: "1",
  //     name: "React",
  //     courses: "course name",
  //     videoUrl: "video",
  //     createdAt: "08//2020",
  //   },
  // ]
  useEffect(() => {
    axios
      .get("http://localhost:5000/instructors/lessons")
      .then((res) => {
        setLessons(res.data);
      })
      .catch((err) => {});
  }, []);
  return (
    <Router>
      <div>
        <div>
          <ul style={unOrderListStyle}>
            <li style={listItemStyle}>
              <Link style={linkStyle} to="/lessons">
                Get All Lessons
              </Link>
            </li>
            <li style={listItemStyle}>
              <Link style={linkStyle} to="/newLesson">
                New Lesson
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <Route path="/lessons">
          <div
            style={{
              border: " 1px solid black",
              width: "100%",
              display: "flex",
              // flexdirection: "row",
              flexWrap: "wrap",
            }}
          >
            <GitAllLessons lessons={lessons}></GitAllLessons>
          </div>
        </Route>
        <Route path="/newLesson">
          <div>
            <AddNewCourse></AddNewCourse>
          </div>
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
