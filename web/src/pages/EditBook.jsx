import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

function EditBook() {
  const { bookId } = useParams();
  const [editBook, setEditBook] = useState(null);
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    values: editBook,
  });

  const getBookDetails = async () => {
    const response = await fetch("http://localhost:3000/v1/books/" + bookId);
    const book = await response.json();
    setEditBook(book);
  };

  useEffect(() => {
    getBookDetails();
  }, []);

  const handleEdit = async (editBook, id) => {
    try {
      const response = await fetch("http://localhost:3000/v1/books/"+bookId , {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(editBook)
      })

      if(!response.ok){
        const error = await response.json()
        throw new Error(error.message || "Error while editing while fetching");
        
      }

      navigate("/")
    } catch (error) {
        console.log("Update error: ", error.message);
        new Error(error.message)
    }
  };

  return (
    <>
      <form className="mb-4" onSubmit={handleSubmit(handleEdit)}>
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
        <div className="m-4 gap-2 d-flex flex- justify-content-center">
          <div className="">
            <button className="btn btn-success" type="submit">
              Edit
            </button>
          </div>
          <div className="">
            <button className="btn btn-primary" onClick={() => navigate("/")}>
              back
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default EditBook;
