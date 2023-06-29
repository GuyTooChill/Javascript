import React from 'react'
import { Link } from 'react-router-dom'

export default function Information() {
    return (
        <div className='info'>
            <div className='contentbtns'>
                <button><Link to={'/'}>Dashboard</Link></button>
                <button><Link to={'/programs'}>Programs</Link></button>
                <button><Link to={'/nutrition'}>Nutrition</Link></button>
            </div>
            <div className='content'>
                <div className='leftinfo'>
                    <p>Left side</p>
                </div>
                <div className='rightinfo'>
                    <p>right side</p>
                </div>
            </div>
        </div>
    )
}
