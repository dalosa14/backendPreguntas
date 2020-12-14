const express = require('express');
const preguntas = require('../models/preguntas');
const router = express.Router();
const Pregunta = require('../models/preguntas')
router.post('/add', async(req, res) => {
    try {
        if (!req.body.Pregunta) {
            return         res.send({ success: false, msg: 'pregunta no añadida' })

        }
        const pregunta = new Pregunta(req.body)
        await pregunta.save()
        res.send({ success: true, msg: 'pregunta añadida' })
    } catch (error) {
        res.send({ success: false, msg: 'pregunta no añadida' })
    }

})
router.get('/topics', async(req, res) => {
    try {
        let topics = await preguntas.find().select('Tema')
        topics = topics.map(elem => elem.Tema)
        let result = topics.filter((item, index) => {
            return topics.indexOf(item) === index;
        })
        res.send({ success: true, msg: result })
    } catch (error) {
        res.send({ success: false, msg: error })

    }
})


module.exports = router