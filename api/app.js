require('dotenv').config()
const mongoose = require("mongoose")
const createError = require("http-errors")
const express = require("express")
const logger = require("morgan")

require('./config/db.config')

const app = express()
const cors = require("./config/cors.config")
app.use(cors)
app.use(express.json())
app.use(logger('dev'))

const api = require("./config/routes.config")
app.use("/v1", api)


const port = process.env.PORT || 3000
app.listen(port, () => console.log(`connected to port ${port}`))
