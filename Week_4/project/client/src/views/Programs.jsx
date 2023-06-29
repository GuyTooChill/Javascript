import React from 'react'
import { Link } from 'react-router-dom'

export default function Programs() {
    return (
        <div className='program'>
            <div className='contentbtns'>
                <button><Link to={'/information'}>Information</Link></button>
                <button><Link to={'/'}>Dashboard</Link></button>
                <button><Link to={'/nutrition'}>Nutrition</Link></button>
            </div>
            <div className='content'>
                <div className='leftpro'>
                    <p>Left side</p>
                </div>
                <div className='rightpro'>
                    <p>right side</p>
                </div>
            </div>
        </div>
    )
}
