import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function Edit() {
    const [ author, setAuthor ] = useState('')
    const {id} = useParams()
    const [ name, setName ] = useState('')
    const navigate = useNavigate()

    const changeName = (e) => {
        setName(e.target.value)
    }

    const editAuthor = (e) => {
        e.preventDefault()
        const authorObj = {name}
        axios.put(`http://localhost:8000/api/authors/${id}`, authorObj)
        navigate('/authors/all')
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then((res) => {setAuthor(res.data.results)})
        .catch((err) => {console.log(err)})
    }, [])


    return (
        <div>
        <h1>Edit your author.</h1>
            <form onSubmit={editAuthor} >
                <div>
                <label htmlFor='name' >Name</label>
                <input type='text' name='name' placeholder={author.name} onChange={changeName} />
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}
