const mongoose = require('mongoose');
const { Schema } = mongoose;
const Preguntas = new Schema({
    Tema: String,
    Pregunta: String,
})

module.exports = mongoose.model('Preguntas', Preguntas)