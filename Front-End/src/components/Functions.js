import React from 'react'
import { useHistory } from "react-router-dom";

const Functions = () => {
    const history = useHistory();
    return (
        <div className="container">
        <div className="functions">
            <button onClick={()=>history.push('/admin')}>Add Category</button>
            <button>Students Details</button>
            <button onClick={()=>history.push('/admin/disable')}>Disable User</button>
            <button>Instructors Details</button>                    
        </div>
    </div>
    )
}

export default Functions
