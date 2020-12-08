import React from 'react';
import { Link } from 'react-router-dom';
import android from './pics/android.jpg';
import networks from './pics/networks.png';
import webdesign from './pics/webdesign.jpg';
import support from './pics/support.jpg';
import ios from './pics/ios.png';
import webdev from './pics/webdev.jpg';

const TopCategories = (props) => {
	const category = props.categories.map((elem, i) => (
		<div
			className='card'
			key={i}
			onClick={props.categoryCourses.bind(this, elem.id, elem.name)}>
			<Link to={`/categories/${elem.id}`}>
				<img src={android}></img>
				<h2>{elem.name}</h2>
			</Link>
		</div>
	));
	return (
		<div className='cards'>
			<h1 className='tt'>Top categories</h1>
			{category}
		</div>
	);
};

export default TopCategories;
