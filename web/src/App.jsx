import { useState } from "react";
import "./App.css";
import BookList from "./components/BookList";
import { Routes, Route } from "react-router-dom";
import EditBook from "./pages/EditBook";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/edit/:bookId" element={<EditBook />} />

        <Route path="*" element={<BookList />} />
      </Routes>
    </>
  );
}

export default App;
