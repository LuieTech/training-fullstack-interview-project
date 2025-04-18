import React, { useEffect, useState } from "react";

function BookList() {
  const [books, setBooks] = useState();

  const getBooks = async () => {
    const response = await fetch("http://localhost:3000/v1/books");
    const books = await response.json();
    setBooks(books);
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <>
      <div>BookList</div>
      <div className="card" style={{width: "18rem"}}>
        {books?.map((book) => (
          <div key={book._id} className="card-body">
            <h5 className="card-title">{book.title}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              {book.author}
            </h6>
            <p className="card-text">
              {book.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default BookList;
