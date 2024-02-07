import React, { FunctionComponent, useState, useEffect } from 'react';
import POKEMONS from './models/mock-pokemon';
import Pokemon from './models/pokemon';

const App: FunctionComponent = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        setPokemons(POKEMONS)
    }, [])

    const pokemonList = pokemons.map(({id, name, hp, cp, picture, types, created}) =>
        <li key={id}> <img src={picture} alt={picture}/>
            {name}
            {hp}
            {cp}
            {types}
            {created.toString()}
        </li>
    );

    return (
        <div>
            <h1>Pokédex</h1>
            <ul>
                {pokemonList}
            </ul>
        </div>
    )
}

export default App;