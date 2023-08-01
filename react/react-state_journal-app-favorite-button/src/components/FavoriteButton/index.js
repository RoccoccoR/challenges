import "./FavoriteButton.css";
import { ReactComponent as StarFilled } from "./star-filled.svg";
import { ReactComponent as Star } from "./star.svg";
import { useState } from "react";

export default function FavoriteButton() {
  // Destructure the array returned by useState to get the state variable and the function to update it.
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <button
      className="favorite-button"
      onClick={() => {
        // Toggle the isFavorite state when the button is clicked.
        setIsFavorite((prevIsFavorite) => !prevIsFavorite);
      }}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
