import "./App.css";
import Crew from "./components/Crew";
import Destination from "./components/Destination";
import Home from "./components/Home";
import Technology from "./components/Technology";

function App() {
  return (
    <div className="font-[roboto] overflow-hidden tracking-wider">
      <Home />
      <Destination />
      <Crew />
      <Technology />
    </div>
  );
}

export default App;
