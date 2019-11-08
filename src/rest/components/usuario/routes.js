import express from 'express';
require('express-group-routes');
import { getAll, get } from './controller';

const users = express.Router();

users.group("/usuarios", (router) => {
    router.get("", async (req, res) => {
        const usuarios = await getAll;
        res.status(200).send(usuarios);
    });
    router.get("/:id", async (req, res) => {
        const usuario = await get(...req.params.id);
        if(!usuario)
            res.status(404).end();
        res.status(200).send(usuario);
    });
    router.post("", (req, res) => {
        console.log("desde post");
    });
    router.put("/:id", (req, res) => {
        console.log("desde put");
    });
});

module.exports = users;