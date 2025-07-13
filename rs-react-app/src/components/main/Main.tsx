import { Component } from 'react';
import Pokemon from '../pokemon/Pokemon';

type MainProps = {
  items: IPokemon[];
};

interface IPokemon {
  name: string;
  url: string;
}

class Main extends Component<MainProps> {
  render() {
    return (
      <main>
        <div>
          {this.props.items.map((item, index) => (
            <Pokemon key={index} name={item.name} />
          ))}
        </div>
        <button>Throw an error</button>
      </main>
    );
  }
}

export default Main;
