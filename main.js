const express = require('express');
const bodyParser = require('body-parser')

const dotenv = require('dotenv');
const mongodb = require('mongoose')

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


const MovieDB  = new mongodb.Schema({
   judul : {
      type : String,
      require : [true, "Masukan judul Film"],
      unique : true
      
   
   }, rating : {
       type :Number,
       default : 3, 
       
   }, sipnosis : {
       type : String
    }

});

const Movie = mongodb.model('movie',MovieDB);




const app = express();
const port = 3000;


 

 
// create application/json parser
const jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: true })


app.get('/', (req, res) =>{

res.status(404)
   .json({message:'Hello World',app:'Hello World'});

})

app.post('/movie/add',urlencodedParser, (req, res) =>{

let {judul,rating,sinopsis} = req.body;

 
    let addMovie = new Movie({
        judul : judul,
        rating : rating,
        sipnosis : sinopsis
      })
      
   addMovie.save().then (doc => {
   
    res.status(200).send("Berhasil memasukan data " + doc);
   }).catch(err =>{
    res.status(500).send("Gagal Insert Data "+err)
   })
 
   
})



app.get('/movie/get/:judul',async(req, res) =>{

    console.log("Ini Query " +req.query);
    console.log("Ini Params" +req.params.judul)
    let judul = req.params.judul;

    let dataHasil = await Movie.find({judul: {$regex: judul, $options: 'i'}});
    res.status(200).json(dataHasil);

  
  

})


app.listen(port,() => {

console.log("Server Siyapp")
})