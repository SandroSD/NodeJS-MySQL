require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');

const { verifyToken } = require('./middlewares/auth');

const personas = require('./routes/persona');
const public = require('./routes/public');
const auth = require('./routes/auth');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet());
app.use(cors());

app.use(public);

app.use(verifyToken);

app.use(auth);
app.use(personas);

const { PORT } = process.env;

app.listen(PORT, () => {
    console.log(`Aplicación iniciada en: http://localhost:${PORT}`);
});

/**
 * Clave: 1234
 */

// Seguimos la guía esta.
// https://bluuweb.github.io/node/07-jwt/#validaciones-hapi-joi