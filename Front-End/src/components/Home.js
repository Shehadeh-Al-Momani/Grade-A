import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BecomeInstructor from './BecomeInstructor';
import Goals from './Goals';
import Interface from './Interface';
import Team from './Team';
import TopCategories from './TopCategories';

const Home = (props) => {
	return (
		<Router>
			<Interface />
			<Goals />
			<TopCategories />
			<BecomeInstructor />
			<Team />
		</Router>

	);
}

export default Home;
