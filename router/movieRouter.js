
const express = require('express');
const bodyParser = require('body-parser')
const movieController = require('../controller/movieController')

const urlencodedParser = bodyParser.urlencoded({ extended: true })


const movieRouter = express.Router();

movieRouter
         .route('/')
         .post(urlencodedParser,movieController.postDataMovie )
         .get(movieController.getAllDataMovie);
         
movieRouter
         .route('/:id')
         .get(movieController.getAllDataMovieById)
         .patch(urlencodedParser,movieController.updateDataMovieById)
         .delete(movieController.deleteDataMovieById)
         
         
module.exports = movieRouter;