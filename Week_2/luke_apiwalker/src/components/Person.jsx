import React, {useEffect} from 'react'
import { useParams } from 'react-router'
import { useState } from 'react'
import axios from 'axios'

export default function Person() {
    const [ result, setResult ] = useState({})
    const { number } = useParams()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${number}`)
        .then((response) => {
            setResult(response.data)
            })
        .catch((error) => {console.log(error)})
    },[number])

    return (
        <div>
            <h1>Person</h1>
            <p>Name: {result.name}</p>
            <p>Height: {result.height}</p>
            <p>Mass: {result.mass}</p>
            <p>Birth Year: {result.birth_year}</p>
        </div>
    )
}
