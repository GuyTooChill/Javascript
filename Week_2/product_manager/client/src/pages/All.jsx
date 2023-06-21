import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function All() {
    const [ productList, setProductList ] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then((res) => {setProductList(res.data.results)})
        .catch((err) => {console.log(err)})
    }, [])

    return (
        <div>
            <h1>View All Products</h1>
            <table className='table'>
                <thead>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {
                        productList.map((product, i) => {
                            return (
                                <tr key={i}>
                                    <td>{product.title}</td>
                                    <td>{product.price}</td>
                                    <td>
                                        <button> <Link to={`/products/one/${product._id}`}>View</Link></button>|
                                        <button> <Link to={`/products/edit/${product._id}`}>Edit</Link></button>|
                                        <button>Delete</button>
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
