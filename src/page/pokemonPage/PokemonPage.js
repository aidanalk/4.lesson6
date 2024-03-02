import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from '../../components/PokemonCard/PokemonCard';


const PokemonPage = () => {
    const [pokemonList, setPokemonList] = useState([])
    console.log(pokemonList);

    const getPokemonsList = async () => {
        try {
            const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/')
            return data.results
        } catch(e) {
            console.log('Error', e.message);
        }
    }

    // const getPokemonsListFetch = async() => {
    //     try {
    //         const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
    //         const data = await response.json()
    //     } catch(e) {
    //         console.log('Error', e.message);
    //     }
    // }

    useEffect(()=> {
        getPokemonsList().then((pokemonList)=>setPokemonList(pokemonList))
        // getPokemonsListFetch()
    }, [])

    return (
        <ul>
            {pokemonList.map(pokemon=><PokemonCard pokemon={pokemon}/> )}
        </ul>
    );
};

export default PokemonPage;