const express = require('express');
const bodyParser = require('body-parser')

const dotenv = require('dotenv');
const mongodb = require('mongoose');

const movieRouter = require('./router/movieRouter');
const userRouter = require('./router/usersRouter');


dotenv.config({path:'./config.env'})
const DB = process.env.DATABASE.replace('<password>',process.env.DATABASE_PASSWORD)
//mongodb+srv://juaracoding:<password>@cluster0.fqgrm.mongodb.net/<dbname>?retryWrites=true&w=majority


mongodb.connect(DB,{
useNewUrlParser:true,
useCreateIndex:true,
useFindAndModify:true
}).then(connection =>{
console.log("Koneksi Berhasil")

})


const app = express();
const port = 3000;




app.use((req, res, next) =>{
 console.log(" aku menambahkan timestamp")
 req.requestTime = new Date().toISOString();
 next();
})


app.use('/movie',movieRouter);
app.use('/users',userRouter);
           
app.listen(port,() => {

console.log("Server Siyapp")
})