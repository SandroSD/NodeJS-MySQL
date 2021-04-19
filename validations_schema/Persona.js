const Joi = require('@hapi/joi');

module.exports.PersonaSchema = Joi.object({
    nombre: Joi.string().min(1).max(50).required(),
    apellido: Joi.string().min(1).max(50).required(),
    mail: Joi.string().min(1).max(50).required().email(),
    clave: Joi.string().min(1).max(255).required(),
    fecha_nacimiento: Joi.date().allow(null),
    direccion: Joi.string().allow(null)
});