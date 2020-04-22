const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const port = process.env.PORT;
const mongo_url = process.env.MONGO_URL;

// Le serveur HTTP
const app = express();

// Un middleware nous permettant de travailler avec du json
app.use(express.json());

// Déclaration des routes
app.use('/api/users', require('./routes/users'));
app.use('/api/event', require('./routes/event'));

// Connexion à la base de donnée
mongoose.connect(mongo_url, {
    dbName: "ma_super_bdd",
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB connecté");
}).catch((error) => {
    console.log(error);
});

// Connexion au serveur
app.listen(port, () => {
    console.log(`Serveur listening on port ${port}`);
    console.log(`http://localhost:${port}`);
});

