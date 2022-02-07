import * as userService from '../services/users.service.js'

export async function createUser(req, res) {
	const { body } = req
	try {
		await userService.createUser(body)
		res.status(200).send('Usuario creado!')
	} catch (error) {
		res.status(400).send(error.message)
	}
}

export async function getUsers(req, res) {
	try {
		const users = await userService.getUsers()
		res.status(200).json({ users })
	} catch (error) {
		res.status(400).send(error.message)
	}
}

export async function deleteUser(req, res) {
	const { userId } = req.params
	try {
		await userService.deleteUser(userId)
		res.status(200).send('Usuario borrado!')
	} catch (error) {
		res.status(400).send(error.message)
	}
}

export async function updateUser(req, res) {
	const { userId } = req.params
	const { body } = req
	try {
		await userService.updateUser(userId, body)
		res.status(200).send('Usuario actulizado!')
	} catch (error) {
		res.status(400).send(error.message)
	}
}
