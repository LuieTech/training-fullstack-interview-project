const mongoose = require("mongoose")
const schema = mongoose.Schema;
const bookSchema = new schema(
  {
    title: {
      type: String,
      required: 'Title required'
    },
    author: {
      type: String,
      required: 'Author required',
    },
    description: {
      type: String,
      maxLength: [400, 'max 400 chars']
    }
  },
  {
    timestamps: true
  }

)

const Book = mongoose.model("Book", bookSchema)

module.exports = Book;