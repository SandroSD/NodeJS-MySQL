const express = require('express');
const bodyParser = require('body-parser');

const personas = require('./routes/persona');

const app = express();

app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(personas);

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Aplicación iniciada en el puerto: http://localhost:${PORT}`);
})