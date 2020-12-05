import React from 'react'
import Functions from '../components/Functions'
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';
import AddCategory from './AddCategory'

const AdminPage = () => {
    return (
        <div>
            <Router>
                <Route path='/'>
                    <Functions/> 
                </Route> 
                <Route path='/addcat'>
                    <AddCategory/>
                </Route>
            </Router>
        </div>
    )
}

export default AdminPage
