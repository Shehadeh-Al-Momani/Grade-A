import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import Course from './Course '
const CategoryCourses = (props) => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/students/category_courses/${props.match.params.id}`)
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => {
        console.log('ERR: ', err);
      });
  }, [props.match.params]);

  return (
    <div className="product-list">
      {
        category.map((e, i) => {
          return <div key={i}>
            <Link to={`/courses/${e.id}`}>
              <div className="course" onClick={() => <Course />}>
                <div className="infoPhoto">{e.name}</div>
              </div>
            </Link>
          </div>
        })
      }
    </div>
  );
};
export default CategoryCourses;

