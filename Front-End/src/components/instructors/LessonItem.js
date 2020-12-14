import React from "react";

// id: "1",
// name: "React",
// courses: "course name",
// selectedFile: "video",
// createdAt: "08//2020",
export default function LessonItem(props) {
  return (
    <div style={lessonItemStyle}>
      <video width="320" height="240" controls>
        <source src={props.videoUrl} type="video/mp4" />
        <source src="movie.ogg" type="video/ogg" />
        Your browser does not support the video tag.
      </video>
      <div>
        <h4>
          <b>{props.lesson.name}</b>
        </h4>
      </div>
    </div>
  );
}

const lessonItemStyle = {
  flex: "1",
  width: "150px",
};
