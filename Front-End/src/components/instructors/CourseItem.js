import React from "react";

export default function CourseItem(props) {
  return (
    <div style={courseItemStyle}>
      <img src={props.course.image} alt="Avatar" style={{ width: "100%" }} />
      <div style={secondDevStyle}>
        <h4>
          <b>{props.course.name}</b>
        </h4>
        <p>{props.course.decription}</p>
      </div>
    </div>
  );
}

const courseItemStyle = {
  display: "flex",
  width: "150px",
  margin: " 10px",
};

const secondDevStyle = {
  margin: " 20px",
};
