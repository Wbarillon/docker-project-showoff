const express = require('express');
const User = require('../models/Users');
const router = express.Router();

router.get("/get_users", (req, res) => {
    User.find(function (error, items) {
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

router.post("/register", (req, res) => {
    if ((req.body !== null) && (req.header !== null)) {
        const newUser = new User({
            "name": req.body.name,
            "lastname": req.body.lastname,
            "birth": req.body.birth,
            "passion": req.body.passion
        });

        newUser.save()
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