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

module.exports.delete = (req, res, next) => {

  Book.findById(req.params.id)
    .then((book) => {
      if(!book){
        next(createError(404, "Book not found"))
      } else {
        return Book.findByIdAndDelete(book.id)
                .then(() => res.status(200).send())
      }
    })
    .catch((err) => next(err))

}
