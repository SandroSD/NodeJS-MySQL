require('dotenv').config();

const express = require('express');

const { getPersonaById, modificarClave } = require('../repositories/persona');

const routes = express.Router();

routes.get('/reiniciar-clave/:id', async (req, res) => {

    const { id } = req.params;

    const persona = await getPersonaById(id);

    if(!persona) {
        return res.status(400)
                    .json({
                        error: 'La persona no existe.'
                    });
    }

    const { REINICIAR_CLAVE } = process.env;

    await modificarClave(id, REINICIAR_CLAVE);

    return res.status(200)
                .json({
                    mensaje: "La clave fue reiniciada satisfactoriamente."
                })
});

module.exports = routes;