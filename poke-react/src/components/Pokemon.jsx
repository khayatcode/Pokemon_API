import React, {useState, useEffect} from 'react'
import axios from 'axios';

const Pokemon = () => {
    const [pokemonData, setPokemonData] = useState([])

    // You can also do it like this:
    // useEffect(() => {
    //     async function fetchData() {
    //         const response = await fetch('https://pokeapi.co/api/v2/pokemon');
    //         const data = await response.json()
    //         setPokemonData(data.results)
    //         console.log(data.results)
    //     }
    //     fetchData()
    // }, [])

    // useEffect(() => {
    //     fetch("https://pokeapi.co/api/v2/pokemon")
    //         .then(response => response.json())
    //         .then(response => setPokemonData(response.results))
    //         .catch(err => console.log(err) )
    // }, [])

    // useEffect(() => {
    //     async function fetchData() {
    //         const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
    //         setPokemonData(response.data.results)
    //         console.log(response.data.results)
    //     }
    //     fetchData()
    // }, [])

    useEffect(() => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then((response) => {
                console.log(response.data.results)
                setPokemonData(response.data.results)
            })
            .catch(err => console.log(err) )
    }, [])

  return (
    <div className='container'>
        <h1>Axios Pokemon API lists</h1>
        <ul className='list-group'>
            {
                pokemonData.map((pokemon) => (
                    <li key={pokemon.name} className="list-group-item">{pokemon.name}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default Pokemon