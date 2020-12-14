import React, { useState, useEffect } from "react";
import axios from "axios";
//name,price,description,instructor_id,created_at,category_id
export default function AddNewCourse() {
  const [name, setName] = useState("");
  const [courses, setCourses] = useState([
    {
      id: "1",
      name: "web",
    },
    {
      id: "2",
      name: "design",
    },
  ]);
  const [selectedFile, setSelectedFile] = useState("");
  const [createdAt, setCreatedAt] = useState("");

  const onChangeHandler = (e) => {
    console.log(e.target.files[0]);
    setSelectedFile(e.target.files[0]);
    const data = new FormData();
    data.append("file", selectedFile);
    axios
      .post("http://localhost:5000/instructors/uploadVideo", data, {
        // receive two parameter endpoint url ,form data
      })
      .then((res) => {
        // then print response status
        console.log(res.statusText);
      });
  };

  const handleSubmit = (e) => {
    const index = e.target[2].selectedIndex;
    const el = e.target[2].childNodes[index];
    const option = el.getAttribute("id");
    console.log(option);
    axios
      .post("http://localhost:5000/instructors/lesson", {
        name: e.target[0].value,
        video_url: "test_url",
        course_id: option,
      })
      .then((res) => {})
      .catch((err) => {});
    e.preventDefault();
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/instructors/courses")
      .then((res) => {
        setCourses(res.data);
        console.log(res.data);
      })
      .catch((err) => {});
  }, []);
  const onNameChange = (value) => {
    setName(value);
  };

  const onCourseIdChange = (value) => {
    setCourses(value);
  };

  const onCreatedAtChange = (value) => {
    setCreatedAt(value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input
          style={inputStyle}
          type="text"
          id="name"
          onChange={(e) => onNameChange(e.target.value)}
        />

        <label>video Url </label>
        <input type="file" name="file" onChange={onChangeHandler} />
        <br></br>
        {/* <input
          style={inputStyle}
          type="text"
          id="image"
          name="image"
          onChange={(e) => onImgeUrlChange(e.target.value)}
        /> */}

        {/* <input
          style={inputStyle}
          type="text"
          id="Category"
          name="Category"
          onChange={(e) => onCategoryIdChange(e.target.value)}
        /> */}
        {/* <label for=""></label>
  <input type="text" id="" name="" /> */}

        <label>Courses</label>
        <select style={optionStyle}>
          {" "}
          {courses.map((course) => (
            <option key={course.id} id={course.id} value={course.name}>
              {course.name}
            </option>
          ))}
        </select>
        <input style={submitStyle} type="submit" name="Submit" value="save" />
      </form>
    </div>
  );
}

const optionStyle = {
  width: "160px",
  height: "30px",
  border: "3px solid",
  marginLeft: "20px",
};

const inputStyle = {
  width: "100%",
  padding: "12px 20px",
  margin: " 8px 0",
  display: "inline-block",
  border: "1px solid #ccc",
  borderRadius: "4px",
  boxSizing: "border-box",
};

const submitStyle = {
  width: "100%",
  backgroundColor: " #4CAF50",
  color: "white",
  padding: "14px 20px",
  margin: "8px 0",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};
