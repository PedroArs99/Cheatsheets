import React from "react";
import { createRoot } from "react-dom/client";

// CSS
import './index.css';

function BookList() {
  return (
    <section className="bookList">
      <Book />
      <Book />
      <Book />
    </section>
  );
}

function Book() {
  return <article className="book">
    <Image />
    <Title />
    <Author />
  </article>;
}

function Image() {
  return <img src="https://images-na.ssl-images-amazon.com/images/I/41keUsJJxPL._SX379_BO1,204,203,200_.jpg"/>
}

function Title() {
  return <h2>Hacking Kubernetes: Threat-Driven Analysis and Defense</h2>
}

function Author() {
  return <h4 style={{color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem'}}>Andrew Martin & Michael Hausenblas</h4>
}

const root = createRoot(document.getElementById("root"))
root.render(<BookList />);
