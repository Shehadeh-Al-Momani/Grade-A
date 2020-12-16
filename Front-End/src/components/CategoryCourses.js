import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const CategoryCourses = (props) => {
	const { match: { params: { id } } } = props
	const [category, setCategory] = useState([]);
	useEffect(() => {
		axios.get(`http://localhost:5000/students/category_courses/${id}`)
			.then((res) => {
				setCategory(res.data);
			})
			.catch((err) => {
				console.log('ERR: ', err);
			});
	}, [id]);
	return (
		<div className='course-list'>
			<div className='all-courses'>{props.categoryName}</div>
			{
				category.map((e, i) => {
					return <div key={i}>
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
					</div>
				})
			}
		</div>
	);
};

export default CategoryCourses;
