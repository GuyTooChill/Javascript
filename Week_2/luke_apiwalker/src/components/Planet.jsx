import React, {useEffect} from 'react'
import { useParams } from 'react-router'
import { useState } from 'react'
import axios from 'axios'


export default function Planet() {
    const [ result, setResult ] = useState({})
    const { number } = useParams()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${number}`)
        .then((response) => {
            setResult(response.data)
            })
        .catch((error) => {console.log(error)})
    },[number])

    return (
        <div>
            <h1>Planet</h1>
            <p>Name: {result.name}</p>
            <p>Climate: {result.climate}</p>
            <p>Terrain: {result.terrain}</p>
            <p>Population: {result.population}</p>
        </div>
    )
}
