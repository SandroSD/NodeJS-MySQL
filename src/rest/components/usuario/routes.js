import express from 'express';
require('express-group-routes');
import { getAll, get, post } from './controller';

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
    router.post("", async (req, res) => {
        const usuario = await post(req.body);
        res.status(201).send(usuario);
    });
    router.put("/:id", async (req, res) => {
        const usuario = await put(req.body);
        res.status(204).end();
    });
});

module.exports = users;