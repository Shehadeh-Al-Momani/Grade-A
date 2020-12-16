import React, { useState } from 'react';
import './App.css';
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import TopCategories from './components/TopCategories';
import Course from './components/Course';
import CategoryCourses from './components/CategoryCourses';
import AllCourses from './components/AllCourses';
import Login from './components/Login';
import Signup from './components/Signup';
import Result from './components/Result';
import Functions from './components/Functions';
import AddCategory from './components/AddCategory';
import Disable from './components/Disable';
import PageNotFound from './components/PageNotFound';
import Instructors from './components/Instructors';
import jwt_decode from 'jwt-decode';
const token = localStorage.getItem('token');
console.log(token);

const App = () => {
	const [key, setKey] = useState('');
	const [result, setResult] = useState([]);

	if (!token) {
		console.log('No Token!');

		return (
			<Router>
				<Route exact path='/'>
					<Redirect to='/login' />
				</Route>
				<Route exact path='/login' render={(props) => <Login {...props} />} />
				<Route exact path='/signup' render={(props) => <Signup {...props} />} />
			</Router>
		);
	} else {
		const decoded = jwt_decode(token);
		const role_id = decoded.role_id;
		if (role_id === 1) {
			console.log('This is an ADMIN');
			return (
				<Router>
					<Route exact path='/login' render={(props) => <Login {...props} />} />
					<Route
						exact
						path='/signup'
						render={(props) => <Signup {...props} />}
					/>
					<Switch>
						<Route path='/admin' render={(props) => <Functions {...props} />} />
						<Route
							path='/admin'
							render={(props) => <AddCategory {...props} />}
						/>
						<Route
							path='/admin/disable'
							render={(props) => <Disable {...props} />}
						/>
					</Switch>
				</Router>
			);
		} else if (role_id === 3) {
			console.log('This is a STUDENT');
			return (
				<Router>
					<Route
						render={(props) => (
							<Navbar {...props} setKey={setKey} setResult={setResult} />
						)}
					/>
					<Route exact path='/login' render={(props) => <Login {...props} />} />
					<Route
						exact
						path='/signup'
						render={(props) => <Signup {...props} />}
					/>
					<Switch>
						<Route exact path='/' render={(props) => <Home {...props} />} />
						<Route
							path='/result'
							render={(props) => (
								<Result {...props} result={result} input={key} />
							)}
						/>
						<Route
							exact
							path='/courses/:id'
							render={(props) => <Course {...props} />}
						/>
						<Route
							exact
							path='/categories'
							render={(props) => <TopCategories {...props} />}
						/>
						<Route
							exact
							path='/categories/:id'
							render={(props) => <CategoryCourses {...props} />}
						/>
						<Route
							exact
							path='/courses'
							render={(props) => <AllCourses {...props} />}
						/>
						<Route render={(props) => <PageNotFound {...props} />} />
					</Switch>
				</Router>
			);
		} else if (role_id === 2) {
			console.log('This is an INSTRUCTOR');
			return (
				<Router>
					<Route exact path='/login' render={(props) => <Login {...props} />} />
					<Route
						exact
						path='/signup'
						render={(props) => <Signup {...props} />}
					/>
					<Route
						exact
						path='/instructors'
						render={(props) => <Instructors {...props} />}
					/>
				</Router>
			);
		} else {
			return <div>There's something wrong !</div>;
		}
	}
};

export default App;
