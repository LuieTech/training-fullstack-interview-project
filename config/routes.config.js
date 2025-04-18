const express = require("express")
const router = express.Router();
const book = require("../controllers/book.controllers")

router.post('/books', book.create)
router.get("/books", book.list)
router.delete("/books/:id", book.delete)
router.get("/books/:id", book.details)
router.patch("/books/:id", book.update)

module.exports = router
