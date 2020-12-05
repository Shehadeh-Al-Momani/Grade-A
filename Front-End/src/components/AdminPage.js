import React from 'react'
import Functions from '../components/Functions'
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';
import AddCategory from './AddCategory'
import  Disable  from './Disable';

const AdminPage = () => {
    return (
        <div>
            <Router>
                <Route path='/'>
                    <Functions/> 
                </Route> 
                <Route path='/'>
                    <AddCategory/>
                </Route>
                <Route path='/disable'>
                    <Disable/>
                </Route>
            </Router>
        </div>
    )
}

export default AdminPage
