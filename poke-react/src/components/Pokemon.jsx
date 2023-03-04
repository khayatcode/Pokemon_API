import React, {useState, useEffect} from 'react'

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

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then(response => response.json())
            .then(response => setPokemonData(response.results))
            .catch(err => console.log(err) )
    }, [])

  return (
    <div className='container'>
        <h1>Pokemon list</h1>
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