import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/number'>Number</Link>
                </li>
                <li>
                    <Link to='/hello'>Word</Link>
                </li>
                <li>
                    <Link to='/color'>Color</Link>
                </li>
            </ul>
        </div>
    )
}
