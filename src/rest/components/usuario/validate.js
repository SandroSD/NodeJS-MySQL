import { check } from 'express-validator';

const validate = () => ([
    check('nombre')
        .not().isEmpty().withMessage('El nombre es un campo obligatorio')
        .isLength({ max: 45 }).withMessage('El nombre debe tener máximo 45 caracteres'),
    check('apellido')
        .not().isEmpty().withMessage('El apellido es un campo obligatorio')
        .isLength({ max: 45 }).withMessage('El apellido debe tener máximo 45 caracteres'),
    check('fecha_nacimiento')
        .not().isEmpty().withMessage('La fecha de nacimiento es un campo obligatorio')
        .isISO8601()
        .toDate().withMessage('La fecha es incorrecta'),
    check('correo_electronico')
        .not().isEmpty().withMessage('El correo electrónico es un campo obligatorio')
        .isEmail().withMessage('El correo electrónico tiene formato incorrecto')
        .isLength({ max: 45 }).withMessage('El correo electrónico no debe tener mas de 45 caracteres'),
    check('password')
        .not().isEmpty().withMessage('La contraseña es un campo obligatorio')
        .isLength({ max: 45 }).withMessage('El nombre debe tener máximo 45 caracteres'),
    check('tipo_usuario')
        .not().isEmpty().withMessage('El tipo de usuario es un campo obligatorio')
]);

module.exports = { validate };