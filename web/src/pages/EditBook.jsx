import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

function EditBook() {
  const { bookId } = useParams();

  return (
    <div>
      This is the Book id ${bookId}
    </div>
  );
}

export default EditBook;
