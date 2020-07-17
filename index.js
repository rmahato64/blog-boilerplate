const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://react-blog:rakesh1990@reactblog.bpclo.mongodb.net/<dbname>?retryWrites=true&w=majority',{useNewUrlParser:true }).then(()=>console.log('DB connected'))
                                                    .catch(err=>console.error(err))

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.listen(5000)