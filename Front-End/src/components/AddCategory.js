import React,{useState} from 'react'
import axios from 'axios'

const AddCategory = () => {

    const [name,setname]=useState('')

    const nameHandler =(e)=>{
        setname(e.target.value)
        console.log(name)
    }
    const addCat = ()=>{
        axios.post('http://localhost:5000/admin/category',{name})
        console.log(name,1)

    }

    return (
        <div className="AddCat">
            <h2>Add Category</h2>
                <h4>Name of the new Category</h4>
            <input onChange={nameHandler}></input>
            <button onClick={addCat}>Add</button>
        </div>
    )
}

export default AddCategory
