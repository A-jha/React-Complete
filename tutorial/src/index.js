import React from "react";
import ReactDom from "react-dom";
import Book from "./book";
//import css
import "./index.css";
//import Book from "./book";
// const books = [
//   {
//     img: "https://source.unsplash.com/weekly?water",
//     title: "first",
//     price: 20,
//   },
//   {
//     title: "Second",
//     price: 200,
//     img: "https://source.unsplash.com/weekly?flower",
//   },
//   {
//     title: "Third",
//     price: 100,
//     img: "https://source.unsplash.com/weekly?home",
//   },
//   {
//     title: "Forth",
//     price: 90,
//     img: "https://source.unsplash.com/weekly?light",
//   },
// ];
function Greeting() {
  return (
    <main className="mainPage">
      <Heading />
      <Box />
      <div className="booklist">
        <Book
          title="first"
          price={20}
          img="https://source.unsplash.com/weekly?water"
        />
        <Book
          title="Second"
          price={200}
          img="https://source.unsplash.com/weekly?flower"
        />
        <Book
          title="Third"
          price={100}
          img="https://source.unsplash.com/weekly?home"
        />
        <Book
          title="Forth"
          price={90}
          img="https://source.unsplash.com/weekly?light"
        />
      </div>
    </main>
  );
}
// implicit return
const Heading = () => {
  return <div className="heading">List of Places</div>;
};
const Box = () => {
  return <div className="box"></div>;
};
ReactDom.render(<Greeting />, document.getElementById("root"));
