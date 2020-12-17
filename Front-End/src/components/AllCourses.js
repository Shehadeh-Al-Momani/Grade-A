import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import { RiFilter3Line } from "react-icons/ri";
import Filter from "./Filter";
import Courses from "./Courses";

const AllCourses = () => {
	const [toggle, setToggle] = useState(true);

	if (toggle) {
		return (
			<div>
				<div className='filter'>
					<button onClick={() => { setToggle(!toggle) }}><RiFilter3Line /> Filter</button>
				</div>
				<div className='coursesMain'>
					<Filter />
					<Courses />
				</div>
			</div>
		);
	}
	return (
		<div>
			<div className='filter'>
				<button onClick={() => { setToggle(!toggle) }}><RiFilter3Line /> Filter</button>
			</div>
			<Filter />
			<Courses />
		</div>
	);
};
export default AllCourses;
