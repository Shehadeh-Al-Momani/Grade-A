import React, { Component } from 'react'
import Functions from '../components/Functions'
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';
import AddCategory from './AddCategory'

export default class AdminPage extends Component {
    render() {
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
}


