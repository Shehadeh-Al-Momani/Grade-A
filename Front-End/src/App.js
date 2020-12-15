import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
import StudentsDetails from './components/StudentsDetails';
import InstructorsDetails from './components/InstructorsDetails';

const App = () => {
  const [key, setKey] = useState('');
  const [result, setResult] = useState([]);
  return (
    <Router>
      <Route exact path='/admin' render={(props) => <Functions  {...props} />} />
      <Route exact path='/admin' render={(props) => <AddCategory  {...props} />} />
      <Route exact path='/admin/disable' render={(props) => <Disable  {...props} />} />
      <Route exact path='/admin/students_details' render={(props) => <StudentsDetails  {...props} />} />
      <Route exact path='/admin/instructors_details' render={(props) => <InstructorsDetails  {...props} />} />
      <Route render={(props) => <Navbar  {...props} setKey={setKey} setResult={setResult} />} />
      <Switch>
        <Route exact path='/' render={(props) => <Home  {...props} />} />
        <Route path='/result' render={(props) => <Result {...props} result={result} input={key} />} />
        <Route exact path='/join/login' render={(props) => <Login  {...props} />} />
        <Route exact path='/join/signup' render={(props) => <Signup  {...props} />} />
        <Route exact path='/courses/:id' render={(props) => <Course {...props} />} />
        <Route exact path='/categories' render={(props) => (<TopCategories {...props} />)} />
        <Route exact path='/categories/:id' render={(props) => (<CategoryCourses {...props} />)} />
        <Route exact path='/courses' render={(props) => (<AllCourses {...props} />)} />
      </Switch>
    </Router>
  );
};

export default App;
