import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
const token = localStorage.getItem('token');
const decoded = jwt_decode(token);
let stuId = decoded.id;

const Course = ({ match: { params: { id }, }, }) => {
	const [course, setCourse] = useState([]);
	const [enrollmentCourses, setEnrollmentCourses] = useState([]);

	useEffect(() => {
		axios
			.get(`http://localhost:5000/students/course/${id}`, {
				headers: { authorization: token },
			})
			.then((res) => {
				console.log('res.data :', res.data)
				setCourse(...res.data);
			})
			.catch((err) => {
				console.log('ERR: ', err);
			});
	}, [id]);

	useEffect(() => {
		axios.get(`http://localhost:5000/students/history/${stuId}`)
			.then((response) => {
				setEnrollmentCourses(response.data);
			})
			.catch((err) => { console.log('err :', err) });
	}, [stuId]);

	const arr = enrollmentCourses.filter((e) => { return e.id === course.id })
	console.log('arr :', arr)
	return (
		<div className='course'>
			<div>
				<img src={`${course.img_course}`} alt={`${course.name}`} />
			</div>
			<div className='course-details'>
				<h2> {' '} <span>Course Name : </span> {course.course}{' '} </h2>
				<h2> {' '} <span>Category : </span> {course.category}{' '} </h2>
				<h3> {' '} <span>Course Description : </span> {course.description} </h3>
				<h3> {' '} <span>Instructor : </span> {course.instructor} </h3>
				<h3> {' '} <span></span> {course.rating} </h3>
				<h3> {' '} <span>Price: </span> {course.price + ' $'}{' '} </h3>
			</div>
		</div>
	);
};

export default Course;

