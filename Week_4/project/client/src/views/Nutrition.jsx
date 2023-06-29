import React from 'react'
import { Link } from 'react-router-dom'

export default function Nutrition() {
    return (
        <div className='nutrition'>
            <div className='contentbtns'>
                <button><Link to={'/information'}>Information</Link></button>
                <button><Link to={'/programs'}>Programs</Link></button>
                <button><Link to={'/'}>Dashboard</Link></button>
            </div>
            <div className='content'>
                <div className='leftnutri'>
                    <p>Left side</p>
                </div>
                <div className='rightnutri'>
                    <p>right side</p>
                </div>
            </div>
        </div>
    )
}
