const express = require('express');
const bcrypt = require('bcrypt');
const Persona = require('../models/Persona');

const { PersonaSchema } = require('../validations_schema/Persona');

const { hasPermission } = require('../middlewares/permission');

const { grid, getById, create, update, remove } = require('../security/permissions/persona');

const routes = express.Router();

const {
        getPersonas,
        getPersonaById,
        getPersonaByMail,
        createPersona,
        updatePersona,
        deletePersona
    } = require('../repositories/persona');

routes.post('/personas/grilla', hasPermission(grid), async (req, res) => {
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

routes.get('/personas/:id', hasPermission(getById), async (req, res) => {
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

routes.post('/personas', hasPermission(create), async (req, res) => {
    try {
        const { body } = req;

        const { error } = PersonaSchema.validate(body);

        if(error) {
            return res.status(400)
                    .json({
                        error: error.details[0].message
                    })
        }

        const personaMail = await getPersonaByMail(body.mail);

        if(personaMail) {
            return res.status(400)
                    .json({
                        error: "Mail duplicado"
                    })
        }

        const salt = await bcrypt.genSalt(10);
        const clave = await bcrypt.hash(body.clave, salt);

        const { nombre, apellido, mail, fecha_nacimiento, direccion, role } = body;

        const persona = await createPersona(new Persona(null, nombre, apellido, mail, clave, fecha_nacimiento, direccion, role));

        return res.status(201)
                    .json(persona);
    } catch (error) {
        console.log(error);
        res.status(500);
    }
});

routes.put('/personas/:id', hasPermission(update), async (req, res) => {
    try {
        const { body } = req;
        const { id } = req.params;

        const { error } = PersonaSchema.validate(body);

        if(error) {
            return res.status(400)
                    .json({
                        error: error.details[0].message
                    });
        }

        const personaMail = await getPersonaByMail(body.mail);

        if(personaMail && id !== personaMail.id) {
            return res.status(400)
                    .json({
                        error: "Mail duplicado"
                    })
        }

        const { nombre, apellido, mail, fecha_nacimiento, direccion, role } = body;

        await updatePersona(new Persona(id, nombre, apellido, mail, null, fecha_nacimiento, direccion, role));

        res.status(200)
        res.json();
    } catch (error) {
        console.log(error);
        res.status(500);
    }
});

routes.delete('/personas/:id', hasPermission(remove), async (req, res) => {
    try {
        const { body } = req;
        const { id } = req.params;
        const { activo } = body;

        await deletePersona(new Persona(id, null, null, null, null, null, null, null, activo));

        res.status(200)
        res.json();
    } catch (error) {
        console.log(error);
        res.status(500);
    }
});

module.exports = routes;