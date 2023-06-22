import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function All() {
    const [ authorList, setAuthorList ] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
        .then((res) => {setAuthorList(res.data.results)})
        .catch((err) => {console.log(err)})
    }, [])


    return (
        <div>
            <h1>View All Authors</h1>
            <table className='table'>
                <thead>
                    <th>Name</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {
                        authorList.map((author, i) => {
                            return (
                                <tr key={i}>
                                    <td>{author.name}</td>
                                    <td>
                                        <button> <Link to={`/authors/one/${author._id}`}>View</Link></button>|
                                        <button> <Link to={`/authors/edit/${author._id}`}>Edit</Link></button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
