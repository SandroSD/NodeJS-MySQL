import express from 'express';
require('express-group-routes');
import { getAll } from './controller';

const users = express.Router();

users.group("/usuarios", (router) => {
    router.get("", (req, res) => {
		console.log("desde /");
		getAll();
    });
    router.get("/:id", (req, res) => {
        console.log("desde :id");
    });
    router.post("", (req, res) => {
        console.log("desde post");
    });
    router.put("/:id", (req, res) => {
        console.log("desde put");
    });
});

module.exports = users;