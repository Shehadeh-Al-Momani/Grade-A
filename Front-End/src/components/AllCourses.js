import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const AllCourses = () => {
	const [allCourses, setAllCourses] = useState([]);

	useEffect(() => {
		getAllCourses()
		getEnrollmentCourses()
	}, [])

	const getAllCourses = () => {
		axios.get(`http://localhost:5000/students/courses`)
			.then((response) => {
				setAllCourses(response.data);
			})
			.catch((err) => { console.log('err :', err) });
	};

	const getEnrollmentCourses = () => {
		axios.get(`http://localhost:5000/students/history/5`)
			.then((response) => {
				console.log('response.data :', response.data)
				setAllCourses(response.data);
			})
			.catch((err) => { console.log('err :', err) });
	};

	return (
		<div className='cards'>
			<h1 className='tt'>All Courses</h1>
			{
				allCourses.map((e, i) => (
					<div className='card_course' key={i}>
						<Link to={`/courses/${e.id}`}>
							<img src={`${e.img_url}`} alt={`${e.name}`} />
							<h2>{e.name}</h2>
						</Link>
					</div>
				))
			}
		</div>
	);
};

export default AllCourses;
