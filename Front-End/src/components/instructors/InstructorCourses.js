import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddNewCourse from "./AddNewCourse";
import GitAllCourse from "./GitAllCourse";
export default function Courses() {
  const [courses, setCourses] = useState();
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
          <ul className="unOrderListStyle">
            <li className="listItemStyle">
              <Link className="linkStyle" to="/instructors/courses" href="#about">
                Get All courses
              </Link>
            </li>
            <li className="listItemStyle">
              <Link className="linkStyle" to="/instructors/newcourse" href="#about">
                Add Course
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <Route path="/instructors/courses">
          <div>
            <GitAllCourse courses={courses}></GitAllCourse>
          </div>
        </Route>
        <Route path="/instructors/newcourse">
          <AddNewCourse></AddNewCourse>
        </Route>
      </div>
    </Router>
  );
}