import React from "react";
import "./styles.css";

export default function App() {
  const handleClick = () => {
    alert("You clicked me!");
  };

  return (
    <Button
      text="Click me!"
      color="#fff200"
      disabled={false}
      onClick={handleClick}
    />
  );
}

function Button({ text, color, disabled, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{ height: "300px", width: "300px", backgroundColor: color }}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
