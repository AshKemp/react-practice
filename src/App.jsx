import { useEffect, useState } from "react";
import "./App.css";

const Card = ({ title }) => {
  const [count, setCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    console.log(`${title} has been ${hasLiked ? "liked" : "unliked"}`);
  }, [hasLiked]);

  useEffect(() => {
    console.log("CARD RENDERED");
  }, []);
  return (
    <div className="card" onClick={() => setCount(count + 1)}>
      <h2>
        {title} <br /> {count ? count : null}
      </h2>
      <button
        onClick={() => {
          setHasLiked(!hasLiked);
        }}
      >
        {hasLiked ? "Liked" : "Like"}
      </button>
    </div>
  );
};
function App() {
  return (
    <div className="card-container">
      <Card title={"Avatar"} />
      <Card title={"Star Wars"} />
      <Card title={"Interstellar"} />
    </div>
  );
}

export default App;
