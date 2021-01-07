
const Movie = require('../model/movieModel')


exports.postDataMovie = (req, res) =>{

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
    
    exports.getAllDataMovie = async(req, res) =>{

   
    let dataHasil = await Movie.find();
    res.status(200).json({
    
    status : "success",
    dataLength : dataHasil.length, 
    timestamp : req.requestTime,
    data : dataHasil
    
    });
}

exports.getAllDataMovieById = async(req, res) =>{

   
    let judul = req.params.id;

    let dataHasil = await Movie.find({judul: {$regex: judul, $options: 'i'}});
    res.status(200).json({
    
        status : "success",
        dataLength : dataHasil.length, 
        timestamp : req.requestTime,
        data : dataHasil
        
        });
    
}

exports.updateDataMovieById = async(req, res) =>{

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
 
 exports.deleteDataMovieById = async(req, res) =>{


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