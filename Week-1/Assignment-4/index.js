// This app starts a server and listens on port 3000 for connections. 
// The app responds with ““Hello, My Server!” for requests to the root URL (/) 

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello, My Server!')
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})