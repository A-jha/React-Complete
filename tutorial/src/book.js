import React from "react";
import "./book.css";

const Book = (props) => {
  const { img, title, price, children } = props;
  return (
    <>
      <Heading />
      <Box />
      <div className="book">
        <Image img={img} />
        <Title title={title} />
        <Price price={price} />
        <button
          type="button"
          onClick={() => {
            alert("inline fuction");
          }}
        >
          Change Background
        </button>
        <button type="button">Complex Btn</button>
        {children}
      </div>
    </>
  );
};

const Image = (props) => {
  return <img className="img" src={props.img} alt="Unsplash random img" />;
};

const Title = (props) => {
  return <article className="title">{props.title}</article>;
};

const Price = (props) => {
  return (
    <p className="dollar">
      $<span className="price">{props.price}</span>
    </p>
  );
};
const Heading = () => {
  return <div className="heading">List of Places</div>;
};
const Box = () => {
  return <div className="box"></div>;
};
export default Book;
