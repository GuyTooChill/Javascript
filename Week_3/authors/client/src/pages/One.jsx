import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function One() {
    const [ author, setAuthor ] = useState('')
    const {id} = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then((res) => {setAuthor(res.data.results)})
        .catch((err) => {console.log(err)})
    }, [])

    const deleteAuthor = (e) => {
        e.preventDefault()
        axios.delete(`http://localhost:8000/api/authors/${id}`)
        .catch((err) => {console.log(err)})
        navigate('/authors/all')
    }

    return (
        <div>
            <h1>View Author</h1>
            <table className='table'>
                <thead>
                    <th>Name</th>
                    <th>Added On</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    <tr>
                        <td>{author.name}</td>
                        <td>{author.createdAt}</td>
                        <td>
                            <button> <Link to={`/authors/edit/${author._id}`}>Edit</Link></button>|
                            <button onClick={deleteAuthor}>Delete</button>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    )
}
