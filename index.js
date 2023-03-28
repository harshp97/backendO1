const express =  require('express')
const mongoose =  require('mongoose')
const url = "mongodb+srv://user-1100:gtY2VloiAtd00PFk@cluster0.utj6gbv.mongodb.net/?retryWrites=true&w=majority"
const port = process.env.PORT || 9000;

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', function(){
    console.log("connected");
})

app.use(express.json())

const apiRouter = require('./routes/api')
app.use('/api', apiRouter)

app.listen(port, () => {
    console.log(`Server started on port ` + port )
})