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

	const countResults = allCourses.reduce((acc) => acc + 1, 0)
	return (
		<div className='coursesMain'>
			<div className='coursesSide'></div>
			<div className='coursesCards'>
				{/* <div className='countResults'>{countResults} results</div> */}
				<h1 className='tt'>
					Courses
				<div className='countResults'>
						{countResults} results
					</div>
				</h1>
				{
					allCourses.map((e, i) => (
						<Link to={`/students/courses/${e.courseId}`} key={i}>
							<div className='oneCourse' >
								<div className='imgCourse'>
									<img className='imgCourse' src={`${e.img_course}`} alt={`${e.course}`} />
								</div>
								<div className='oneCourse2'>
									<div> {e.course} </div>
									<div> {e.description} </div>
									<div> {e.category} </div>
									<div> {e.instructor} </div>
								</div>
								<div className='oneCourse3'>
									<div> $ {e.price} </div>
								</div>
							</div>
						</Link>
					))
				}
			</div>
		</div>
	);
};

export default AllCourses;
