import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AdminPage from './components/AdminPage';
import Home from './components/Home';

const App = () => {

  return (
    <Router>
      <Route exact path='/admin'>
        <AdminPage/>
      </Route>
      <Home/>
    </Router>
  );
};

export default App;
