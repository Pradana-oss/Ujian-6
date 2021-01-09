const express = require('express');
const bodyParser = require('body-parser')
const regisController = require('../controller/regisController');
const urlencodedParser = bodyParser. urlencoded({ extended: true})

const regisRouter = express.Router();
regisRouter
            .route('/')
            .post(urlencodedParser, regisController.newRegist)
            .get(regisController.getAllRegist);
regisRouter
            .route('/:username')
            .get(regisController.getAllDataByUsername)
regisRouter
            .route('/:email')
            .get(regisController.getAllDataByEmail)

module.exports = regisRouter;