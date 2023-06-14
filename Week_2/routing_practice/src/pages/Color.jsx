import React from 'react'
import { useParams } from 'react-router'

export default function Color() {
    const {word = 'Hello'} = useParams()

    return (
        <div>
            <h1>Color</h1>
            <p style={{color: 'blue', backgroundColor: 'red'}}>{word}</p>
        </div>
    )
}
