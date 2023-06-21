import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function One() {
    const [ product, setProduct] = useState('')
    const {id} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res) => {setProduct(res.data.results)})
        .catch((err) => {console.log(err)})
    }, [])

    return (
        <div>
            <h1>View One Product</h1>
            <table className='table'>
                <thead>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Created On</th>
                    <th>Updated On</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    <tr>
                        <td>{product.title}</td>
                        <td>{product.price}</td>
                        <td>{product.description}</td>
                        <td>{product.createdAt}</td>
                        <td>{product.updatedAt}</td>
                        <td>
                            <button> <Link to={`/products/edit/${product._id}`}>Edit</Link></button>|
                            <button><Link to={`/products/delete/${product._id}`}>Delete</Link></button>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    )
}
