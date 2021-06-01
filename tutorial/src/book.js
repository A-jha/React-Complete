import React from "react";
import "./book.css";

const Book = (props) => {
  const complexExample = (title) => {
    console.log(title);
  };
  const { img, title, price } = props;
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
        <button type="button" onClick={() => complexExample(title)}>
          Complex Btn
        </button>
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
