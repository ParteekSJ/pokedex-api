import axios from "axios";
import React, { useEffect, useState } from "react";
import { IMAGE_API_URL, POKEMON_API_URL } from "../config";
import PokemonCard from "./PokemonCard";

export default function Pokedex({ pokemons }) {
  return (
    <div className="text-white grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 justify-between mx-6 my-8">
      {pokemons ? (
        pokemons.map((pokemon, idx) => {
          return (
            <PokemonCard
              key={idx}
              name={pokemon.name}
              image={pokemon.url ? pokemon.url : pokemon.sprites.front_default}
              id={pokemon.id}
            />
          );
        })
      ) : (
        <>Loading</>
      )}
    </div>
  );
}
