import React from 'react'


const PersonCard = (props) => {

    const {personFirst, personLast, age, hairColor} = props

    return (
    <div>
        <h1>{personLast}, {personFirst}</h1>
        <p>Age : {age}</p>
        <p>Hair Color : {hairColor}</p>
    </div>
    )
}

export default PersonCard