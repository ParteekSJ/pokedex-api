import React from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import Pokedex from "../components/Pokedex";

export default function Favorites() {
  const { favourites } = useSelector((state) => ({
    ...state.pokemon,
  }));

  return (
    <div className="h-screen">
      <Navbar />
      <Pokedex pokemons={favourites} />
    </div>
  );
}
