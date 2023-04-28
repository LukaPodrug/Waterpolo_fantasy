const express = require('express')

require('dotenv').config()

const { PORT } = process.env

const app = express()

app.get('/', (req, res) => {
  res.status(200).json('App recieved get request')
})

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})