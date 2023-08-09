import React from "react";
import { volumes } from "../../../lib/data.js";
import Image from "next/image.js";
import Link from "next/link.js";

export default function Volume() {
  let currentIndex = volumes.findIndex(({ slug }) => slug === "the-two-towers");
  let movie = volumes.find(({ slug }) => slug === "the-two-towers");
  let prevIndex = currentIndex - 1;
  let nextIndex = currentIndex + 1;

  return (
    <div>
      <Link href={`/volumes/`}>🔙All Volumes</Link>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <Image src={movie.cover} alt="image" width={140} height={230} />
      <ul>
        {movie.books.map((book) => (
          <li key={book.ordinal}>
            {book.ordinal}: {book.title}
          </li>
        ))}
      </ul>
      {prevIndex >= 0 ? (
        <Link href={`/volumes/${volumes[prevIndex].slug}`}>Back</Link>
      ) : (
        <span>Back</span>
      )}
      {nextIndex < volumes.length ? (
        <Link href={`/volumes/${volumes[nextIndex].slug}`}>Next</Link>
      ) : (
        <span>Next</span>
      )}
    </div>
  );
}
