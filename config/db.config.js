const mongoose = require("mongoose")

const mongodbUri = process.env.MONGODB_URI || ""

mongoose.connect(mongodbUri)
  .then(() => console.info(`Successfully connected to ${mongodbUri}`))
  .catch((error) => console.info(`Error connecting to database ${mongodbUri}`))