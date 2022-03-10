import React from "react";

export default function InfoBox({ heading, subheading }) {
  return (
    <div className="flex flex-col space-y-2 mt-3 items-center justify-center mx-3">
      <span className="text-white font-mono font-semibold text-[30px]">
        {heading}
      </span>
      <span className="text-white capitalize font-thin text-[19.5px]">
        {subheading}
      </span>
    </div>
  );
}
