require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const personas = require('./routes/persona');

const app = express();

app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(personas);

const { PORT } = process.env;

app.listen(PORT, () => {
    console.log(`Aplicación iniciada en el puerto: http://localhost:${PORT}`);
})