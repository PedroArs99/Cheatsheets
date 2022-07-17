import React from "react";
import Book from "./Book";
import { books } from "./books";

//CSS
import "./Booklist.css";

export default function BookList() {
  return (
    <section className="bookList">
      {books.map((book) => (
        <Book {...book} />
      ))}
    </section>
  );
}
