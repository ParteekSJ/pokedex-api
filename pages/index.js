import axios from "axios";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Pokedex from "../components/Pokedex";
import { IMAGE_API_URL, POKEMON_API_URL } from "../config";

export default function Home({ pokemons }) {
  return (
    <div className="h-screen">
      <Head>
        <title>Pokedex</title>
        <link rel="shortcut icon" href="/pokeball2.ico" />
      </Head>
      <Navbar />
      <Pokedex pokemons={pokemons} />
    </div>
  );
}

export async function getStaticProps(context) {
  let fetchedPokemonData = [];

  await axios.get(POKEMON_API_URL + "?limit=800").then((response) => {
    if (response.status >= 200 && response.status < 300) {
      const { results } = response.data;
      let newPokemonData = [];
      results.forEach((pokemon, idx) => {
        idx++;
        let pokemonObject = {
          id: idx,
          url: IMAGE_API_URL + idx + ".png",
          name: pokemon.name,
        };
        newPokemonData.push(pokemonObject);
      });
      fetchedPokemonData = newPokemonData;
    }
  });

  return {
    props: {
      pokemons: fetchedPokemonData,
    }, // will be passed to the page component as props
  };
}
