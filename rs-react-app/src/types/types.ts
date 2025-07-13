import type { ReactNode } from 'react';

export interface IPokemonWithoutDescr {
  name: string;
  url: string;
}

export interface IPokemonsList {
  pokemonsList: IPokemon[];
}

export interface IPokemon {
  name: string;
  description: string;
}

export interface IPokemon {
  name: string;
  description: string;
}

export interface IMain {
  pokemonsList: IPokemon[];
  isError: boolean;
  isLoading: boolean;
}

export interface IHeader {
  handleSearch: (str: string) => void;
}

export interface IErrorBoundaryProps {
  children: ReactNode;
}

export interface IErrorBoundaryState {
  hasError: boolean;
}

export interface IFlavorTextEntries {
  flavor_text: string;
  language: { name: string; url: string };
}
