import React, { useState, useEffect } from 'react';
import axios from "axios";
import logo from './pics/logo.png';

const Course = (props) => {
    const [course, setCourse] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/students/details/${props.match.params.id}`)
            .then((res) => {
                setCourse(...res.data);
            })
            .catch((err) => {
                console.log('ERR: ', err);
            })
    }, [props.match.params.id]);

    return (
        <div className='course'>
            <div>
                <img src={logo} alt='' ></img>
            </div>
            <div className='course-details'>
                <h2>{course.name}</h2>
                <h3>{course.description}</h3>
                <h3>{course.instructor_id}</h3>
                <h3>{course.price + ' $'}</h3>
            </div>
        </div>
    );
};
export default Course;

