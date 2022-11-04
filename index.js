const express = require('express')
const app = express()

require("dotenv").config()
const PORT = process.env.PORT || 8500


app.get('/', (req, res) => {
  res.send('Hello World!')
})








app.listen(PORT, async() => {
  
console.log(`started at port ${PORT}`);
    
  
})