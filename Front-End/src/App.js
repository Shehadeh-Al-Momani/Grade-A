import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AdminPage from './components/AdminPage';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';

const App = () => {

  return (
    <Router>
      <Route exact path='/admin'>
        <AdminPage/>
      </Route>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/register">
        <Register/>
      </Route>
      <Route exact path="/login">
        <Login/>
      </Route>
    </Router>
  );
};

export default App;
