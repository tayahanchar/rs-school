import { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import fetchData from './utils/fetchData';
import Main from './components/main/Main';
import fetchPokemons from './utils/fetchPokemonsWithDescription';

interface IPokemon {
  name: string;
  url: string;
}

class App extends Component {
  state = {
    pokemons: [],
    isError: false,
    isLoading: false,
  };

  async componentDidMount() {
    const searchStr = localStorage.getItem('searchStr');

    if (searchStr) {
      this.handleSearch(searchStr);
    } else {
      this.setState({ isLoading: true });
      try {
        const pokemons = await fetchData('https://pokeapi.co/api/v2/pokemon');
        const pokemonsWithDescription = await fetchPokemons(pokemons.results);

        this.setState({
          pokemons: pokemonsWithDescription,
          isError: false,
          isLoading: false,
        });
      } catch (error) {
        console.log(error);
        this.setState({ isError: true, isLoading: false });
      }
    }
  }

  handleSearch = async (str: string) => {
    if (str.trim().length === 0) return;

    localStorage.setItem('searchStr', str);

    this.setState({ isLoading: true });

    try {
      const result = await fetchData(
        `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`
      );

      const filtredData = result.results.filter((pokemon: IPokemon) =>
        pokemon.name.startsWith(str.toLowerCase())
      );

      const pokemonsWithDescription = await fetchPokemons(filtredData);

      this.setState({
        pokemons: pokemonsWithDescription,
        isError: false,
        isLoading: false,
      });
    } catch (error) {
      console.log(error);
      this.setState({ isError: true, isLoading: false });
    }
  };

  render() {
    return (
      <div>
        <Header handleSearch={this.handleSearch} />
        <Main
          pokemonsList={this.state.pokemons}
          isError={this.state.isError}
          isLoading={this.state.isLoading}
        />
      </div>
    );
  }
}

export default App;
