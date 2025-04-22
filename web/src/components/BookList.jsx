import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function BookList() {
  const [books, setBooks] = useState();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      title: "",
      author: "",
      description: "",
    },
  });

  const getBooks = async () => {
    const response = await fetch("http://localhost:3000/v1/books");
    const books = await response.json();
    setBooks(books);
  };

  useEffect(() => {
    getBooks();
  }, []);

  const addBook = async (book) => {
    
    try {
      const response = await fetch("http://localhost:3000/v1/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(book),
      });

      getBooks();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (bookId) => {
    console.log("This is the Book Id: ",bookId);
    
    const response = await fetch("http://localhost:3000/v1/books/"+ bookId, {
      method: "DELETE",
    });
    getBooks();
    
  }

  const onSubmit = (data) => {
    addBook(data);
    reset();
  };

  return (
    <>
      <div className="m-5">BookList</div>
      <form className="mb-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="row mb-4">
          {/* title */}
          <div className="col">
            <input
              {...register("title", { required: "title is needed" })}
              className="form-control"
              placeholder="title"
            />
            {errors.title && (
              <div className="invalid-feedback d-block">
                {errors.title.message || "Title is required"}
              </div>
            )}
          </div>
          {/* author */}
          <div className="col">
            <input
              {...register("author", { required: true })}
              className="form-control"
              placeholder="author"
            />
          </div>
        </div>
        {/* description */}
        <div className="form-group">
          <textarea
            {...register("description")}
            className="form-control"
            placeholder="description"
            id="description"
            rows="3"
          ></textarea>
        </div>
        <div className="m-4">
          <button className="btn btn-success me-2" type="submit">
            Create
          </button>
        </div>
      </form>
      {books?.map((book) => (
      <div key={book._id}  className="card m-2" style={{ width: "18rem" }}>
        
          <div className="card-body">
            <h5 className="card-title">{book.title}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              {book.author}
            </h6>
            <p className="card-text">{book.description}</p>
          </div>
          <button onClick={() => handleDelete(book._id)}>Delete</button>
       
      </div> ))}
    </>
  );
}

export default BookList;
