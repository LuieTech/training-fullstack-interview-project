const Book = require("../models/book.model")
const createError = require("http-errors")

module.exports.create = (req, res, next) => {

  Book.create(req.body)
    .then(book => res.status(201).json(book))
    .catch(error => next(error))

}

module.exports.list = (req, res, next) => {

  Book.find()
    .then((books) => res.status(200).json(books))
    .catch((error) => next(error))

}

module.exports.details = (req, res, next) => {

  console.log("This is the req.params._id: ", req.params.id);
  
  Book.findById(req.params.id)
    .then(book => {
      console.log("This is the book: ",book);
      
      if(!book) createError(404, "book not found")
      else res.status(200).json(book)  
    })
    .catch(err => next(err))

}

module.exports.delete = (req, res, next) => {

  Book.findById(req.params.id)
    .then((book) => {
      if(!book){
        next(createError(404, "Book not found"))
      } else {
        return Book.findByIdAndDelete(book.id)
                .then(() => res.status(204).send())
      }
    })
    .catch((err) => next(err))

}

module.exports.update = (req, res, next) => {

  console.error("This is the ID: ", req.params._id); 

  Book.findByIdAndUpdate(req.params.id, req.body, { runValidators: true, new: true })
    .then((task) => {

      if(task){
        res.status(200).json(task)
      } else {
        next(createError(404, "Book not found"));
      } 

    })
    .catch(error => next(error))

}
