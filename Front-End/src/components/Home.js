import React, { Component, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import BecomeInstructor from './BecomeInstructor';
import Goals from './Goals';
import Interface from './Interface';
import Navbar from './Navbar';
import Team from './Team';
import TopCategories from './TopCategories';

const Home = () => {

	return (
		<Route path='/'>
			<Navbar />
			<Interface />
			<Goals />
			<TopCategories />
			<BecomeInstructor />
			<Team />
		</Route>
	);
}

export default Home;
