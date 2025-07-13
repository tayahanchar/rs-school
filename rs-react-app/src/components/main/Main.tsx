import { Component } from 'react';
import Pokemon from '../pokemon/Pokemon';

type MainProps = {
  items: IPokemon[];
  isError: boolean;
  isLoading: boolean;
};

interface IPokemon {
  name: string;
  url: string;
}

class Main extends Component<MainProps> {
  render() {
    return (
      <main>
        {this.props.isLoading ? (
          <div>!!!!!!!!!</div>
        ) : this.props.isError ? (
          <p>Something went wrong! Try again!</p>
        ) : this.props.items.length ? (
          <div>
            {this.props.items.map((item, index) => (
              <Pokemon key={index} name={item.name} />
            ))}
          </div>
        ) : (
          <p>Nothing was found!</p>
        )}
        <button>Throw an error</button>
      </main>
    );
  }
}

export default Main;
