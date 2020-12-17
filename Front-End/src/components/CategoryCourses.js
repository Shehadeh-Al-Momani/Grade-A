import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import { RiFilter3Line } from "react-icons/ri";
import Filter from './Filter';
const token = localStorage.getItem('token');

const CategoryCourses = (props) => {
	const { match: { params: { id } } } = props
	const [allCourses, setAllCourses] = useState([]);
	const [toggle, setToggle] = useState(true);

	useEffect(() => {
		axios.get(`http://localhost:5000/students/category_courses/${id}`, { headers: { authorization: token }, })
			.then((res) => {
				setAllCourses(res.data);
			})
			.catch((err) => {
				console.log('ERR: ', err);
			});
	}, [id]);

	const countResults = allCourses.reduce((acc) => acc + 1, 0)
	const div = (
		<>
			<div className='coursesCards'>
				<h1 className='tt'>
					Courses
				<div className='countResults'>
						{countResults} results
					</div>
				</h1>
				{
					allCourses.map((e, i) => (
						<Link to={`/students/courses/${e.id}`} key={i}>
							<div className='oneCourse' >
								<div className='imgCourse'>
									<img className='imgCourse' src={`${e.img_url}`} alt={`${e.name}`} />
								</div>
								<div className='oneCourse2'>
									<div> {e.name} </div>
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
		</>
	)

	if (toggle) {
		return (
			<div>
				<div className='filter'>
					<button onClick={() => { setToggle(!toggle) }}><RiFilter3Line /> Filter</button>
				</div>
				<div className='coursesMain'>
					<Filter />
					{div}
				</div>
			</div>
		);
	}
	return (
		<div>
			<div className='filter'>
				<button onClick={() => { setToggle(!toggle) }}><RiFilter3Line /> Filter</button>
			</div>
			<div >
				<Filter />
				{div}
			</div>
		</div>
	);
};

export default CategoryCourses;
