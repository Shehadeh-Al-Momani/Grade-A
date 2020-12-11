import React from 'react';
import { Link } from 'react-router-dom';
import android from './pics/android.jpg';
import networks from './pics/networks.png';
import webdesign from './pics/webdesign.jpg';
import support from './pics/support.jpg';
import ios from './pics/ios.png';
import webdev from './pics/webdev.jpg';

const CategoryCourses = (props) => {
	const course = props.catCourses.map((elem, i) => (
		<div
			className='card'
			key={i}
			onClick={props.courseDetails.bind(this, elem.id)}>
			<Link to={`/courses/${elem.id}`}>
				<img src={android}></img>
				<h2>{elem.name}</h2>
			</Link>
		</div>
	));
	return (
		<div className='cards'>
			<h1 className='tt'>{props.categoryName}</h1>
			{course}
		</div>
	);
};

export default CategoryCourses;
