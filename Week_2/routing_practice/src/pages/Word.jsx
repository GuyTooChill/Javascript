import React from 'react'
import { useParams } from 'react-router'

export default function Word() {
    const { word = 'Hello' } = useParams()
    return (
        <div>
            <h1>Word</h1>
            <p>{word}</p>
        </div>
    )
}
