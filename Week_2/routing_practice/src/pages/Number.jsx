import React from 'react'
import { useParams } from 'react-router'

export default function Number() {
    const { number = 4 } = useParams()
    return (
        <div>
            <h1>Number</h1>
            <p>{number}</p>
        </div>
    )
}
