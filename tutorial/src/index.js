import React from "react";
import ReactDom from "react-dom";
import Book from "./book";
import "./index.css";
const books = [
  {
    id: 1,
    img: "https://source.unsplash.com/weekly?water",
    title: "first",
    price: 20,
  },
  {
    id: 2,
    title: "Second",
    price: 200,
    img: "https://source.unsplash.com/weekly?flower",
  },
  {
    id: 3,
    title: "Third",
    price: 100,
    img: "https://source.unsplash.com/weekly?home",
  },
  {
    id: 4,
    title: "Forth",
    price: 90,
    img: "https://source.unsplash.com/weekly?light",
  },
];

function Greeting() {
  return (
    <main className="mainPage">
      <div className="booklist">
        {books.map((book) => {
          return <Book key={book.id} {...book}></Book>;
        })}
      </div>
    </main>
  );
}

ReactDom.render(<Greeting />, document.getElementById("root"));
