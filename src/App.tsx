import React, { FunctionComponent, useState, useEffect } from 'react';
import POKEMONS from './models/mock-pokemon';
import Pokemon from './models/pokemon';

const App: FunctionComponent = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        setPokemons(POKEMONS)
    }, [])

    /*
    const pokemonList = pokemons.map(({id, name, hp, cp, picture, types, created}) =>
        <li key={id}> <img src={picture} alt={picture}/>
            {name}
            {hp}
            {cp}
            {types}
            {created.toString()}
        </li>
    );
*/

    return (
        <div>
            <h1 className="center">Pokédex</h1>
            <div className="container">
                <div className="row">
                    {pokemons.map(({ id, name, picture, created }) => (
                        <div className="col s6 m4" key={id}>
                            <div className="card horizontal">
                                <div className="card-image">
                                    <img src={picture} alt={name} />
                                </div>
                                <div className="card-stacked">
                                    <div className="card-content">
                                        <p>{name}</p>
                                        <p><small>{created.toString()}</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    )
}
export default App;