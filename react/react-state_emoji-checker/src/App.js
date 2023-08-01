import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const validCode = "🐡🐠🐋";
  const initialCode = ""; // Set the initial code as an empty string

  // Step 1: Declare a state variable for the code
  const [code, setCode] = useState(initialCode);

  // Step 2: Implement the handleClick function to update the state variable
  const handleClick = (emoji) => {
    setCode(emoji); // Update Code with the clicked emoji directly
  };

  const handleReset = () => {
    setCode(initialCode); // Reset Code
  };

  return (
    <div className="container">
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            handleClick("🐡");
          }}
        >
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick("🐋");
          }}
        >
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick("🐠");
          }}
        >
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>{" "}
      </div>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
      <h2>{code || "?"}</h2> {/* Display "?" only if code is empty */}
      {code === validCode && <p>Valid code!</p>}
    </div>
  );
}
