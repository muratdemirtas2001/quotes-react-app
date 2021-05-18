import React, { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";

function Quote({ click }) {
  const [quotes, setQuotes] = useState("");
  const [author, setAuthor] = useState("");
  useEffect(() => {
    fetch("https://muratdemirtas-quote-server.glitch.me/quotes/random")
      .then((response) => response.json())
      .then((data) => {
        setQuotes(data.quote);
        setAuthor(data.author);
      });
  }, [click]);

  return (
    <>
      <div className="quote-wrapper">
        <h1>
          <FaQuoteLeft className="icon-quote"/>
          {quotes}
        </h1>
        <h2>{author}</h2>
      </div>
    </>
  );
}
export default Quote;
