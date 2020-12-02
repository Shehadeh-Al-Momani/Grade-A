import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BecomeInstructor from './BecomeInstructor';
import Goals from './Goals';
import Interface from './Interface';
import Navbar from './Navbar';
import Team from './Team';
import TopCategories from './TopCategories';

const Home = () => {

	return (
		<Router>
			<Navbar />
			<Route exact path='/'>
				<Interface />
				<Goals />
				<TopCategories />
				<BecomeInstructor />
				<Team />
			</Route>
		</Router>

	);
}

export default Home;
