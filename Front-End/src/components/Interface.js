import React from 'react';
import { Link } from 'react-router-dom';
import wlc from './pics/wlc.jpg';

const wlcStyle = {
	backgroundImage: `url(${wlc})`,
	height: '400px',
	backgroundSize: 'cover',
	backgroundPosition: 'center',
};

const Interface = () => {
	return (
		<div style={wlcStyle} className='wlc'>
			<div className='innerTxt'>
				<h1>
					For every student,<br></br>every classroom.<br></br>Real results.
					</h1>
				<h4>Build skills with courses, online from best instructors</h4>
				<button onClick={() => window.location.reload()} ><Link to='/join/signup' >Join For Free</Link></button>				
			</div>
		</div>
	)
}

export default Interface

