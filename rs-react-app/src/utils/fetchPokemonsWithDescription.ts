import fetchData from './fetchData';

const fetchPokemons = async (pokemons) => {
  const promises = pokemons.map(async (pokemon) => {
    const res = await fetchData(
      `https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}`
    );
    return res;
  });

  const results = await Promise.allSettled(promises);

  const newPokemons = results
    .filter((result) => result.status === 'fulfilled')
    .map((result, index) => {
      const flavor = result.value.flavor_text_entries.find(
        (entry) => entry.language.name === 'en'
      );

      return {
        name: pokemons[index].name,
        description: flavor ? flavor.flavor_text : 'No description',
      };
    });

  return newPokemons;
};

export default fetchPokemons;
