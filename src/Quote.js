import React, { useEffect, useState } from "react";
function Quote() {
  const [quotes, setQuotes] = useState("");
  const [author, setAuthor] = useState("");
  useEffect(() => {
    fetch("https://muratdemirtas-quote-server.glitch.me/quotes/random")
      .then((response) => response.json())
      .then((data) => {
        setQuotes(data.quote);
        setAuthor(data.author);
      });
  }, []);

  return (
    <>
      <div className="quote-wrapper">
        <h1>{quotes}</h1>
        <h2>{author}</h2>
      </div>
    </>
  );
}
export default Quote;
