import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
} from 'react-router-dom';
import logo from './pics/logo.png';
import search from './pics/search.png';

const Navbar = (props) => {
	const categoryList = props.categories.map((e, i) => {
		if (i == 0) {
			return (
				<Link to={`/courses/`} key={i} onClick={props.getAllCourses}>
					{e}
				</Link>
			);
		} else if (i == 1) {
			return (
				<Link to={`/categories/`} key={i}>
					{e}
				</Link>
			);
		}

		return (
			<Link
				to={`/categories/${e.id}`}
				onClick={props.categoryCourses.bind(this, e.id, e.name)}
				category={e.name}
				key={i}>
				{e.name}
			</Link>
		);
	});

	return (
		<div>
			<nav className='navbar'>
				<img src={logo} className='logo'></img>
				<div className='dropdown'>
					<div className='drop-button'>Categories</div>
					<div className='dropdown-content'>{categoryList}</div>
				</div>
				<div className='search'>
					<img src={search}></img>
					<input placeholder='Search for anything'></input>
				</div>
				<h4>Teach On Grade-A</h4>
				<button className='log'>Log in</button>
				<button className='sign'>Sign up</button>
			</nav>
		</div>
	);
};

export default Navbar;
