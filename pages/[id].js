import axios from "axios";
import React, { useState, useEffect } from "react";
import { POKEMON_API_URL } from "../config";
import { HeartIcon as HeartFilled } from "@heroicons/react/solid";
import { HeartIcon as HeartOutline } from "@heroicons/react/outline";
import InfoBox from "../components/InfoBox";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { TOGGLE_FAVOURITE } from "../features/pokemonSlice";
import Loading from "../components/Loading";

export default function PokemonDetail() {
  const { favourites } = useSelector((state) => ({
    ...state.pokemon,
  }));
  const [fetchedPokemon, setFetchedPokemon] = useState({});
  const [img, setImg] = useState("");
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const [isAlreadyFavorited, setIsAlreadyFavorited] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(POKEMON_API_URL + "/" + id).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        setFetchedPokemon(response.data);
        setImg(response.data.sprites.front_default);
        setLoading(false);
      }
    });
  }, []);

  useEffect(() => {
    if (favourites.filter((e) => e.id === fetchedPokemon.id).length > 0) {
      console.log("IN FAVORITES");
      setIsAlreadyFavorited(true);
    } else {
      console.log(" NOT IN FAVORITES");
      setIsAlreadyFavorited(false);
    }
  }, [favourites, fetchedPokemon]);

  return (
    <div className="h-max sm:h-screen  bg-slate-900 flex flex-col ">
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div className="divide-y px-6 my-8 relative">
            <div className="flex flex-col items-center justify-center my-5">
              {/* NAME OF THE POKEMON */}
              <span className="text-white font-mono text-[75px] capitalize">
                {fetchedPokemon.name}
              </span>
              {/* IMAGE */}
              <img src={img} className="h-80 w-80  mt-[-42px]" alt="" />
            </div>
            <div className="flex sm:flex-row flex-col px-5 justify-between">
              <div className="sm:hidden flex items-center justify-center">
                {isAlreadyFavorited ? (
                  <HeartFilled
                    className="w-16 h-16 text-red-500"
                    onClick={() => {
                      dispatch(TOGGLE_FAVOURITE(fetchedPokemon));
                    }}
                  />
                ) : (
                  <HeartOutline
                    className="w-16 h-16 text-red-500"
                    onClick={() => {
                      dispatch(TOGGLE_FAVOURITE(fetchedPokemon));
                    }}
                  />
                )}
              </div>
              <InfoBox heading="Name" subheading={fetchedPokemon.name} />
              <InfoBox
                heading="Height"
                subheading={`${fetchedPokemon.height}m`}
              />
              <InfoBox
                heading="Weight"
                subheading={`${fetchedPokemon.weight} kgs`}
              />
              {fetchedPokemon.types &&
                fetchedPokemon.types.map((pokemonType) => {
                  const { type } = pokemonType;
                  const { name } = type;
                  return (
                    <InfoBox key={name} heading="Type" subheading={name} />
                  );
                })}
            </div>
          </div>
          {/* HEART ICON - absolute */}
          <div className="invisible sm:visible absolute top-12 right-12">
            {isAlreadyFavorited ? (
              <HeartFilled
                className="w-16 h-16 text-red-500"
                onClick={() => {
                  dispatch(TOGGLE_FAVOURITE(fetchedPokemon));
                }}
              />
            ) : (
              <HeartOutline
                className="w-16 h-16 text-red-500"
                onClick={() => {
                  dispatch(TOGGLE_FAVOURITE(fetchedPokemon));
                }}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
