import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
} from 'react-router-dom';
import BecomeInstructor from './BecomeInstructor';
import Goals from './Goals';
import Interface from './Interface';
import Navbar from './Navbar';
import Team from './Team';
import TopCategories from './TopCategories';
import Course from './Course';

const Home = () => {
	const [categories, setCategories] = useState([]);
	const [course, setCourse] = useState([]);

	const getAllCategories = () => {
		axios
			.get(`http://localhost:5000/students/categories`)
			.then((response) => {
				setCategories(response.data);
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
					render={(props) => <Navbar {...props} categories={categories} />}
				/>
				<Route path='/courses/:id' render={(props) => <Course {...props} />} />

				<Interface />
				<Goals />
				<TopCategories />
				<BecomeInstructor />
				<Team />
			</Router>
		</div>
	);
};

export default Home;
