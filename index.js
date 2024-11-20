const express = require("express")

require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000
app.use(express.json())

app.use('/', require('./Routes/routes'))
 app.get('/',(req,res)=>{
    res.send("Welcome to Our App")
 })
app.listen(port , ()=>{
    console.log(`Server is Runing at Port : ${port}`)
})