const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(morgan('tiny'))
app.use('/api', require('./routes'))

app.use((err, request, response, next) => {
  // log the error, for now just console.log
  console.log(err)
  response.status(500).send('Something broke!')
})

app.listen(3000)