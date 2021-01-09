const mongodb = require('mongoose')

const registDB = new mongodb.Schema({
    username :{
        type : String,
        require : [true, "masukkan Username"],
        unique : true
    }, email : {
        type : String,
    }, phone : {
        type : Number,
    }, address : {
        type : String
    }
});

const Regitsrasi = mongodb.model('regis',registDB);

module.exports = Regitsrasi;