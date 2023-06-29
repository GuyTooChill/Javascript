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
                    <h2>This will be the left section (current program)</h2>
                </div>
                <div className='righthome'>
                    <h2>This will be the right section (nutrition plan)</h2>
                </div>
            </div>
        </div>
    )
}
