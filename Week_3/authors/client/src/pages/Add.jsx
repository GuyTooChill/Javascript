import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Add() {
    const [ name, setName ] = useState('')
    const navigate = useNavigate()
    const [errors, setErrors] = useState([]); 

    const changeName = (e) => {
        setName(e.target.value)
    }

    const addAuthor = (e) => {
        e.preventDefault()
        const authorObj = {name}
        axios.post('http://localhost:8000/api/authors/new', authorObj)
        .then(() => {
            navigate('/authors/all')
        })
        .catch(err=>{
            console.log(err)
            const errorResponse = err.response.data.error.errors;
            const errorArr = [];
            for (const key in errorResponse) {
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        }) 
    }

    return (
        <div>
            <h1>Add your author.</h1>
            <form onSubmit={addAuthor} >
            {errors.map((err, index) => <p key={index}>{err}</p>)}
                <div>
                <label htmlFor='name' >Name</label>
                <input type='text' name='name' value={name} onChange={changeName} />
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}
