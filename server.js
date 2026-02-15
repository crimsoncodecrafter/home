const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()

app.use(express.json())
app.use(express.static(__dirname))

app.post('/subscribe',(req,res)=>{
  const {name,email} = req.body
  const data = `Name: ${name} | Email: ${email}\n`

  fs.appendFileSync(path.join(__dirname,'subscribers.txt'),data)
  res.sendStatus(200)
})

app.listen(3000,()=>console.log('Server running on http://localhost:3000'))
