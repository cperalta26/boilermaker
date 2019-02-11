const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')
app.use(express.static(path.join(__dirname, '../..', 'public' )))

// logging middleware 
const morgan = require('morgan')
app.use(morgan('dev'))

// parsing middleware
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// internal error handling 
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})

// starting the server
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})