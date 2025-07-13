import { Component } from 'react';

interface IPokemon {
  name: string;
  description: string;
}

class Pokemon extends Component<IPokemon> {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Pokemon;
