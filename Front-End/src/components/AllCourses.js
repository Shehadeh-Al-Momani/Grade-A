import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const AllCourses = () => {
	const [allCourses, setAllCourses] = useState([]);

	useEffect(() => {
		axios
			.get(`http://localhost:5000/students/courses`)
			.then((response) => {
				setAllCourses(response.data);
			})
			.catch((err) => { console.log('err :', err) });

	}, [])

	return (
		<div className='course-list'>
			<h1 className='tt'>All Courses</h1>
			{
				allCourses.map((e, i) => (
					<div className='one-course' key={i}>
						<Link to={`/courses/${e.id}`}>
							<img src={`${e.img_url}`} alt={`${e.name}`} />
							<div className="course-info">
								<h2>{e.name}</h2>
								<h2>{e.instructor_id}</h2>
								<h2>rate</h2>
							</div>

						</Link>
					</div>
				))
			}
		</div>
	);
};

export default AllCourses;
