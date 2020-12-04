import React from 'react';
import logo from './pics/logo.png';

const Course = (props) => {
	console.log(props);
	return (
		<div className='course'>
			<div>
				<img src={logo}></img>
			</div>
			<div className='course-details'>
				<h2>Course Name</h2>
				<h3>Android Devlopment Android Devlopment Android Devlopment</h3>
				<h3>Android Devlopment Android Devlopment Android Devlopment</h3>
				<h3>Android Devlopment Android Devlopment Android Devlopment</h3>
				<h3>Android Devlopment</h3>
				<h3>Android Devlopment</h3>
				<h3>Android Devlopment</h3>
				<h3>Android Devlopment</h3>
			</div>
		</div>
	);
};

export default Course;
