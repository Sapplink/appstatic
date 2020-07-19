const express = require('express');
const Project = require('../models/Projects');

const router = express.Router();

router.get('/', (req,res) => {
    res.send('We are on projects');
});

router.post('/', (req, res) => {
    const project = new Project({
        cardTitle: req.body.cardTitle,
        cardImg: req.body.cardImg,
        cardTags: req.body.cardTags,
        cardContents: req.body.cardContents
    });

    project.save()
    .then(data => {
        res.json(data);
    })
    .catch(error => {
        res.json({ message: error });
    })
});

module.exports = router;