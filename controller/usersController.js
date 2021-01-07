const Users = require('../model/usersModel')

///Users
exports.addUsers = (req, res) =>{

    let {nama,umur,alamat} = req.body;
    
     
        let user = new Users({
            nama : nama,
            umur : umur,
            alamat : alamat
          })
          
          user.save().then (doc => {
       
        res.status(200).send("Berhasil memasukan data " + doc);
       }).catch(err =>{
        res.status(500).send("Gagal Insert Data "+err)
       })
     
       
    }
    
exports.getAllUser = async(req, res) =>{

   
    let dataHasil = await Users.find();
    res.status(200).json({
    
    status : "success",
    dataLength : dataHasil.length, 
    timestamp : req.requestTime,
    data : dataHasil
    
    });
}