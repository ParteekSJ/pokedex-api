import React from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { SET_IMAGE } from "../features/pokemonSlice";

export default function PokemonCard({ name, image, id }) {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <div
      className="h-[235px] w-[220px] bg-white text-white shadow-md shadow-black rounded-3xl grid place-items-center cursor-pointer relative hover:bg-slate-100 hover:h-[240px] hover:w-[225px] transition-all ease-in-out duration-200"
      onClick={() => {
        dispatch(SET_IMAGE(image));
        router.push(`/${id}`);
      }}>
      <img className="h-[175px] w-[200px] object-contain" src={image} alt="" />
      <div className="absolute bottom-3 ">
        <span className="text-black font-mono uppercase">{name}</span>
      </div>
    </div>
  );
}
