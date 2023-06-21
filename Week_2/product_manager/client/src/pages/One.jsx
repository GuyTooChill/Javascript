import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function One() {
    const [ product, setProduct] = useState('')

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${product._id}`)
        .then((res) => {setProduct(res)})
        .catch((err) => {console.log(err)})
    })

    return (
        <div>
            <h1>View One Product</h1>
            <table className='table'>
                <thead>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                </thead>
                <tbody>
                    <tr>
                        <td>{product.title}</td>
                        <td>{product.price}</td>
                        <td>{product.description}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
