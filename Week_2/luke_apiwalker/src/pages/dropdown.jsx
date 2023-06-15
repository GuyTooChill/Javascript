import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'



export default function Dropdown() {
    const [ number, setNumber ] = useState('')
    const [ category, setCategory ] = useState('people')
    const navigate = useNavigate()

    const fetchData = (e) => {
        e.preventDefault()
        navigate(`/${category}/${number}`)
    }

    const changeNumber = (e) => {
        setNumber(e.target.value)
    }

    const changeCategory = (e) => {
        setCategory(e.target.value)
    }
    return (
        <div>
            <form onSubmit={fetchData}>
                <label>Search For:</label>
                <select name="category" onChange={changeCategory} >
                    <option value='people' >People</option>
                    <option value='planets' >Planets</option>
                </select>
                <label>ID:</label>
                <input type='number' name='id' onChange={changeNumber} />
                <button>Search</button>
            </form>
        </div>
    )
}
