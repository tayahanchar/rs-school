import { Component } from 'react';
import Pokemon from '../pokemon/Pokemon';
import './Main.css';

type MainProps = {
  items: IPokemon[];
  isError: boolean;
  isLoading: boolean;
};

interface IPokemon {
  name: string;
  description: string;
}

class Main extends Component<MainProps> {
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
      <main>
        {this.props.isLoading ? (
          <span className="loader"></span>
        ) : this.props.isError ? (
          <p>Something went wrong! Try again!</p>
        ) : this.props.items.length ? (
          <div>
            {this.props.items.map((item, index) => (
              <Pokemon
                key={index}
                name={item.name}
                description={item.description}
              />
            ))}
          </div>
        ) : (
          <p>Nothing was found!</p>
        )}
        <button onClick={this.handleErrorButtonClick}>Throw an error</button>
      </main>
    );
  }
}

export default Main;
