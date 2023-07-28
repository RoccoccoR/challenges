import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Sum valueA={1} valueB={2}></Sum>
    </div>
  );
}

function Sum({ valueA, valueB }) {
  return valueA + valueB;
}
