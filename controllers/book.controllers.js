const Book = require("../models/book.model")

module.exports.create = (req, res, next) => {

  Book.create(req.body)
    .then(book => res.status(201).json(book))
    .catch(error => next(error))

}
