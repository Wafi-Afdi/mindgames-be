require('dotenv').config()
const express = require('express')
const errorHandler = require('./errorHandler')
const mongoose = require('mongoose')
const connectDB = require('./dbConn')

connectDB();

const app = express()
const cors = require('cors')
const PORT = 3500;
app.use(express.json())
app.use(cors())
app.use(errorHandler)

let server; // jangan disentuh atau diubah nilainya
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})
