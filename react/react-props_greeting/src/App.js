import "./styles.css";

export default function App() {
  return (
    <div>
      <Greeting name="Human"></Greeting>
    </div>
  );
}

function Greeting({ name }) {
  return <p>Hello, {name}</p>;
}
