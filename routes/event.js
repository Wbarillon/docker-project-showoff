const express = require('express');
const Event = require('../models/Event');
const router = express.Router();

router.get("/places", (req, res) => {
    Event.find(function (error, items) {
        if (error) {
            console.log(error);
            res.end();
        }
        else {
            res.send(items);
            res.end();
        }
    });
});

router.post("/create", (req, res) => {
    if ((req.body !== null) && (req.header !== null)) {
        const newEvent = new Event({
            "name": req.body.name,
            "nbr_places": req.body.nbr_places
        });

        newEvent.save()
        .then((item) =>{
            res.status(201).json(item).end()
        })
        .catch((error) => {
            res.status(500).end()
        });
    }
});

// Exportation vers server.js
module.exports = router;
