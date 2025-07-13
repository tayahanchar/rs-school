import { Component } from 'react';
import './Main.css';
import PokemonsList from '../pokemonsList/PokemonsList';
import type { IMain } from '../../types/types';

class Main extends Component<IMain> {
  state = {
    fail: false,
  };

  handleErrorButtonClick = () => {
    this.setState({ fail: true });
  };

  render() {
    if (this.state.fail) {
      throw new Error('Error');
    }
    return (
      <main className="main">
        <button className="errorButton" onClick={this.handleErrorButtonClick}>
          Throw an error
        </button>
        {this.props.isLoading ? (
          <span className="loader"></span>
        ) : this.props.isError ? (
          <p className="error-text">Something went wrong! Try again!</p>
        ) : this.props.pokemonsList.length ? (
          <PokemonsList pokemonsList={this.props.pokemonsList} />
        ) : (
          <p className="error-text">Nothing was found!</p>
        )}
      </main>
    );
  }
}

export default Main;
