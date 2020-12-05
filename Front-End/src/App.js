import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Students from './Students';

const App = () => {
	return (
		<Router>
			<Students />
		</Router>
	);
};

export default App;
