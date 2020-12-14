import React, { useState, useEffect } from "react";
import axios from "axios";
//name,price,description,instructor_id,created_at,category_id
export default function AddNewCourse() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [instructorId, setInstructorId] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [categorys, setCategorys] = useState([]);
  const [isDisable, setIsDisable] = useState("No");
  useEffect(() => {
    axios
      .get("http://localhost:5000/instructors/categories")
      .then((res) => {
        setCategorys(res.data);
        console.log(res.data);
      })
      .catch((err) => {});
  }, []);
  const onChangeHandler = (e) => {
    setSelectedFile(e.target.files[0]);
    const data = new FormData();
    data.append("file", selectedFile);
    axios
      .post("http://localhost:5000/instructors/upload", data, {
        // receive two parameter endpoint url ,form data
      })
      .then((res) => {
        // then print response status
        console.log(res.statusText);
      });
  };

  // const onChangeCategoryHandler = (e) => {
  //   const index = e.target.selectedIndex;
  //   const el = e.target.childNodes[index];
  //   const option = el.getAttribute("id");
  // };

  const handleSubmit = (e) => {
    const index = e.target[4].selectedIndex;
    const el = e.target[4].childNodes[index];
    const option = el.getAttribute("id");
    console.log(option);
    axios
      .post("http://localhost:5000/instructors/course", {
        name: e.target[0].value,
        price: e.target[1].value,
        description: e.target[2].value,
        instructor_id: 2,
        category_id: option,
      })
      .then((res) => {})
      .catch((err) => {});
    e.preventDefault();
  };

  useEffect(() => {
    //
  }, []);
  const onNameChange = (value) => {
    setName(value);
  };
  const onPriceChange = (value) => {
    setPrice(value);
  };
  const onDescriptionChange = (value) => {
    setDescription(value);
  };
  const onInstructorIdChange = (value) => {
    setInstructorId(value);
  };

  const onCreatedAtChange = (value) => {
    setCreatedAt(value);
  };
  const onCategoryChange = (value) => {
    setCategorys(value);
    console.log(value);
    console.log(value);
  };

  const onIsDisableChange = (value) => {
    setIsDisable(value);
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
        <label>price</label>
        <input
          style={inputStyle}
          type="text"
          id="price"
          name="price"
          onChange={(e) => onPriceChange(e.target.value)}
        />
        <label>description</label>
        <input
          style={inputStyle}
          type="text"
          id="description"
          name="description"
          onChange={(e) => onDescriptionChange(e.target.value)}
        />
        <label>image Url </label>
        <input type="file" name="file" onChange={onChangeHandler} />
        <br></br>
        {/* <input
          style={inputStyle}
          type="text"
          id="image"
          name="image"
          onChange={(e) => onImgeUrlChange(e.target.value)}
        /> */}
        <label>Category</label>
        {/* onChange={onChangeCategoryHandler} */}
        <select style={optionStyle}>
          {categorys.map((category) => (
            <option key={category.id} id={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>

        {/* <input
          style={inputStyle}
          type="text"
          id="Category"
          name="Category"
          onChange={(e) => onCategoryIdChange(e.target.value)}
        /> */}
        {/* <label for=""></label>
  <input type="text" id="" name="" /> */}
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
