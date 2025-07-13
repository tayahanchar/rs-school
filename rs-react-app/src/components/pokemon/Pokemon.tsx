import { Component } from 'react';

interface IPokemon {
  name: string;
}

class Pokemon extends Component<IPokemon> {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>description</p>
      </div>
    );
  }
}

export default Pokemon;
