import React, { useEffect, useState } from "react";

function BookList() {
  const [books, setBooks] = useState();
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
  });

  const getBooks = async () => {
    const response = await fetch("http://localhost:3000/v1/books");
    const books = await response.json();
    setBooks(books);
  };

  useEffect(() => {
    getBooks();
  }, []);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="m-5">BookList</div>
      <form className="mb-4">
        <div className="row mb-4">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="First name"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
            />
          </div>
        </div>
        <div class="form-group">
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div className="m-4">
          <button className="btn btn-success me-2">Create</button>
          <button className="btn btn-success">Edit</button>
        </div>
      </form>
      <div className="card" style={{ width: "18rem" }}>
        {books?.map((book) => (
          <div key={book._id} className="card-body">
            <h5 className="card-title">{book.title}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              {book.author}
            </h6>
            <p className="card-text">{book.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default BookList;
