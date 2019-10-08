import express from 'express';
require('express-group-routes');

const persons = express.Router();

persons.group("/persons", (router) => {
    router.get("", (req, res) => {
        console.log("desde /");
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

module.exports = persons;