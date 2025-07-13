import { Component } from 'react';
import type { IPokemon } from '../../types/types';
import './Pokemon.css';

class Pokemon extends Component<IPokemon> {
  render() {
    return (
      <div className="pokemon">
        <p className="pokemon-name">{this.props.name}</p>
        <p className="pokemon-description">{this.props.description}</p>
      </div>
    );
  }
}

export default Pokemon;
