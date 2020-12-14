/* eslint-disable */
import React from "react";
import CourseItem from "./CourseItem";

export default function GitAllCourse({ courses }) {
  return courses.map((course) => {
    return (
      <div
        style={{
          border: " 1px solid black",
          width: "100%",
          display: "flex",
          flexdirection: "column",
          flexWrap: "wrap",
        }}
      >
        <CourseItem
          //   style={courseItemStyle}
          course={course}
          Key={course.id}
        ></CourseItem>
      </div>
    );
  });
}

const courseItemStyle = {
  width: "30%",
  height: " 300px",
  border: " 1px solid black",
  display: "flex",
  flexdirection: "column",
  flexWrap: "wrap",
};
