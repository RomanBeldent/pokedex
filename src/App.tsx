import React, { FunctionComponent, useState, useEffect } from 'react';
import POKEMONS from './models/mock-pokemon';
import Pokemon from './models/pokemon';

const App: FunctionComponent = () => {
    /*
    const [pokemons] = useState<Pokemon[]>(POKEMONS);
    const numberOfPokemon = pokemons.length;
    */


    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        setPokemons(POKEMONS)
    }, [])

    console.log(pokemons);

    return (
        <div>
            <h1>Pokédex</h1>
            <p>Il y a {pokemons.length} pokemons dans votre application </p>
        </div>
    )
}

export default App;