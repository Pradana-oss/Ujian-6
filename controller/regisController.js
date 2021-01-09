const Regitsrasi = require('../model/regisModel');

exports.newRegist = (req, res) => {

    let {username, email, phone, address} = req.body;

    let regisbaru = new Regitsrasi({
        username : username,
        email : email,
        phone : phone,
        address : address
    })

    regisbaru.save().then (doc => {
        res.status(200).send("Berhasil Memasukkan Data" + doc);
    }).catch(err => {
        res.status(500).send("Gagal Insert Data" + err)
    })
}

exports.getAllRegist = async(req, res) => {
    let datahasil = await Regitsrasi.find();
    res.status(200).json({

        status : "success",
        dataLength : datahasil.length,
        data : datahasil
    });
}

exports.getAllDataByUsername = async(req,res) => {
    let nama = req.params.username;

    let datahasil = await Regitsrasi.find({username: {$regex: /nama/, $option: 'm'}});
    res.status(200).json({
        status : "success",
        dataLength : datahasil.length,
        data : datahasil
    });
}

exports.getAllDataByEmail = async(req,res) => {
    let surel = req.params.email;

    let datahasil = await Regitsrasi.find({email: {$regex: surel, $option: 'i'}});
    res.status(200).json({
        status : "success",
        dataLength : datahasil.length,
        data : datahasil
    });
}