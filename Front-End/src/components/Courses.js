import React, { useState, useEffect } from 'react';
import { useHistory,BrowserRouter as Router, Route  } from "react-router-dom";
import axios from "axios";
import { Link } from 'react-router-dom';
import { RiFilter3Line } from "react-icons/ri";
const Courses = () => {
	const history = useHistory();
	const [allCourses, setAllCourses] = useState([]);
	const [toggle, setToggle] = useState(false);

	useEffect(() => {
		getAllCourses()
	}, [])

	const getAllCourses = () => {
		axios.get(`http://localhost:5000/students/allCourses`)
			.then((response) => {
				console.log('setAllCourses :', response.data)
				setAllCourses(response.data);
			})
			.catch((err) => { console.log('err :', err) });
	};

	const countResults = allCourses.reduce((acc) => acc + 1, 0)

	return (
		<div>
			<div className='coursesCards'>
				<h1 className='tt'>
					Courses
	              <div className='countResults'> {countResults} results </div>
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
									<div> {e.rating} </div>
								</div>
								<div className='oneCourse3'>
									<div> $ {e.price} </div>
									<div> more details... </div>
								</div>
							</div>
						</Link>
					))
				}
			</div>
		</div>
	);
};

export default Courses;
