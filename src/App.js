import "./App.css";
import { useState } from "react";
import Quote from "./Quote";
import ButtonQuote from "./ButtonQuote";
function App() {
  const [click, setClick] = useState(false);

  return (
    <div className="content">
      <Quote click={click} />
      <ButtonQuote setClick={setClick} />
    </div>
  );
}

export default App;
