import { configureStore } from "@reduxjs/toolkit";
import pokemonSlice from "../features/pokemonSlice";

export default configureStore({
  reducer: {
    pokemon: pokemonSlice,
  },
});
