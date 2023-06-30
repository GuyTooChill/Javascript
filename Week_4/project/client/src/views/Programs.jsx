import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Programs() {
    const [ workoutList, setWorkoutList] = useState([])
    const [ myList, setMyList ] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/workouts')
        .then((res) => {setWorkoutList(res.data.results)})
        .catch((err) => {console.log(err)})
    })

    const addWorkout = (e) => {
        setMyList(e.target.value)
    }

    return (
        <div className='program'>
            <div className='contentbtns'>
                <button><Link to={'/information'}>Information</Link></button>
                <button><Link to={'/'}>Dashboard</Link></button>
                <button><Link to={'/nutrition'}>Nutrition</Link></button>
            </div>
            <div className='content'>
                <div className='leftpro'>
                    <table>
                        <tr>
                            <th>Workouts</th>
                        </tr>
                        <tbody>
                            {
                                workoutList.map((workout, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{workout.name}</td>
                                            <td><button onClick={addWorkout}>Add</button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className='rightpro'>
                    <table>
                        <tr>
                            <th>Your Program</th>
                        </tr>
                        <tbody>
                            {
                                myList.map((workout, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{workout.name}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
