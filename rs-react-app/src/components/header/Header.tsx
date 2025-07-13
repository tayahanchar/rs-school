import { Component } from 'react';
import './Header.css';
import type { IHeader } from '../../types/types';

class Header extends Component<IHeader> {
  state = {
    inputText: localStorage.getItem('searchStr') || '',
  };

  handleInputText = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      inputText: event.target.value,
    });
  };

  render() {
    return (
      <header className="header">
        <h1 className="title">Pokémon App</h1>
        <div className="content">
          <input
            className="input"
            type="text"
            value={this.state.inputText}
            onChange={this.handleInputText}
          />
          <button
            className="searchButton"
            onClick={() => this.props.handleSearch(this.state.inputText)}
          >
            Search
          </button>
        </div>
      </header>
    );
  }
}

export default Header;
