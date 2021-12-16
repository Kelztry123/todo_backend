// import mangoose package


const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const { json } = require('express');
const todoRoutes = require('./routes/todoRoutes');

const app = express();

const port = 3000;

app.use(cors());

app.use(json());

app.get('/',function (req,res){
    //res.send('WWelcome to homepage');
});

app.use('/todos', todoRoutes);

app.listen(port, function (){
    console.log(`Listening on http://localhost:${port}`);
})


// Connection String to MongoDB
const dbURI = 'mongodb+srv://yfgyfgul:lSCy8M5oh2PG4v94@cluster0.k8mrd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(function(result) {
        console.log('Connected to mongodb');
    })
    .catch((err) => console.log(err));