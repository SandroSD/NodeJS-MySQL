import express from 'express';
require('express-group-routes');
import Usuario from '../usuario/model';
import jwt from 'jsonwebtoken';
import { getByCorreoElectronico } from '../usuario/controller';

const auth = express.Router();

auth.group("/auth", (router) => {
    router.post("/login", async (req, res) => {
        const { correo_electronico, password } = req.body;

        let Usuario = await getByCorreoElectronico(correo_electronico);

        if(Usuario !== null){
            const token = jwt.sign({check: true}, app.get('key'), {expiresIn: '1hr'});
            res.json({token});
        }

        res.json({
            mensaje: "Usuario o contraseña incorrectos"
        });
    })
});