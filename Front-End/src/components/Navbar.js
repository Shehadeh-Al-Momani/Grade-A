import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import logo from './pics/logo.png';
import search from './pics/search.png';
import Result from './Result';

const Navbar = () => {
  const [key, setKey] = useState('');
  const [result, setResult] = useState([]);

  const resultSearched = (i) => {
    axios.get(`http://localhost:5000/students/search/${i}`)
      .then((res) => {
        setKey(i)
        setResult(res.data);
      })
      .catch((err) => {
        console.log('ERR: ', err);
      })
  }

   return (
    <div>
      <nav className='navbar'>
        <Link to='/' ><img src={logo} className='logo' alt=''></img></Link>
        <h4>Categories</h4>
        <div className='search'>
          <img src={search} alt=''></img>
          <Link to='/result' >
            <input to='/result'
              placeholder='Search for anything'
              onKeyPress={(e) => { if (e.key === 'Enter') resultSearched(e.target.value)}}
            ></input>
          </Link>
        </div>
        <h4><Link to='/join/instructor-signup' >Teach On Grade-A</Link></h4>
        <button className='log'><Link to='/join/login'>Log in</Link></button>
        <button className='sign'><Link to='/join/signup' >Sign up</Link></button>
      </nav>
      <Route path='/result' render={(props) => <Result {...props} result={result} input={key} />} />
    </div>
  )
}

export default Navbar


