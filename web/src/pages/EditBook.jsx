import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

function EditBook() {
  const { bookId } = useParams();
  const [editBook, setEditBook] = useState(null)
  const {register, handleSubmit, reset, formState: {errors}} = useForm({
    values: editBook
  })

  const getBookDetails = async () => {
    const response = await fetch("http://localhost:3000/v1/books/"+ bookId)
    const book = await response.json()
    console.log("This is the book details: ",book);
    
    setEditBook(book)
    //reset(book)
  }

  useEffect(() => {
    getBookDetails()
  }, [])

  const onSubmit = () => {

  }

  return (
    <>
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
            Edit
          </button>
        </div>
      </form>
    </>
  );
}

export default EditBook;
