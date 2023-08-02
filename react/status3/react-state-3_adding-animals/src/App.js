import { useState } from "react";
import { uid } from "uid";
import "./styles.css";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";

const initialAnimals = [
  {
    id: "mTBErig",
    name: "Octopus",
    emoji: "🐙",
  },
  {
    id: "iMsbXQ1",
    name: "Crocodile",
    emoji: "🐊",
  },
  {
    id: "Qjf_K7V",
    name: "Beaver",
    emoji: "🦫",
  },
];

export default function App() {
  const [animals, setAnimals] = useState(initialAnimals);

  function handleAddAnimal(newAnimal) {
    const newAnimalObject = {
      id: uid(),
      name: newAnimal.name,
      emoji: newAnimal.emoji,
    };

    // console.log(newAnimal);

    setAnimals((prevAnimals) => [...prevAnimals, newAnimalObject]);
  }

  return (
    <main className="app">
      <Form onAddAnimal={handleAddAnimal} />
      <List animals={animals} />
    </main>
  );
}
