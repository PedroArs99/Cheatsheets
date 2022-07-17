import React from "react";
import { createRoot } from "react-dom/client";

// CSS
import './index.css';

const title = 'Hacking Kubernetes: Threat-Driven Analysis and Defense'
const author = 'Andrew Martin & Michael Hausenblas'
const imgSource = "https://images-na.ssl-images-amazon.com/images/I/41keUsJJxPL._SX379_BO1,204,203,200_.jpg"

function BookList() {
  return (
    <section className="bookList">
      <Book title = {title} author={author} imgSource={imgSource}/>
    </section>
  );
}

function Book(props) {
  const {title, author, imgSource} = props

  return <article className="book">
    <img src={imgSource}/>
    <h2>{title}</h2>
    <h4>{author}</h4>
  </article>;
}

const root = createRoot(document.getElementById("root"))
root.render(<BookList />);
