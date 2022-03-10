import React from "react";
import CustomButton from "./CustomButton";
import { useRouter } from "next/dist/client/router";

export default function Navbar() {
  const router = useRouter();
  return (
    <div className="sticky flex space-x-2  bg-slate-200 h-[70px]">
      <div className="h-full flex items-center mx-3">
        <span
          onClick={() => router.push("/")}
          className="text-black text-2xl font-bold uppercase cursor-pointer hover:text-[28px] transition-all ease-out duration-150">
          Pokedex
        </span>
      </div>
      <div className="h-full text-xl items-center flex">
        <CustomButton text="Favorites" />
      </div>
    </div>
  );
}
