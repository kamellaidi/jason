require('dotenv').config();

const express = require('express');
const cors = require('cors');
const router = require('./app/router');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());

const multer = require('multer');
const bodyParser = multer();

// on utlise .none() pour dire qu'on attends pas de fichier, uniquement des inputs "classiques" !
app.use( bodyParser.none() );

// je parse le format urlencoded du corps de la requete pour alimenter req.body
app.use(express.urlencoded({ extended:true }));
// je parse le format json du corps de la requete pour alimenter req.body
app.use(express.json());
""

app.use(router);

app.listen(PORT, () => {
  console.log(`Listen on http://localhost:${PORT}`);
});