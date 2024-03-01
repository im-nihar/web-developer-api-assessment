import { useState } from "react";
import Home from "./components/Home";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="home-container">
      <Home />
    </div>
  );
}

export default App;
