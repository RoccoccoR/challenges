import React from "react";
import { introduction, volumes } from "../../../lib/data.js";
import Link from "next/link";
import { useRouter } from "next/router"; // Import the useRouter hook

export default function Volumes() {
  const router = useRouter(); // Initialize the router

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function navigateToRandomVolume() {
    const randomVolume = getRandomElement(volumes);
    router.push(`/volumes/${randomVolume.slug}`);
  }

  return (
    <div>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.title}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={navigateToRandomVolume}>
        Click here for pick a random volume!
      </button>
    </div>
  );
}
