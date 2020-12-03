import React, { Component } from 'react'
import wlc from "./pics/wlc.jpg"

export class Interface extends Component {
    render() {
        return (
            <div  className="wlc">
                <img src={wlc}></img>
                <div className="innerTxt">
                    <h1>For every student,<br></br>every classroom.<br></br>Real results.</h1>
                    <h4>Build skills with courses, online from best instructors</h4>  
                    <button>Join For Free</button> 
                </div>   
            </div>
        )
    }
}

export default Interface
