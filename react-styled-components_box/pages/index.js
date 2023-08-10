import React from "react";
import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName";
import BoxWithStyledComponents from "../components/BoxWithStyledComponents";

export default function Home() {
  return (
    <div>
      <h1>Styled Components are Crazy</h1>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithStyledComponents />
      <BoxWithStyledComponents isBlack />
    </div>
  );
}
