import React from "react";
import ReactDom from "react-dom";
import Book from "./book";
import "./index.css";
import { books } from "../src/books";

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
