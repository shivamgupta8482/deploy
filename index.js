const express = require('express')
const app = express()

require("dotenv").config()
const PORT = process.env.PORT || 8500


app.get('/', (req, res) => {
  res.send('Hello World!')
})




app.get('/about', (req, res) => {
    res.send('About page')
  })
  



app.listen(PORT, async() => {
  
console.log(`started at port ${PORT}`);
    
  
})