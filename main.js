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

const postDataMovie = (req, res) =>{

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
     
       
    }
    
const getAllDataMovie = async(req, res) =>{

   
    let dataHasil = await Movie.find();
    res.status(200).json(dataHasil);
}

const getAllDataMovieById = async(req, res) =>{

   
    let judul = req.params.id;

    let dataHasil = await Movie.find({judul: {$regex: judul, $options: 'i'}});
    res.status(200).json(dataHasil);
}

const updateDataMovieById = async(req, res) =>{

    console.log(req.body)
    await Movie.findByIdAndUpdate(req.params.id,req.body,function (err, docs) { 
     if (err){ 
         console.log(err) 
         res.status(400).json(err);
     } 
     else{ 
         console.log("Updated User : ", docs); 
         res.status(200).json(docs);
     } })
    
 }
 
 const deleteDataMovieById = async(req, res) =>{


    await Movie.findByIdAndDelete(req.params.id,function (err, docs) { 
     if (err){ 
         console.log(err) 
         res.status(400).json(err);
     } 
     else{ 
         console.log("Deleted User : ", docs); 
         res.status(200).json(docs);
     } })
    
 }
 
 


app.route('/movie')
         .post(urlencodedParser,postDataMovie )
         .get(getAllDataMovie);
         
app.route('/movie/:id').get(getAllDataMovieById)
         .patch(urlencodedParser,updateDataMovieById)
         .delete(deleteDataMovieById)



app.listen(port,() => {

console.log("Server Siyapp")
})