const mongodb = require('mongoose')

const UserDB  = new mongodb.Schema({
    nama : {
       type : String,
       require : [true, "Masukan Nama Anda"],
       unique : true
       
    
    }, umur : {
        type :Number,
        default : 3, 
        
    }, alamat : {
        type : String
     }
 
 });
 
 const Users = mongodb.model('users',UserDB);
 
 module.exports = Users;