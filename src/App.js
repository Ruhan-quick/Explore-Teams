import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";
import PlayersGallary from "./PlayersGallary/PlayersGallary";

function App() {
  return (
    <div>
      <header className="App">
        <h1>Lets make the team.</h1>
      </header>
      <PlayersGallary></PlayersGallary>
    </div>
  );
}

export default App;
