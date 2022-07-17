import React from "react";
import BookList from "./components/Book/Booklist";
import { createRoot } from "react-dom/client";

// CSS
import './index.css';

const root = createRoot(document.getElementById("root"))
root.render(<BookList />);
