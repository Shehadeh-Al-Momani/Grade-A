import React from 'react'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import logo from './pics/logo.png';
import search from './pics/search.png';

export const Result = (props) => {
    return (
        <div>
        {
                props.result.map((course, i) => {
                    return <div key={i}>
                        {course.name}
                    </div>
                })}
        </div>
    )
}
