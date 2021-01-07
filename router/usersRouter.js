const express = require('express');
const bodyParser = require('body-parser')
const usersController = require('../controller/usersController');
const urlencodedParser = bodyParser.urlencoded({ extended: true })

const userRouter = express.Router();
userRouter
         .route('/')
         .post(urlencodedParser,usersController.addUsers)
         .get(usersController.getAllUser);

module.exports = userRouter;