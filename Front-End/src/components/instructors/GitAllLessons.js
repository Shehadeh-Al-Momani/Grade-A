/* eslint-disable */
import React from "react";
import LessonItem from "./LessonItem";

export default function GitAllLessons({ lessons }) {
  return lessons.map((lesson) => {
    return (
      <div style={lessonItemStyle}>
        <LessonItem lesson={lesson} Key={lesson.id}></LessonItem>
      </div>
    );
  });
}

const lessonItemStyle = {
  width: "30%",
  height: " 350px",
  border: " 1px solid black",
  display: "flex",

  flexdirection: "column",
  margin: "10px",
};
