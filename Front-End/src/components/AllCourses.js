import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const AllCourses = () => {
	const [allCourses, setAllCourses] = useState([]);
	const [enrollmentCourses, setEnrollmentCourses] = useState([]);
	const [allInstructors, setAllInstructors] = useState([]);

	useEffect(() => {
		getAllCourses()
		getEnrollmentCourses()
		getAllInstructors()
	}, [])

	const getAllCourses = () => {
		axios.get(`http://localhost:5000/students/allCourses`)
			.then((response) => {
				console.log('setAllCourses :', response.data)
				setAllCourses(response.data);
			})
			.catch((err) => { console.log('err :', err) });
	};

	const getEnrollmentCourses = () => {
		axios.get(`http://localhost:5000/students/history/5`)
			.then((response) => {
				console.log('setEnrollmentCourses :', response.data)
				setEnrollmentCourses(response.data);
			})
			.catch((err) => { console.log('err :', err) });
	};

	const getAllInstructors = () => {
		axios.get(`http://localhost:5000/students/instructors/2`)
			.then((response) => {
				console.log('getAllInstructors :', response.data)
				setAllInstructors(response.data);
			})
			.catch((err) => { console.log('err :', err) });
	};

	return (
		<div className='courses'>
			<div className='courses_side'></div>
			<div className='cards'>
				<h1 className='tt'>All Courses</h1>
				{
					allCourses.map((e, i) => (
						<div className='card_course' key={i}>
							<Link to={`/courses/${e.id}`}>
								<img src={`${e.img_course}`} alt={`${e.course}`} />
								<h2>{e.course}</h2>
							</Link>
						</div>
					))
				}
			</div>
		</div>
	);
};

export default AllCourses;
