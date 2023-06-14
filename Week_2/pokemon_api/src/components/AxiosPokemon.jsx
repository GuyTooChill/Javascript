import React, {useState} from 'react'
import axios from 'axios'

const FetchAxiosPokeAPI = () => {

    const [pokemon, setPokemon] = useState([])

    const fetchData = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
        .then((response) => {setPokemon(response.data.results)})
        .catch((error) => {console.log(error)})
    }

    return (
        <div>
            <h1>Pokemon</h1>
            <button onClick={fetchData}>Catch Pokemon</button>
            {
                pokemon.map((p, i) => {
                    return (
                        <li key={i}>
                            <h2>{p.name}</h2>
                        </li>
                    )
                })
            }
        </div>
    )
}

export default FetchAxiosPokeAPI