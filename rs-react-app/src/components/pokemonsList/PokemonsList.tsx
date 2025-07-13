import { Component } from 'react';
import type { IPokemonsList } from '../../types/types';
import Pokemon from '../pokemon/Pokemon';

class PokemonsList extends Component<IPokemonsList> {
  render() {
    return (
      <div>
        {this.props.pokemonsList.map((pokemon, index) => (
          <Pokemon
            key={index}
            name={pokemon.name}
            description={pokemon.description}
          />
        ))}
      </div>
    );
  }
}

export default PokemonsList;
