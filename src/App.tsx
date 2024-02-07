import React, { FunctionComponent, useState } from 'react';
import POKEMONS from './models/mock-pokemon';
import Pokemon from './models/pokemon';

const App: FunctionComponent = () => {
    const [pokemons] = useState<Pokemon[]>(POKEMONS);
    const numberOfPokemon = pokemons.length;

    return (
        <div>
            <h1>Pokédex</h1>
            <p>Il y a {numberOfPokemon} pokemons dans votre application </p>
        </div>
    )
}

export default App;