import "./App.css";
import Search from "./components/Search";

function App() {
  return (
    <main>
      <div className="pattern"></div>
      <div className="wrapper">
        <header>
          <h1>
            <img src="./hero.png" alt="Hero Banner" />
            Find <span className="text-gradient">Movies</span> You'll Enjoy
            Without the Hassle
          </h1>
        </header>
        <Search />
      </div>
    </main>
  );
}

export default App;
