import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Add() {
    const [ name, setName ] = useState('')
    const navigate = useNavigate()


    const changeName = (e) => {
        setName(e.target.value)
    }

    const addAuthor = (e) => {
        e.preventDefault()
        const authorObj = {name}
        axios.post('http://localhost:8000/api/authors/new', authorObj)
        navigate('/authors/all')
    }

    return (
        <div>
            <h1>Add your author.</h1>
            <form onSubmit={addAuthor} >
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
