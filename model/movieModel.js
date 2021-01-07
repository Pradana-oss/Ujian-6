
const mongodb = require('mongoose')


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
 
module.exports = Movie;