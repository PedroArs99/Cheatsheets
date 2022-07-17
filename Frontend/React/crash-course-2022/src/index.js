import React from "react";
import { createRoot } from "react-dom/client";

// CSS
import './index.css';

const hackingK8s = {
  key: 1,
  title: 'Hacking Kubernetes: Threat-Driven Analysis and Defense',
  author: 'Andrew Martin & Michael Hausenblas',
  img: "https://images-na.ssl-images-amazon.com/images/I/41keUsJJxPL._SX379_BO1,204,203,200_.jpg"
}

const cleanCode = {
  key: 2,
  title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
  author: 'Robert C. Martin',
  img: 'https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg'
}

const books = [hackingK8s, cleanCode]

function BookList() {
  return (
    <section className="bookList">
      {books.map((book) => <Book {...book} />)}
    </section>
  );
}

function Book({title, author, img}) {
  const clickHandler = (author) => alert(author)

  return <article className="book">
    <img src={img}/>
    <h2>{title}</h2>
    <h4>{author}</h4>
    <button type="button" onClick={() => clickHandler(author)}>
      Alert the author
    </button>
  </article>;
}

const root = createRoot(document.getElementById("root"))
root.render(<BookList />);
