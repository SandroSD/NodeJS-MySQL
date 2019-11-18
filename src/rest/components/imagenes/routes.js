import express from 'express';
import fs from 'fs';

const routes = express.Router();

routes.get("/img", async (req, res) => {
    const imagen = fs.readFileSync('C:\Prueba\pelota.jpg');
    res.status(200).send(imagen);
});

module.exports = routes;