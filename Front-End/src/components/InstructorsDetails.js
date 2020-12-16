import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import axios from "axios";

const InstructorsDetails = () => {
	const history = useHistory();
	const [users, setUsers] = useState([]);
	useEffect(() => { getInstructorsDetails() }, []);
	const getInstructorsDetails = () => {
		axios.get('http://localhost:5000/admin/instructors_details')
			.then((res) => {
				setUsers(res.data);
			})
			.catch((err) => {
				console.log('ERR: ', err);
			})
	};
	return (
		<div >
			<h1 className='tt'>All Instructors</h1>
			{
				users.map((e, i) => (
					<div key={i}>
						<div>{e.name} || {e.email} || {e.phone}  || {e.isDisabled}</div>
					</div>
				))
			}
			<button className='log' onClick={() => history.push('/admin')}> Home </button>
		</div>
	);
};

export default InstructorsDetails;

