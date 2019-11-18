const express = require('express');
const body_parser = require('body-parser');
const mongoose = require('mongoose');
const Recipe = require('./models/recipe');
const recipe_route = require('./routes/recipe');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();  
});

app.use(body_parser.json());

app.use('/api/recipes', recipe_route);

mongoose.connect('mongodb+srv://dirkmal:root@cluster0-6uhim.mongodb.net/test?retryWrites=true&w=majority')
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
});

module.exports = app;