const Joi = require('@hapi/joi');

module.exports.LoginSchema = Joi.object({
    mail: Joi
            .string()
            .required()
            .email()
            .messages({
                "any.required": `El mail es obligatorio.`,
                "string.base": `El mail es obligatorio.`,
                "string.empty": `El mail es obligatorio.`,
                "string.required": "El mail es obligatorio.",
                "string.email": "El formato del mail es incorrecto."
            }),
    clave: Joi
            .string()
            .required()
            .messages({
                "any.required": `La clave es obligatoria.`,
                "string.base": `La clave es obligatoria.`,
                "string.empty": `La clave es obligatoria.`,
                "string.required": "La clave es obligatoria."
            })
});