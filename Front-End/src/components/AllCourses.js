import React from 'react';
import android from './pics/android.jpg';
import networks from './pics/networks.png';
import webdesign from './pics/webdesign.jpg';
import support from './pics/support.jpg';
import ios from './pics/ios.png';
import webdev from './pics/webdev.jpg';

const AllCourses = (props) => {
	const course = props.allCourses.map((elem, i) => (
		<div className='card' key={i}>
			<img src={android}></img>
			<h2>{elem.name}</h2>
		</div>
	));
	return (
		<div className='cards'>
			<h1 className='tt'>All Courses</h1>
			{course}
		</div>
	);
};

export default AllCourses;
