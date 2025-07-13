import { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import fetchData from './utils/fetchData';
import Main from './components/main/Main';

class App extends Component {
  async componentDidMount() {
    const result = await fetchData('https://pokeapi.co/api/v2/pokemon');
    console.log(result);
  }

  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
