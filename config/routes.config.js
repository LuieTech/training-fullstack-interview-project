const express = require("express")
const router = express.Router();
const book = require("../controllers/book.controllers")

router.post('/books', book.create)
router.get("/books", book.list)
router.delete("/books/:id", book.delete)

module.exports = router
