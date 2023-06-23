import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <h1>Add or View Authors!</h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/authors/all'>All</Link>
                </li>
            </ul>
        </div>
    )
}
