const express = require("express")
const app = express()

app.use(express.json())
const port = process.env.PORT | 3004
const serverless= require('serverless-http')

app.get('/vinod',(req,res)=>{
    console.log("naveen vinod")
    res.status(200).send('i love my wife.She is very beatiful with character')
})

app.get('/checklistnaveen',(req,res)=>{
    res.status(200).send('tested check list successfully running')
})


app.listen(port ,()=>{
    console.log(`server running on http://localhost:${port}`)
})
// module.exports.handler = serverless(app)