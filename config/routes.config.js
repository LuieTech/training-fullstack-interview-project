const express = require("express")
const router = express.Router();
const book = require("../controllers/book.controllers")

router.post('/books', book.create)

module.exports = router
