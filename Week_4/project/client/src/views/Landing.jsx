import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing() {
    return (
        <div className='landing'>
            <div className='contentbtns'>
                <button><Link to={'/information'}>Information</Link></button>
                <button><Link to={'/programs'}>Programs</Link></button>
                <button><Link to={'/nutrition'}>Nutrition</Link></button>
            </div>
            <div className='content'>
                <div className='lefthome'>
                    <h2>Current Program</h2>
                </div>
                <div className='righthome'>
                    <h2>Nutrition Plan</h2>
                </div>
            </div>
        </div>
    )
}
