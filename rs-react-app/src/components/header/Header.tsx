import { Component } from 'react';

interface IComponent {
  handleSearch: (str: string) => void;
}

class Header extends Component<IComponent> {
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
      <header>
        <input
          type="text"
          value={this.state.inputText}
          onChange={this.handleInputText}
        />
        <button onClick={() => this.props.handleSearch(this.state.inputText)}>
          Search
        </button>
      </header>
    );
  }
}

export default Header;
