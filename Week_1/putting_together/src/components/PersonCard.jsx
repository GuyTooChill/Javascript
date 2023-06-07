import React from 'react'
import { useState } from 'react'


const PersonCard = (props) => {

    const {personFirst, personLast, age, hairColor} = props

    const [old, setAge] = useState(age)

    const getOlder = () => {
        setAge(old + 1)
    }

    return (
    <div>
        <h1>{personLast}, {personFirst}</h1>
        <p>Age : {old}</p>
        <p>Hair Color : {hairColor}</p>
        <button onClick={getOlder}>Birthday Button for {personFirst}</button>
    </div>
    )
}

export default PersonCard