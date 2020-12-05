import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import android from './pics/android.jpg';
import networks from './pics/networks.png';
import webdesign from './pics/webdesign.jpg';
import support from './pics/support.jpg';
import ios from './pics/ios.png';
import webdev from './pics/webdev.jpg';

const TopCategories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => { getTopCategory() }, []);

  const categoriesName = categories.map((e) => e.name);
  const categoriesId = categories.map((e) => e.id);

  const getTopCategory = () => {
    axios.get('http://localhost:5000/students/categories')
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log('ERR: ', err);
      })
  };

  return (
    <div>
      <h1 className='tt'>Top categories</h1>
      <div className='cards' onClick={() => window.location.reload()}>
        < Link to={`/categories/${categoriesId[4]}`}  >
          <div className='card'>
            <img src={android} alt=''></img>
            <h2>{categoriesName[4]}</h2>
          </div>
        </Link >
        < Link to={`/categories/${categoriesId[2]}`} >
          <div className='card' onClick={() => window.location.reload()}>
            <img src={networks} alt=''></img>
            <h2>{categoriesName[2]}</h2>
          </div>
        </Link >
        < Link to={`/categories/${categoriesId[0]}`} >
          <div className='card' onClick={() => window.location.reload()}>
            <img src={webdesign} alt=''></img>
            <h2>{categoriesName[0]}</h2>
          </div>
        </Link >
        < Link to={`/categories/${categoriesId[3]}`} >
          <div className='card' onClick={() => window.location.reload()}>
            <img src={support} alt=''></img>
            <h2>{categoriesName[3]}</h2>
          </div>
        </Link >
        < Link to={`/categories/${categoriesId[5]}`} >
          <div className='card' onClick={() => window.location.reload()}>
            <img src={ios} alt=''></img>
            <h2>{categoriesName[5]}</h2>
          </div>
        </Link >
        < Link to={`/categories/${categoriesId[1]}`} >
          <div className='card' onClick={() => window.location.reload()}>
            <img src={webdev} alt=''></img>
            <h2>{categoriesName[1]}</h2>
          </div>
        </Link >
      </div>
    </div >
  )
}

export default TopCategories

