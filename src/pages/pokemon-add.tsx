import React, { FunctionComponent, useState, useEffect } from 'react';
import Pokemon from '../models/pokemon';
import PokemonForm from '../components/pokemon-form';
import PokemonService from '../services/pokemon-service';

const PokemonAdd: FunctionComponent = () => {
    const [id] = useState<number>(new Date().getTime());
    const [pokemon] = useState<Pokemon>(new Pokemon(id));

    return (
        <div className="row">
            <h2 className="header center">Ajouter un pokémon</h2>
             <PokemonForm pokemon={pokemon}></PokemonForm>
      </div>
    );
}

  export default PokemonAdd;