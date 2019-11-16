import express from 'express';
require('express-group-routes');
import { getAll, get, post, put } from './controller';
import { validate } from './validate';
import { validationResult } from 'express-validator';
import { showErrors } from '../../../helpers/manageErrors';

const users = express.Router();

users.group("/usuarios", (router) => {
    router.get("", async (req, res) => {
        const usuarios = await getAll;
        res.status(200).send(usuarios);
    });
    router.get("/:id", async (req, res) => {
        const usuario = await get(req.params.id);
        if(!usuario)
            res.status(404).end();
        res.status(200).send(usuario);
    });
    router.post("", validate(), async (req, res) => {
		const validations = validationResult(req);
		const errors = showErrors(validations);
        if (errors !== null) {
			console.log("errs", errors);
            return res.status(422).json(errors);
        }else{
            //const usuario = await post(req.body);
            //res.status(201).send(usuario);
        }
    });
    router.put("/:id", async (req, res) => {
        const mensaje = await put(req.body, req.params.id);
        console.log(mensaje);
        res.status(204).send(mensaje);
    });
});

module.exports = users;