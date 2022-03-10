import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    pokemonImg: null,
    favourites: [],
  },
  reducers: {
    SET_IMAGE: (state, action) => {
      state.pokemonImg = action.payload;
    },
    TOGGLE_FAVOURITE: (state, action) => {
      // Checking whether the pokemon we're favoriting already exists
      if (
        state.favourites.filter((e) => e.id === action.payload.id).length > 0
      ) {
        /* state.favourites contains the element we're looking for */
        state.favourites = state.favourites.filter(
          (e) => e.id !== action.payload.id
        );
      } else {
        state.favourites.push(action.payload);
      }
    },
  },
});

export const { SET_IMAGE, TOGGLE_FAVOURITE } = pokemonSlice.actions;
export default pokemonSlice.reducer;
