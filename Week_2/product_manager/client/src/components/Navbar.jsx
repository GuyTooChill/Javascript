import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <h1>Create or View Products!</h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/products/all'>All</Link>
                </li>
                <li>
                    <Link to='/products/one'>One</Link>
                </li>
                <li>
                    <Link to='/products/edit'>Edit</Link>
                </li>
            </ul>
        </div>
    )
}
