import React from 'react';
import android from './pics/android.jpg';

const Course = (props) => {
	const courseDetails = props.course.map((elem, i) => (
		<div className='course-details'>
			<h2>
				<span>Course Name : </span>
				{elem.name}
			</h2>
			<h3>
				<span>Course Description : </span>
				{elem.description}
			</h3>
			<h3>
				<span>Price: </span>
				{elem.price}
			</h3>
			<h3></h3>
			<h3></h3>
			<h3></h3>
			<h3></h3>
			<h3></h3>
		</div>
	));
	return (
		<div className='course'>
			<div>
				<img src={android}></img>
			</div>
			{courseDetails}
		</div>
	);
};

export default Course;
