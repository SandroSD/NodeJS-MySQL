const express = require('express');
const Persona = require('../models/Persona');

const routes = express.Router();

const { getPersonas, getPersonaById, createPersona, updatePersona, deletePersona } = require('../repositories/persona');

routes.post('/personas/grilla', async (req, res) => {
    const { body } = req;
    let { desde, limite } = body;

    desde = desde || 0;
    desde = Number(desde);

    limite = limite || 5;
    limite = Number(limite);

    try {
        const { personas, rows } = await getPersonas(desde, limite);

        res
            .status(200)
            .send({ data: personas, cantidad: rows });

    } catch (error) {
        console.log(error);
        res.status(500);
    }
});

routes.get('/personas/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const persona = await getPersonaById(id);
        
        if(!persona) {
            res
                .status(204)
                .json({ data: null });
        } else {
            res
                .status(200)
                .json({ data: persona });
        }

    } catch (error) {
        console.log(error);
        res.status(500);
    }
});

routes.post('/personas', async (req, res) => {
    try {
        const { body } = req;
        const { nombre, apellido, fecha_nacimiento, direccion } = body;

        const persona = await createPersona(new Persona(null, nombre, apellido, fecha_nacimiento, direccion));

        res.json(persona)
        res.status(201);
    } catch (error) {
        console.log(error);
        res.status(500);
    }
});

routes.put('/personas/:id', async (req, res) => {
    try {
        const { body } = req;
        const { id } = req.params;
        const { nombre, apellido, fecha_nacimiento, direccion } = body;

        await updatePersona(new Persona(id, nombre, apellido, fecha_nacimiento, direccion));
        
        res.status(200)
        res.json();
    } catch (error) {
        console.log(error);
        res.status(500);
    }
});

routes.delete('/personas/:id', async (req, res) => {
    try {
        const { body } = req;
        const { id } = req.params;
        const { activo } = body;

        await deletePersona(new Persona(id, null, null, null, null, activo));

        res.status(200)
        res.json();
    } catch (error) {
        console.log(error);
        res.status(500);
    }
});

module.exports = routes;