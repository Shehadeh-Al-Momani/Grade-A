import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
	useHistory,
} from 'react-router-dom';
import BecomeInstructor from './BecomeInstructor';
import Goals from './Goals';
import Interface from './Interface';
import Navbar from './Navbar';
import Team from './Team';
import TopCategories from './TopCategories';
import Course from './Course';
import CategoryCourses from './CategoryCourses';
import AllCourses from './AllCourses';

const Home = () => {
	const [categories, setCategories] = useState([]);
	const [catCourses, setCatCourses] = useState([]);
	const [categoryName, setCategoryName] = useState([]);
	const [allCourses, setAllCourses] = useState([]);
	const history = useHistory();

	const getAllCategories = () => {
		axios
			.get(`http://localhost:5000/students/categories`)
			.then((response) => {
				setCategories(response.data);
			})
			.catch((err) => {});
	};

	const categoryCourses = (id, name) => {
		axios
			.get(`http://localhost:5000/students//category_courses/${id}`)
			.then((response) => {
				setCatCourses(response.data);
				setCategoryName(name);
			})
			.catch((err) => {});
	};

	const getAllCourses = () => {
		axios
			.get(`http://localhost:5000/students/courses`)
			.then((response) => {
				setAllCourses(response.data);
			})
			.catch((err) => {});
	};

	useEffect(() => {
		getAllCategories();
	}, []);

	return (
		<div>
			<Router>
				<Route
					path='/'
					render={(props) => (
						<Navbar
							{...props}
							categories={['All Courses', 'All Categories', ...categories]}
							categoryCourses={categoryCourses}
							getAllCourses={getAllCourses}
						/>
					)}
				/>
				<Route path='/courses/:id' render={(props) => <Course {...props} />} />

				{/* <Interface />
				<Goals /> */}
				<Route
					exact
					path='/categories'
					render={(props) => (
						<TopCategories
							{...props}
							categories={categories}
							categoryCourses={categoryCourses}
							categoryName={categoryName}
						/>
					)}
				/>
				<Route
					path='/categories/:id'
					render={(props) => (
						<CategoryCourses
							{...props}
							catCourses={catCourses}
							categoryName={categoryName}
						/>
					)}
				/>
				<Route
					path='/courses'
					render={(props) => <AllCourses {...props} allCourses={allCourses} />}
				/>
				<BecomeInstructor />
				<Team />
			</Router>
		</div>
	);
};

export default Home;
