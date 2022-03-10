import React from "react";
import { Grid } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="grid place-items-center h-screen w-screen">
      <Grid color="#00BFFF" height={80} width={80} />{" "}
    </div>
  );
}
