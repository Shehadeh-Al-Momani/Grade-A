import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import LogIn from './components/LogIn';

const App = () => {
	return (
		<Router>
			<Home />
			<LogIn/>
			{/* <Route exact path='/'><Result result={result} /></Route> */}
			{/* <Route path='/result'><Result result={result} /></Route> */}
			{/* <Route path="/" render={(props) => <Home {...props} {...info} />} /> */}

		</Router>
	);
};

export default App;
