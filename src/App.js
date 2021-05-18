import "./App.css";
import { useState } from "react";
import MenuBar from "./MenuBar";
import Quote from "./Quote";
import ButtonQuote from "./ButtonQuote";
function App() {
  const [click, setClick] = useState(false);

  return (
    <>
      <MenuBar />
      <div className="content-wrapper">
        <div className="content">
          <Quote click={click} />
        </div>
        <ButtonQuote setClick={setClick} />
      </div>
    </>
  );
}

export default App;
