import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const foodConfig = {
    headers: {
        'X-RapidAPI-Key': '689b24284emsh651b7f3c923e679p11c1b1jsnef0bd50f3278',
        'X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com'
        }
}

export default function Nutrition() {
    const [ food, setFood] = useState({})
    const [ query, setQuery ] = useState('')

    const getRequest = (e) => {
        e.preventDefault()
        axios.get(`https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=${query}`, foodConfig)
            .then(response => setFood(response.data[0]))
            .then(response => console.log(response.data[0]))
            .catch(error => console.log(error))
    }


    return (
        <div className='nutrition'>
            <div className='contentbtns'>
                <button><Link to={'/information'}>Information</Link></button>
                <button><Link to={'/programs'}>Programs</Link></button>
                <button><Link to={'/'}>Dashboard</Link></button>
            </div>
            <div className='content'>
                <div className='leftnutri'>
                    <form onSubmit={(e) => getRequest(e)}>
                        <div>
                            <label htmlFor="query">Search for your food:</label>
                            <input type="text" name="query" onChange={(e) => setQuery(e.target.value)}/>
                        </div>
                        <div>
                            <button>Submit</button>
                        </div>
                    </form>
                </div>
                <div className='rightnutri'>
                    <h2>Nutritional Information</h2>
                    <p>Name: {food.name}</p>
                    <p>Calories: {food.calories}</p>
                    <p>Carbs: {food.carbohydrates_total_g}</p>
                    <p>Protein: {food.protein_g}</p>
                    <p>Fat: {food.fat_total_g}</p>
                </div>
            </div>
        </div>
    )
}
