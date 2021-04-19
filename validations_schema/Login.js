const Joi = require('@hapi/joi');

module.exports.LoginSchema = Joi.object({
    mail: Joi.string().min(1).max(50).required().email(),
    clave: Joi.string().min(1).max(50).required()
});