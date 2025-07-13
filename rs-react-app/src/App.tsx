import { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import fetchData from './utils/fetchData';
import Main from './components/main/Main';

interface IPokemon {
  name: string;
  url: string;
}

class App extends Component {
  state = {
    pokemons: [],
  };

  async componentDidMount() {
    const searchStr = localStorage.getItem('searchStr');
    if (searchStr) {
      this.handleSearch(searchStr);
    } else {
      const result = await fetchData('https://pokeapi.co/api/v2/pokemon');
      this.setState({ pokemons: result.results });
    }
  }

  handleSearch = async (str: string) => {
    if (str.trim().length === 0) return;

    localStorage.setItem('searchStr', str);

    const result = await fetchData(
      `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`
    );

    const filtredData = result.results.filter((pokemon: IPokemon) =>
      pokemon.name.startsWith(str.toLowerCase())
    );

    this.setState({ pokemons: filtredData });
  };

  // const pokemons = await fetchData('https://pokeapi.co/api/v2/pokemon');

  // const promises = pokemons.results.map(async (pokemon: IPokemon) => {
  //   const res = await fetchData(
  //     `https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}`
  //   );
  //   return res;
  // });

  // const results = await Promise.allSettled(promises);

  // const newPokemons = results
  //   .filter((result) => result.status === 'fulfilled')
  //   .map((result, index) => {
  //     const flavor = result.value.flavor_text_entries.find(
  //       (entry) => entry.language.name === 'en'
  //     );

  //     return {
  //       name: pokemons[index].name,
  //       description: flavor ? flavor.flavor_text : 'No description',
  //     };
  //   });

  // this.setState((prev) => ({
  //   pokemons: [...prev.pokemons, ...newPokemons],
  // }));

  render() {
    return (
      <div>
        <Header handleSearch={this.handleSearch} />
        <Main items={this.state.pokemons} />
      </div>
    );
  }
}

export default App;
