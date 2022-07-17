import React from "react";
import { createRoot } from "react-dom/client";

// CSS
import './index.css';

const hackingK8s = {
  title: 'Hacking Kubernetes: Threat-Driven Analysis and Defense',
  author: 'Andrew Martin & Michael Hausenblas',
  img: "https://images-na.ssl-images-amazon.com/images/I/41keUsJJxPL._SX379_BO1,204,203,200_.jpg"
}

const cleanCode = {
  title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
  author: 'Robert C. Martin',
  img: 'https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg'
}

function BookList() {
  return (
    <section className="bookList">
      <Book book={hackingK8s}/>
      <Book book={cleanCode}/>
    </section>
  );
}

function Book({book}) {
  const {title, author, img} = book

  return <article className="book">
    <img src={img}/>
    <h2>{title}</h2>
    <h4>{author}</h4>
  </article>;
}

const root = createRoot(document.getElementById("root"))
root.render(<BookList />);
