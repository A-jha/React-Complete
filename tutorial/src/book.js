import React from "react";
import "./book.css";
//---Variable-----
// let img = "https://source.unsplash.com/daily";
// const tiltle = "This the best view";
// const price = 10;

const Book = (props) => {
  // const img = props.img;
  // const title = props.title;
  // const price = props.price;
  const { img, title, price, children } = props;
  return (
    <div className="book">
      <Image img={img} />
      <Title title={title} />
      <Price price={price} />
      {children}
    </div>
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
export default Book;
