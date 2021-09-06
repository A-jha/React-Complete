import React, { useState, useEffect } from "react";

const App = () => {
  let [quotes, setQuotes] = useState([]);
  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setQuotes(data.quotes);
      });
  }, []);
  return (
    <div className="main">
      <h1 className="title">Random Quotes Generator</h1>
      <Wrapper quotes={quotes} />
      <h4>Created By Avinash jha &copy; {new Date().getFullYear()}</h4>
    </div>
  );
};

const Wrapper = ({ quotes = [] }) => {
  //   const [quote, setQuote] = useState(quotes[0].quote);
  //   const [author, setAuthor] = useState(quotes[0].author);
  const [num, setNum] = useState(0);
  const randomNumber = () => {
    return Math.floor(Math.random() * quotes.length - 1);
  };

  const onClickHandler = () => {
    let randN = randomNumber();
    let color = randomColor();
    document.body.style.color = color;
    document.getElementById(
      "quote-box"
    ).style.boxShadow = `inset  2px 2px 20px ${color} `;
    setNum(randN);
  };

  if (quotes.length === 0) {
    return <h1>Fetching data takes too long refresh please</h1>;
  }
  let tweetLink = `https://twitter.com/intent/tweet?hashtags=quotesoflife&related=avinashJha&text=${quotes[num].quote}`;
  let whatsAppLink = `whatsapp://send?text=${quotes[num].quote}`;

  return (
    <div id="quote-box">
      <p id="text"> {quotes[num].quote}</p>
      <p id="author">{quotes[num].author}</p>
      <div className="buttons">
        <p id="new-quote" onClick={onClickHandler}>
          New Quotes
        </p>
        <a href={tweetLink} target="_top" id="tweet-quote">
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href={whatsAppLink}
          target="_top"
          id="whatsApp"
          id="whatsApp"
          data-action="share/whatsapp/share"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
    </div>
  );
};
const randomColor = () => {
  const hex = ["4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * hex.length)];
  }

  return color;
};
export default App;
