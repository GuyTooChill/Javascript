import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='navbar'>
            <Link to={'/'}><img src="https://lezebre.lu/images/thumbnails/350/350/detailed/84/48464-US-ARMY-star-camouflage.jpg" alt="logo" /></Link>
            <h1>I.A.O</h1>
            <div className='buttons'>
                <button><Link to={'/login'}>Login</Link></button><button><Link to={'/register'}>Register</Link></button>
            </div>
        </div>
    )
}
