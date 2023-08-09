import React from "react";
import { volumes } from "../../../lib/data.js";
import Image from "next/image.js";
import Link from "next/link.js";
import { useRouter } from "next/router.js";

export default function Volume1() {
  const router = useRouter();
  const { slug } = router.query;
  const filtervolumes = volumes.find((volume) => volume.slug === slug);

  if (!filtervolumes) {
    return <p>Volume not found</p>;
  }

  const { title, description, ordinal, books, cover } = filtervolumes;

  return (
    <div>
      <Link href={`/volumes/`}>🔙All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>

      <Image src={cover} alt="image" width={140} height={230} />

      <ul>
        {books.map((book) => (
          <li key={ordinal}>
            {book.ordinal}: {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
