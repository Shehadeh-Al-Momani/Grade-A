import React, { useState, useEffect } from 'react';
import { RiFilter3Line } from "react-icons/ri";
import Filter from "./Filter";
import Courses from "./Courses";

const AllCourses = () => {
	const [toggle, setToggle] = useState(true);

	if (toggle) {
		return (
			<>
				<div className='filter'>
					<button onClick={() => { setToggle(!toggle) }}><RiFilter3Line /> Filter</button>
				</div>
				<div className='coursesMain'>
					<Filter />
					<Courses />
				</div>
			</>
		);
	}
	return (
		<>
			<div className='filter'>
				<button onClick={() => { setToggle(!toggle) }}><RiFilter3Line /> Filter</button>
			</div>
			<Filter />
			<Courses />
		</>
	);
};
export default AllCourses;
