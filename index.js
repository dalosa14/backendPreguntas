var express = require('express');
var app = express();
const mongoose = require('mongoose')
const cors =require('cors')
app.use(cors())
mongoose.connect('mongodb://localhost/preguntas', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(db => console.log('db conected')).catch(err => console.log(err));
app.use(express.json())

app.use('/preguntas', require('./routes/preguntas.js'))
app.listen(3000, () => console.log('listening on port 3000'))