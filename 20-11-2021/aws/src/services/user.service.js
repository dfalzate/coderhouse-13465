import { UserModel } from '../models/user.model.js'

export async function createUser(data) {
	try {
		const response = await UserModel.create(data)
		return response
	} catch (error) {
		throw new Error(error)
	}
}
