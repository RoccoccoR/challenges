import React, { Children } from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>CLick me!</Button>
      <Button>Click me again!</Button>
      <Button>Again...</Button>
      <Button>...and again :) !</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
