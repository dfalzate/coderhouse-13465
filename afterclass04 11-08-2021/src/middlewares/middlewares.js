const joi = require('joi')

const dataVerification = joi.object({
	nombre: joi.string().required(),
	apellido: joi.string().required(),
	edad: joi.number().min(20).optional(),
	email: joi.string().email({ tlds: { allow: false } }),
})

async function validateData(req, res, next) {
	const { body } = req
	try {
		await dataVerification.validateAsync(body)
		next()
	} catch (error) {
		next(error)
	}
}

module.exports = validateData
