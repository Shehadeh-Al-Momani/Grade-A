import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import LogIn from './components/LogIn';
import Course from './components/Course ';
import CategoryCourses from './components/Category_courses';
import PageNotFound from './components/PageNotFound';

const App = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path='/' render={(props) => <Home  {...props} />} />
				<Route path='/join/login' render={(props) => <LogIn  {...props} />} />
				<Route path='/join/signup' render={(props) => <Signup  {...props} />} />
				<Route path='/categories/:id' render={(props) => <CategoryCourses  {...props} />} />
				<Route path='/courses/:id' render={(props) => <Course  {...props} />} />
				<Route render={(props) => <PageNotFound  {...props} />} />
			</Switch>
		</Router>
	);
};

export default App;
