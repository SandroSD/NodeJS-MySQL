require('dotenv').config();

const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { getPersonaByMail } = require('../repositories/persona');
const { LoginSchema } = require('../validations_schema/Login');

const routes = express.Router();

routes.post('/auth/login', async (req, res) => {
    try {
        const { body } = req;
        const { error } = LoginSchema.validate(body);

        if(error) {
            return res.status(400)
                .json({
                    err: error.details[0].message
                })
        }

        const persona = await getPersonaByMail(body.mail);

        if(!persona) {
            return res.status(400)
                        .json({
                            error: 'Persona no encontrada.'
                        });
        }

        const claveValida = await bcrypt.compare(body.clave, persona.clave);

        if(!claveValida) {
            return res.status(400)
                        .json({
                            error: 'Clave inválida.'
                        });
        }

        delete persona.clave;

        const { TOKEN_SECRETO, EXPIRES_IN } = process.env;

        const token = jwt.sign({ persona }, TOKEN_SECRETO, { expiresIn: EXPIRES_IN });

        return res.status(200)
                    .json({
                        persona,
                        token
                    });
    } catch (error) {
        console.log(error);
        return res.status(500)
                .json(error);
    }
});

module.exports = routes;