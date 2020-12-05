import React from 'react'
import Functions from '../components/Functions'
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';
import AddCategory from './AddCategory'
import  Disable  from './Disable';

const AdminPage = () => {
    return (
        <div>
            <Router>
                <Route path='/admin'>
                    <Functions/> 
                </Route> 
                <Route path='/admin'>
                    <AddCategory/>
                </Route>
                <Route exact path='/admin/disable'>
                    <Disable/>
                </Route>
            </Router>
        </div>
    )
}

export default AdminPage
